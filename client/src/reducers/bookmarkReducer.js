import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  REMOVE_ALL_BOOKMARK
} from '../actions/type';

export default(state=[], action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return [ { id: action.payload.id, name: action.payload.name, link: action.payload.link }, ...state]
    case REMOVE_BOOKMARK:
      const stateAfterRemove = state.filter(one => one.id !== action.payload);
      return stateAfterRemove;
    case REMOVE_ALL_BOOKMARK:
      return [];
    default:
      return state;
  }
}
