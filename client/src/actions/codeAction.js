import axios from 'axios';

import {
  GET_CODE_LOADING,
  GET_CODE,
  GET_CODE_ERROR
} from './type';

export const getCode = (token, page) => {
  return async dispatch => {
    dispatch({
      type: GET_CODE_LOADING
    });
    try {
      const { data } = await axios.get(`https://api.github.com/gists?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return dispatch({
        type: GET_CODE,
        payload: data
      })
    } catch(err) {
      return dispatch({
        type: GET_CODE_ERROR,
        payload: err.message
      });
    }
  }
}