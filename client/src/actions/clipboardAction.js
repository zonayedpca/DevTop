import {
  CLIPBOARD_SEND,
  CLIPBOARD_REMOVE,
  CLIPBOARD_REMOVE_ALL
} from './type';

export const clipboardSend = data => {
  return {
    type: CLIPBOARD_SEND,
    payload: data
  }
}

export const clipboardRemove = data => {
  return {
    type: CLIPBOARD_REMOVE,
    payload: data
  }
}

export const clipboardRemoveAll = () => {
  return {
    type: CLIPBOARD_REMOVE_ALL
  }
}
