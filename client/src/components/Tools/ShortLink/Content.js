import React, { Component } from 'react';
import { Info } from '../../common';

const { ipcRenderer } = window.require('electron');

class Content extends Component {
  state = {
    info: false
  }

  handleInfoWindow = () => {
    this.setState({ info: true });
    setTimeout(() => {
      this.setState({ info: false });
    }, 2000)
  }

  handleCopyUrl = link => {
    ipcRenderer.send('code:copy', link);
    this.handleInfoWindow();
  }

  render() {
    const { info } = this.state;
    const { data } = this.props;
    return (
      <li className="card">
        <Info visible={info} text="Bitly Link Copied" />
        <div className="tools">
          <ul>
            <li onClick={this.handleCopyUrl.bind(this, data.link)}>Copy</li>
          </ul>
        </div>
        <span className="created-at">
          {new Date(String(data.created_at)).toDateString()}
        </span>
        <h4>{data.title ? data.title : data.long_url}</h4>
        <p>{ data.custom_bitlinks.length ? data.custom_bitlinks[0] : data.link }</p>
      </li>
    )
  }
}

export default Content;
