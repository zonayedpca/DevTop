import {
  CLIPBOARD_SEND,
  CLIPBOARD_REMOVE,
  CLIPBOARD_REMOVE_ALL
} from '../actions/type';

export default (state = {}, action) => {
  switch (action.type) {
    case CLIPBOARD_SEND:
      return { ...state, [action.payload.id]: { data: action.payload.data} };
    case CLIPBOARD_REMOVE:
      const newState = {};
      Object.keys(state).forEach(one => {
        if(one !== action.payload) {
          newState[one] = state[one]
        }
      });
      return newState;
    case CLIPBOARD_REMOVE_ALL:
      return {};
    default:
      return state;
  }
}
