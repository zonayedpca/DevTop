import React, { Component } from 'react';
import { FiPlus, FiTrash } from 'react-icons/fi';
import { connect } from 'react-redux';

import { createNewCode } from '../../../actions';

class New extends Component {
  state = {
    desc: '',
    file: [Date.now()],
    data: {}
  }

  handleSubmit = type => {
    const { desc, data } = this.state;
    const { options, createNewCode } = this.props;
    const { token } = options.github;
    const objectToSend = {
      description: desc,
      public: type === 'public',
      files: {}
    };
    Object.keys(data).forEach(one => {
      objectToSend.files[data[one].name] = {
        content: data[one].code
      }
    });
    createNewCode(objectToSend, token);
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
    const { desc, file, data } = this.state;
    return (
      <React.Fragment>
        <div className="code-new-desc">
          <input value={desc} onChange={(e) => this.setState({ desc: e.target.value })} name="desc" placeholder="Gist Description" />
        </div>
        <div className="code-new-files">
          {file.map(every => (
            <div className="code-new-file">
              <div className="code-new-file-name">
                <input value={data[every] ? data[every].name : ''} onChange={(e) => this.handleInput(e, every, 'name')} name={`new-file file[${every}]`} placeholder="Filename including extension..." />
                {file.length >1 && <p className="code-file-remove" onClick={this.handleRemoveFile.bind(this, every)}><FiTrash /></p>}
              </div>
              <div className="code-new-code-area">
                <textarea value={data[every] ? data[every].code : ''} onChange={(e) => this.handleInput(e, every, 'code')} name={`new-code code[${every}]`}></textarea>
              </div>
            </div>
          ))}
        </div>
        <div className="code-new-action">
          <button onClick={() => this.setState({ file: [...file, Date.now()] })}><FiPlus /></button>
          <div>
            <button onClick={this.handleSubmit.bind(this, 'secret')}>Secret</button>
            <button onClick={this.handleSubmit.bind(this, 'public')}>Public</button>
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

export default connect(({ options }) => ({ options }), { createNewCode })(New);
