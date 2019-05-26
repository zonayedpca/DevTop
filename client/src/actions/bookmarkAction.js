import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  REMOVE_ALL_BOOKMARK
} from './type';

export const addBookmark = data => {
  return {
    type: ADD_BOOKMARK,
    payload: data
  }
}

export const removeBookmark = id => {
  return {
    type: REMOVE_BOOKMARK,
    payload: id
  }
}

export const removeAllBookmark = () => {
  return {
    type: REMOVE_ALL_BOOKMARK
  }
}
