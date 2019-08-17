import React, { Component } from 'react';
import { FiPlus, FiTrash } from 'react-icons/fi';
import { connect } from 'react-redux';

import { getLink, createNewLink } from '../../../actions';

class New extends Component {
  state = {
    input: ''
  }

  handleForm = (e) => {
    const { input } = this.state;
    const { options, getLink, createNewLink } = this.props;
    const { token } = options.bitly;
    e.preventDefault();
    createNewLink(input, getLink, token);
  }

  render() {
    const { input } = this.state;
    return (
      <form onSubmit={this.handleForm} className="shortlink-new">
        <input onChange={(e) => this.setState({ input: e.target.value })} value={input} placeholder="Your Link" />
        <button type="submit">Create</button>
      </form>
    )
  }
} 

export default connect(({ options }) => ({ options }), { getLink, createNewLink })(New);
