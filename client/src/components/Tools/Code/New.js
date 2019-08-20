import React, { Component } from 'react';
import { FiPlus, FiTrash } from 'react-icons/fi';
import { connect } from 'react-redux';

import { getCode, createNewCode } from '../../../actions';

class New extends Component {
  constructor(props) {
    super(props);
    const id = Date.now();
    this.state = {
      desc: '',
      file: [id],
      data: {[id]: { name: '', code: '' }},
      enabled: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateStatus();
  }

  updateStatus = () => {
    const enabled = Object.keys(this.state.data).every(oneData => this.state.data[oneData].code);
    if(this.state.enabled !== enabled) {
      this.setState({ enabled });
    }
  }

  handleSubmit = type => {
    const { desc, data, enabled } = this.state;
    const { options, getCode, createNewCode } = this.props;
    const { token } = options.github;
    const objectToSend = {
      description: desc,
      public: type === 'public',
      files: {}
    };
    Object.keys(data).forEach((one, index) => {
      objectToSend.files[data[one].name || `gistfile${index + 1}.txt`] = {
        content: data[one].code
      }
    });
    if(enabled) {
      createNewCode(objectToSend, token, getCode);
      this.setState({ desc: '', file: [Date.now()], data: {}, enabled: false });
    }
  }

  handleNewFile = () => {
    const { file, data } = this.state;
    const id = Date.now();
    this.setState({ file: [...file, id], data: { ...data, [id]: { name: '', code: '' } } })
  }

  handleInput = (e, file, type) => {
    const { data } = this.state;
    let prevData = data[file];
    prevData = { ...data[file], [type]: e.target.value }
    this.setState({ data: { ...data, [file]: prevData } });
  }

  handleRemoveFile = fileno => {
    const { file, data } = this.state;
    const newFile = file.filter(one => one !== fileno);
    let newData = data;
    if(data[fileno]) {
      let fileData = Object.keys(data);
      fileData = fileData.filter(one => one !== String(fileno));
      let newObject = {};
      fileData.forEach(one => {
        newObject[one] = data[one];
      });
      newData = newObject;
    }
    this.setState({ file: newFile, data: newData });
  }

  renderForm = () => {
    const { desc, file, data, enabled } = this.state;
    return (
      <React.Fragment>
        <div className="code-new-desc">
          <input value={desc} onChange={(e) => this.setState({ desc: e.target.value })} name="desc" placeholder="Gist Description" />
        </div>
        <div className="code-new-files">
          {file.map(every => (
            <div key={every} className="code-new-file">
              <div className="code-new-file-name">
                <input className="new-file" type="text" value={data[every] ? data[every].name : ''} onChange={(e) => this.handleInput(e, every, 'name')} name={`file[${every}]`} placeholder="Filename including extension..." />
                {file.length >1 && <p className="code-file-remove" onClick={this.handleRemoveFile.bind(this, every)}><FiTrash /></p>}
              </div>
              <div className="code-new-code-area">
                <textarea className="new-code" value={data[every] ? data[every].code : ''} onChange={(e) => this.handleInput(e, every, 'code')} name={`code[${every}]`}></textarea>
              </div>
            </div>
          ))}
        </div>
        <div className="code-new-action">
          <button onClick={this.handleNewFile.bind(this)}><FiPlus /></button>
          <div>
            <button className={`code-btn-secret ${!enabled && `btn-disabled`}`} onClick={this.handleSubmit.bind(this, 'secret')}>Secret</button>
            <button className={`code-btn-public ${!enabled && `btn-disabled`}`} onClick={this.handleSubmit.bind(this, 'public')}>Public</button>
          </div>
        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="code-new">
        {this.renderForm()}
      </div>
    )
  }
}

export default connect(({ options }) => ({ options }), { getCode, createNewCode })(New);
