import {
  ADD_TODO,
  COMPLETED_TODO,
  REMOVE_TODO,
  REMOVE_ALL_TODO
} from './type';

export const addTodo = data => {
  return {
    type: ADD_TODO,
    payload: data
  }
}

export const completedTodo = id => {
  return {
    type: COMPLETED_TODO,
    payload: id
  }
}

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: id
  }
}

export const removeAllTodo = () => {
  return {
    type: REMOVE_ALL_TODO
  }
}
