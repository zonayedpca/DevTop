import React, { Component } from 'react';
import { FiFileText } from 'react-icons/fi';

import EmbeddedGist from './EmbeddedGist';

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

  render() {
    const { data } = this.props;
    const files = Object.keys(data.files);
    return (
      <div className="single-code card" log={console.log(data)}>
        <div className="info">
          <div className="info-left">
            <div className="file-info">
              <p className="file-name" onClick={this.handleCodeView.bind(this, files[0])}>{files[0]}<span className="privacy">{data.public ? 'Public' : 'Secret'}</span></p>
              <p className="file-created">{data.created_at}</p>
              <p className="file-desc">{data.description ? data.description : 'No description Found!'}</p>
            </div>
          </div>
        </div>
        {this.renderCode()}
        <div className="code-other">
          <ul>
            {files.map(file => <li onClick={this.handleCodeView.bind(this)} key={file}><FiFileText /> {file}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default Content;
