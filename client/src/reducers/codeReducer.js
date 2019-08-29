import {
  GET_CODE_LOADING,
  GET_CODE,
  SET_NEW_CODE,
  GET_CODE_ERROR,
  CREATE_CODE_ERROR,
  CREATE_CODE_SUCCESS
} from '../actions/type';

const INITIAL_INPUT = {
  desc: '',
  file: [Date.now()],
  data: {[Date.now()]: { name: '', code: '' }},
  error: ''
};

const INITIAL_STATE = {
  input: INITIAL_INPUT,
  data: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CODE_LOADING:
      return { ...INITIAL_STATE, loading: true };
    case GET_CODE:
      return { ...state, data: action.payload, loading: false };
    case SET_NEW_CODE:
      let newInputs = state.input;
      newInputs = { ...newInputs, ...action.payload };
      return { ...state, input: newInputs }
    case GET_CODE_ERROR:
      return { ...INITIAL_STATE, loading: false, error: action.payload  };
    case CREATE_CODE_SUCCESS:
      let newData = state.data;
      newData = [action.payload, ...newData];
      return { ...state, data: newData, input: INITIAL_INPUT };
    case CREATE_CODE_ERROR:
      return { ...state, input: { ...state.input, error: action.payload } };
    default:
      return state;
  }
}
