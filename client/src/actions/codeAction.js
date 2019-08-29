import axios from 'axios';

import {
  GET_CODE_LOADING,
  GET_CODE,
  GET_CODE_ERROR,
  SET_NEW_CODE,
  CREATE_CODE_ERROR,
  CREATE_CODE_SUCCESS
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

export const handleNewInput = data => {
  return {
    type: SET_NEW_CODE,
    payload: data
  }
}

export const createNewCode = (object, token) => {
  return async dispatch => {
    try {
      const { data } = await axios.post(`https://api.github.com/gists`, null, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: object
      });
      return dispatch({
        type: CREATE_CODE_SUCCESS,
        payload: data
      })
    } catch(err) {
      return dispatch({
        type: CREATE_CODE_ERROR,
        payload: err ? (err.response ? err.response.data.message : err.message) : 'Something went wrong! Please, Try Again...'
      })
    }
  }
}
