import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    FiRefreshCcw,
    FiPlus,
    FiMinus,
    FiArrowLeftCircle,
    FiArrowRightCircle,
} from 'react-icons/fi';

import New from './New';
import Content from './Content';
import { Head, ShowBox } from '../../common';

import { getCode } from '../../../actions';

import './index.css';

const MAX_GIST = 30;

class Code extends Component {
    state = {
        page: 1,
        addForm: false,
    };

    componentDidMount() {
        this.getCode();
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.page !== this.state.page ||
            prevProps.options.github.token !== this.props.options.github.token
        ) {
            this.getCode();
        }
    }

    getCode = () => {
        const { page } = this.state;
        const { options, getCode } = this.props;
        const { token } = options.github;
        if (token) {
            getCode(token, page);
        }
    };

    renderAddNew = () => {
        const { addForm } = this.state;
        const { codes } = this.props;
        if (addForm && !codes.error && !codes.loading) {
            return <New />;
        }
    };

    renderContent = () => {
        const { options, codes } = this.props;
        const { token } = options.github;
        if (codes.loading) {
            return (
                <ShowBox>
                    <p>Loading...</p>
                </ShowBox>
            );
        }
        if (codes.error) {
            return (
                <ShowBox>
                    <p>Error: {codes.error}</p>
                </ShowBox>
            );
        }
        if (!codes.data || !codes.data.length) {
            return (
                <ShowBox>
                    <p>Nothing to show!</p>
                    {!token && (
                        <p>
                            <small>
                                Please, add a Github token from the Settings
                            </small>
                        </p>
                    )}
                </ShowBox>
            );
        }

        return (
            <ul>
                {codes.data.map(code => (
                    <Content key={code.id} data={code} />
                ))}
            </ul>
        );
    };

    renderPagination = () => {
        const { page } = this.state;
        const { codes } = this.props;
        if (!codes.loading && !codes.error && codes.data.length) {
            return (
                <div className="nav">
                    <ul>
                        {page !== 1 && (
                            <li
                                onClick={() =>
                                    page > 1 &&
                                    this.setState({ page: page - 1 })
                                }
                            >
                                <FiArrowLeftCircle />
                            </li>
                        )}
                        {codes.data.length === MAX_GIST && (
                            <li
                                onClick={() =>
                                    this.setState({ page: page + 1 })
                                }
                            >
                                <FiArrowRightCircle />
                            </li>
                        )}
                    </ul>
                </div>
            );
        }
    };

    render() {
        const { addForm } = this.state;
        const { options } = this.props;
        const { token } = options.github;
        return (
            <div className="code-area">
                <Head title="Code">
                    {token && (
                        <>
                            <li
                                onClick={() =>
                                    this.setState({ addForm: !addForm })
                                }
                                className="new"
                            >
                                {addForm ? <FiMinus /> : <FiPlus />}
                            </li>
                            <li
                                onClick={this.getCode.bind(this)}
                                className="refresh"
                            >
                                <FiRefreshCcw />
                            </li>
                        </>
                    )}
                </Head>
                {this.renderAddNew()}
                {this.renderContent()}
                {this.renderPagination()}
            </div>
        );
    }
}

export default connect(
    ({ options, codes }) => ({ options, codes }),
    { getCode }
)(Code);
