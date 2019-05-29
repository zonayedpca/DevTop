import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../../actions';

class New extends Component {
  state = {
    input: '',
    enabled: false
  }

  componentDidUpdate(prevProps, prevState) {
    const { input } = this.state;
    const { input: prevInput } = prevState;
    if(input !== prevInput) {
      if(input) {
        this.setState({ enabled: true });
      } else {
        this.setState({ enabled: false });
      }
    }
  }

  onSubmit = e => {
    const { input } = this.state;
    const { addTodo } = this.props;
    e.preventDefault();
    if(input) {
      const data = {
        id: Date.now(),
        text: input
      };
      addTodo(data);
      this.setState({ input: '' })
    }
  }

  render() {
    const { input, enabled } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="todo-new">
        <input value={input} onChange={(e) => this.setState({ input: e.target.value })} placeholder="I want to do..." />
        <button className={`${enabled ? 'enabled' : 'disabled'}`} type="submit">Add</button>
      </form>
    )
  }
}

export default connect(null, { addTodo })(New);
