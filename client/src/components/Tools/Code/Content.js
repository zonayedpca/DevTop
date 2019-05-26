import React, { Component } from 'react';
import { FiFileText, FiEye, FiEyeOff } from 'react-icons/fi';

import EmbeddedGist from './EmbeddedGist';

const { ipcRenderer } = window.require('electron');
// const ipcRenderer = electron.ipcRenderer;

class Content extends Component {
  state = {
    code: false
  }

  renderCode = file => {
    const { code } = this.state;
    const { data } = this.props;
    if(code) {
      return (
        <div>
          <EmbeddedGist gist={`${data.owner.login}/${data.id}`} file={file} />
        </div>
      )
    }
  }

  handleCodeView = () => {
    const { code } = this.state;
    this.setState({ code: !code });
  }

  handleCopyUrl = link => {
    ipcRenderer.send('code:copy', link);
  }

  render() {
    const { code } = this.state;
    const { data } = this.props;
    const files = Object.keys(data.files);
    return (
      <div className="single-code card" log={console.log(data)}>
        <div className="tools">
          <ul>
            <li onClick={this.handleCopyUrl.bind(this, data.html_url)}>Copy</li>
          </ul>
        </div>
        <div className="info">
          <div className="info-left">
            <div className="file-info">
              <p className="file-name">{files[0]}<span className="privacy">{data.public ? 'Public' : 'Secret'}</span></p>
              <p className="file-created">{data.created_at}</p>
              <p className="file-desc">{data.description ? data.description : 'No description Found!'}</p>
            </div>
          </div>
        </div>
        <div className="expand">
          <button onClick={this.handleCodeView.bind(this, files[0])} className="expand-btn">{code ? <span><FiEyeOff /> Hide</span> : <span><FiEye /> Show</span>}</button>
        </div>
        {this.renderCode()}
        <div className="code-other">
          <ul>
            {files.map(file => <li key={file}><FiFileText /> {file}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default Content;
