import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiRefreshCcw, FiSettings, FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

import Content from './Content';
import { Head } from '../../common';

import { getCode } from '../../../actions';

import './code.css';

class Code extends Component {
  state = {
    page: 1
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
    console.log(token, page);
    getCode(token, page);
  }

  renderContent = () => {
    const { page } = this.state;
    const { codes } = this.props;
    if(codes.loading) {
      return (
        <div>
          <p>Loading</p>
        </div>
      )
    }
    if(codes.error) {
      return (
        <div>
          <p>Error: {codes.error}</p>
        </div>
      )
    }
    if(!codes.data || !codes.data.length) {
      return (
        <div>
          <p>Nothing to show!</p>
        </div>
      )
    }
    return (
      <React.Fragment>
        <ul>
          {codes.data.map(code => <Content key={code.id} data={code} />)}
        </ul>
        <div className="nav">
          <ul>
            <li onClick={() => page > 1 && this.setState({ page: page - 1 })}><FiArrowLeftCircle /></li>
            <li onClick={() => this.setState({ page: page + 1 })}><FiArrowRightCircle /></li>
          </ul>
        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="code-area">
        <Head title="Code">
          <li className="refresh"><FiRefreshCcw /></li>
          <li className="settings"><FiSettings /></li>
        </Head>
        {this.renderContent()}
      </div>
    )
  }
}

export default connect(({ options, codes }) => ({ options, codes }), { getCode })(Code);
