import {
  TOKEN_RIGHT,
  TOKEN_WRONG,
  TOKEN_RESET
} from '../actions/type';

const INITIAL_STATE = {
  github: {
    token: null,
    error: false
  },
  bitly: {
    token: null,
    error: false
  }
}

export default(state=INITIAL_STATE, action) => {
  let provider;
  switch (action.type) {
    case TOKEN_RIGHT:
      provider = state[action.payload.name];
      return { ...state, [action.payload.name]: { ...provider, error: false, token: action.payload.token } }
    case TOKEN_WRONG:
      provider = state[action.payload.name];
      return { ...state, [action.payload.name]: { ...provider, error: true } }
    case TOKEN_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}
