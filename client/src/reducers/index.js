import { combineReducers } from 'redux';

import optionReducer from './optionReducer';
import clipboardReducer from './clipboardReducer';
import codeReducer from './codeReducer';
import shortlinkReducer from './shortlinkReducer';

export default combineReducers({
  options: optionReducer,
  clipboards: clipboardReducer,
  codes: codeReducer,
  shortlinks: shortlinkReducer
});
