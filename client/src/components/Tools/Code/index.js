import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiRefreshCcw, FiPlus, FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

import New from './New';
import Content from './Content';
import { Head, ShowBox } from '../../common';

import { getCode } from '../../../actions';

import './index.css';

class Code extends Component {
  state = {
    page: 1,
    addForm: false
  }

  componentDidMount() {
    this.getCode();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page) {
      this.getCode();
    }
  }

  getCode = () => {
    const { page } = this.state;
    const { options, getCode } = this.props;
    const { token } = options.github;
    getCode(token, page);
  }

  rednerAddNew = () => {
    const { addForm } = this.state;
    const { codes } = this.props;
    if(addForm && !codes.error && !codes.loading) {
      return <New />
    }
  }

  renderContent = () => {
    const { codes } = this.props;
    if(codes.loading) {
      return (
        <ShowBox>
          <p>Loading...</p>
        </ShowBox>
      )
    }
    if(codes.error) {
      return (
        <ShowBox>
          <p>Error: {codes.error}</p>
        </ShowBox>
      )
    }
    if(!codes.data || !codes.data.length) {
      return (
        <ShowBox>
          <p>Nothing to show!</p>
        </ShowBox>
      )
    }
    return (
      <ul>
        {codes.data.map(code => <Content key={code.id} data={code} />)}
      </ul>
    )
  }

  renderPagination = () => {
    const { page } = this.state;
    const { codes } = this.props;
    if(!codes.loading) {
      return (
        <div className="nav">
          <ul>
            { page !== 1 && <li onClick={() => page > 1 && this.setState({ page: page - 1 })}><FiArrowLeftCircle /></li>}
            <li onClick={() => this.setState({ page: page + 1 })}><FiArrowRightCircle /></li>
          </ul>
        </div>
      )
    }
  }

  render() {
    const { addForm } = this.state;

    return (
      <div className="code-area">
        <Head title="Code">
          <li onClick={() => this.setState({ addForm: !addForm })} className="new"><FiPlus /></li>
          <li className="refresh"><FiRefreshCcw /></li>
        </Head>
        {this.rednerAddNew()}
        {this.renderContent()}
        {this.renderPagination()}
      </div>
    )
  }
}

export default connect(({ options, codes }) => ({ options, codes }), { getCode })(Code);
