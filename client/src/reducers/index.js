import { combineReducers } from 'redux';

import optionReducer from './optionReducer';
import clipboardReducer from './clipboardReducer';

export default combineReducers({
  options: optionReducer,
  clipboards: clipboardReducer
})
