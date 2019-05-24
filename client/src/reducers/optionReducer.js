const INITIAL_STATE = {
  github: {
    token: null
  }
}

export default(state=INITIAL_STATE, action) => {
  console.log(action);
  return state;
}
