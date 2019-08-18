import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiRefreshCcw, FiPlus, FiArrowRightCircle, FiArrowLeftCircle } from 'react-icons/fi';

import Content from './Content';
import { Head, ShowBox } from '../../common';

import { getLink } from '../../../actions';

import './index.css';
import New from './New';

class ShortLink extends Component {
  state = {
    page: 1,
    show: false
  }

  componentDidMount() {
    this.getLink();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page || prevProps.options.bitly.token !== this.props.options.bitly.token) {
      this.getLink();
    }
  }

  getLink = () => {
    const { page } = this.state;
    const { options, getLink } = this.props;
    if(options.bitly.token) {
      const { token, id } = options.bitly.token;
      getLink(token, id, page);
    }
  }

  renderContent = () => {
    const { shortlinks } = this.props;
    if(shortlinks.loading) {
      return (
        <ShowBox>
          <p>Loading...</p>
        </ShowBox>
      )
    }
    if(shortlinks.error) {
      return (
        <ShowBox>
          <p>Error: {shortlinks.error}</p>
        </ShowBox>
      )
    }
    if(!shortlinks.data || !shortlinks.data.links) {
      return (
        <ShowBox>
          <p>Nothing to show!</p>
        </ShowBox>
      )
    }
    return (
      <ul>
        {shortlinks.data.links.map(link => <Content key={link.created_at} data={link} />)}
      </ul>
    )
  }

  renderPagination = () => {
    const { page } = this.state;
    const { shortlinks } = this.props;
    console.log(shortlinks);
    if(shortlinks.data.links && shortlinks.data.links.length && !shortlinks.loading && !shortlinks.error) {
      return (
        <div className="nav">
          <ul>
            { page !== 1 && <li onClick={() => page > 1 && this.setState({ page: page - 1 })}><FiArrowLeftCircle /></li>}
            { shortlinks.data.pagination.next && <li onClick={() => this.setState({ page: page + 1 })}><FiArrowRightCircle /></li>}
          </ul>
        </div>
      )
    }
  }

  render() {
    const { show } = this.state;
    const { options } = this.props;
    const { token } = options.bitly;

    return (
      <div className="shortlink-area">
        <Head title="ShortLink">
          { token && <>
            <li onClick={() => this.setState({ show: !show })} className="new"><FiPlus /></li>
            <li className="refresh"><FiRefreshCcw /></li>
          </> }
        </Head>
        {show && <New />}
        {this.renderContent()}
        {this.renderPagination()}
      </div>
    )
  }
}

export default connect(({ options, shortlinks }) => ({ options, shortlinks }), { getLink })(ShortLink);
