import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiRefreshCcw, FiSettings, FiPlus } from 'react-icons/fi';

import Content from './Content';
import { Head, ShowBox } from '../../common';

import { getLink } from '../../../actions';

class ShortLink extends Component {
  componentDidMount() {
    this.getLink();
  }

  getLink = link => {
    const { options, getLink } = this.props;
    const { token } = options.bitly;
    getLink(token, link);
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
      <React.Fragment>
        <ul log={console.log(shortlinks)}>
          {shortlinks.data.links.map(link => <Content key={link.created_at} data={link} />)}
        </ul>
        <div className="nav">
          <ul>
            <li>Prev</li>
            <li>Next</li>
          </ul>
        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="shortlink-area">
        <Head title="ShortLink">
          <li className="new"><FiPlus /></li>
          <li className="refresh"><FiRefreshCcw /></li>
        </Head>
        {this.renderContent()}
      </div>
    )
  }
}

export default connect(({ options, shortlinks }) => ({ options, shortlinks }), { getLink })(ShortLink);
