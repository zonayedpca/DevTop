import {
  TOKEN_RIGHT,
  TOKEN_WRONG
} from '../actions/type';

const INITIAL_STATE = {
  github: {
    token: null
  },
  bitly: {
    token: null
  }
}

export default(state=INITIAL_STATE, action) => {
  switch (action.type) {
    case TOKEN_RIGHT:
      return { ...state, [action.payload.name] : action.payload.token }
    default:
      return state;
  }
}
