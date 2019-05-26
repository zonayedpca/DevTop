import React, { Component } from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { Head } from '../../common';

class Todo extends Component {
  renderContent = () => {
    return (
      <li>List</li>
    )
  }

  render() {
    return (
      <div className="todo-area">
        <Head title="Todo">
          <li className="remove"><FiTrash2 /></li>
        </Head>
        <ul>
          {this.renderContent()}
        </ul>
      </div>
    )
  }
}

export default Todo;
