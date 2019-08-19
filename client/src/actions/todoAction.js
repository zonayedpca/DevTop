import {
  ADD_TODO,
  COMPLETED_TODO,
  REMOVE_TODO,
  REMOVE_ALL_TODO
} from './type';
import { setLocalStorageData, unSetLocalStorageData } from '../utils';

export const addTodo = data => {
  return (dispatch, state) => {
    dispatch({
      type: ADD_TODO,
      payload: data
    });
    const { todos } = state();
    setLocalStorageData('todos', todos);
  }
}

export const completedTodo = id => {
  return (dispatch, state) => {
    dispatch({
      type: COMPLETED_TODO,
      payload: id
    })
    const { todos } = state();
    setLocalStorageData('todos', todos);
  }
}

export const removeTodo = id => {
  return (dispatch, state) => {
    dispatch({
      type: REMOVE_TODO,
      payload: id
    });
    const { todos } = state();
    setLocalStorageData('todos', todos);
  }
}

export const removeAllTodo = () => {
  return dispatch => {
    dispatch({
      type: REMOVE_ALL_TODO
    });
    unSetLocalStorageData(['todos']);
  }
}
