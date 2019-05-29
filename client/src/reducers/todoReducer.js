import {
  ADD_TODO,
  COMPLETED_TODO,
  REMOVE_TODO,
  REMOVE_ALL_TODO
} from '../actions/type';

export default(state = [{
  id: 12342443,
  text: 'Hello Something',
  done: false
}, {
  id: 38472438753,
  text: 'Something else than anything',
  done: false
}], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ id: action.payload.id, text: action.payload.text, done: false }, ...state];
    case COMPLETED_TODO:
      let newState = [...state];
      newState = newState.map(one => {
        if(one.id === action.payload) {
          one.done = !one.done;
        }
        return one;
      });
      return newState;
    case REMOVE_TODO:
      let newRemoveTodoState = [...state];
      newRemoveTodoState = newRemoveTodoState.filter(one => one.id !== action.payload);
      return newRemoveTodoState;
    case REMOVE_ALL_TODO:
      return [];
    default:
      return state;
  }
}
