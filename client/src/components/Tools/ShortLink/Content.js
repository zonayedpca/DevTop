import React, { Component } from 'react';

class Content extends Component {
  render() {
    const { data } = this.props;
    return (
      <li className="card">
        <span className="created-at">
          {data.created_at}
        </span>
        <h4>{data.title ? data.title : data.long_url}</h4>
        <p>{ data.custom_bitlinks.length ? data.custom_bitlinks[0] : data.link }</p>
      </li>
    )
  }
}

export default Content;
