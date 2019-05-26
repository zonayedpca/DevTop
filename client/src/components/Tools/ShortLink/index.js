import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiRefreshCcw, FiSettings } from 'react-icons/fi';

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
          {shortlinks.data.links.map(link => <li>{link.title}</li>)}
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
          <li className="refresh"><FiRefreshCcw /></li>
          <li className="settings"><FiSettings /></li>
        </Head>
        {this.renderContent()}
      </div>
    )
  }
}

export default connect(({ options, shortlinks }) => ({ options, shortlinks }), { getLink })(ShortLink);
