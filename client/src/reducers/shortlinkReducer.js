import {
  GET_LINK_LOADING,
  GET_LINK,
  GET_LINK_ERROR,
  CREATE_LINK_SUCCESS,
  SET_NEW_INPUT,
  CREATE_LINK_ERROR
} from '../actions/type';

const INITIAL_STATE = {
  input: {
    text: '',
    error: ''
  },
  data: [],
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LINK_LOADING:
      return { ...INITIAL_STATE, loading: true };
    case GET_LINK:
      return { ...state, data: action.payload, loading: false };
    case GET_LINK_ERROR:
      return { ...INITIAL_STATE, loading: false, error: action.payload  };
    case SET_NEW_INPUT:
      return { ...state, input: { text: action.payload } };
    case CREATE_LINK_SUCCESS:
      let newData = state.data;
      let newLinks = newData.links;
      newLinks = [action.payload, ...newLinks];
      newData.links = newLinks;
      return { ...state, input: { text: '', error: '' }, data: newData };
    case CREATE_LINK_ERROR:
      return { ...state, input: { text: state.input.text, error: action.payload } };
    default:
      return state;
  }
}
