import { combineReducers } from 'redux';

import optionReducer from './optionReducer';
import clipboardReducer from './clipboardReducer';
import codeReducer from './codeReducer';
import shortlinkReducer from './shortlinkReducer';
// todo
// timer
import bookmarkReducer from './bookmarkReducer';

export default combineReducers({
  options: optionReducer,
  clipboards: clipboardReducer,
  codes: codeReducer,
  shortlinks: shortlinkReducer,
  bookmarks: bookmarkReducer
});
