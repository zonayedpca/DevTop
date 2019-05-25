import {
  GET_LINK_LOADING,
  GET_LINK,
  GET_LINK_ERROR
} from '../actions/type';

const INITIAL_STATE = {
  data: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LINK_LOADING:
      return { ...INITIAL_STATE, loading: true }
    case GET_LINK:
      return { ...state, data: action.payload, loading: false };
    case GET_LINK_ERROR:
      return { ...INITIAL_STATE, loading: false, error: action.payload  }
    default:
      return state;
  }
}
