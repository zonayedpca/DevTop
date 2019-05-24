import { combineReducers } from 'redux';

import optionReducer from './optionReducer';
import clipboardReducer from './clipboardReducer';
import codeReducer from './codeReducer';

export default combineReducers({
  options: optionReducer,
  clipboards: clipboardReducer,
  codes: codeReducer
});
