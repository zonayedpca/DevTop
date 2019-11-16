import React, { Component } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { connect } from 'react-redux';

import { Head, ShowBox } from '../../common';
import New from './New';
import Content from './Content';

import {
    addTodo,
    completedTodo,
    removeTodo,
    removeAllTodo,
} from '../../../actions';

import './index.css';

class Todo extends Component {
    renderContent = () => {
        const { todos, completedTodo, removeTodo } = this.props;
        if (!todos.length) {
            return (
                <ShowBox>
                    <p>Nothing to show!</p>
                </ShowBox>
            );
        }
        return (
            <ul>
                {todos.map(todo => (
                    <Content
                        key={todo.id}
                        todo={todo}
                        completedTodo={completedTodo}
                        removeTodo={removeTodo}
                    />
                ))}
            </ul>
        );
    };

    render() {
        const { removeAllTodo } = this.props;
        return (
            <div className="todo-area">
                <Head title="Todo">
                    <li onClick={removeAllTodo} className="remove">
                        <FiTrash2 />
                    </li>
                </Head>
                <New />
                {this.renderContent()}
            </div>
        );
    }
}

export default connect(
    ({ todos }) => ({ todos }),
    { addTodo, completedTodo, removeTodo, removeAllTodo }
)(Todo);
