import {
  GET_CODE_LOADING,
  GET_CODE,
  GET_CODE_ERROR
} from '../actions/type';

const INITIAL_STATE = {
  data: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CODE_LOADING:
      return { ...INITIAL_STATE, loading: true }
    case GET_CODE:
      return { ...state, data: action.payload, loading: false };
    case GET_CODE_ERROR:
      return { ...INITIAL_STATE, loading: false, error: action.payload  }
    default:
      return state;
  }
}
