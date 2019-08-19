import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  REMOVE_ALL_BOOKMARK
} from './type';
import { setLocalStorageData, unSetLocalStorageData } from '../utils';

export const addBookmark = data => {
  return (dispatch, state) => {
    dispatch({
      type: ADD_BOOKMARK,
      payload: data
    });
    const { bookmarks } = state();
    setLocalStorageData('bookmarks', bookmarks);
  }
}

export const removeBookmark = id => {
  return (dispatch, state) => {
    dispatch({
      type: REMOVE_BOOKMARK,
      payload: id
    });
    const { bookmarks } = state();
    setLocalStorageData('bookmarks', bookmarks);
  }
}

export const removeAllBookmark = () => {
  return dispatch => {
    dispatch({
      type: REMOVE_ALL_BOOKMARK
    });
    unSetLocalStorageData(['bookmarks']);
  }
}
