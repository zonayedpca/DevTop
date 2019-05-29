import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

export default ({ todo: { id, text, done }, completedTodo, removeTodo }) => (
  <li className="card todo-content">
    <p className={`todo ${done ? 'completed': ''}`} onClick={() => completedTodo(id)}>{text}</p>
    <div className="tools">
      <ul>
        <li onClick={() => removeTodo(id)} className="remove"><FiTrash2 /></li>
      </ul>
    </div>
  </li>
)
