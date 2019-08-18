import axios from 'axios';

import {
  GET_LINK_LOADING,
  GET_LINK,
  GET_LINK_ERROR,
  CREATE_LINK_ERROR
} from './type';

const API_LINK = `https://api-ssl.bitly.com/v4`;

export const getLink = (token, id, page) => {
  return async dispatch => {
    dispatch({
      type: GET_LINK_LOADING
    })
    try {
      const { data } = await axios(`${API_LINK}/groups/${id}/bitlinks?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return dispatch({
        type: GET_LINK,
        payload: data
      })
    } catch(err) {
      return dispatch({
        type: GET_LINK_ERROR,
        payload: err.message
      })
    }
  }
}

export const createNewLink = (link, cb, { token, id }) => {
  return async dispatch => {
    try {
      await axios.post(`${API_LINK}/bitlinks`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        data: {
          long_url: link
        }
      });
      cb(token, id, 1);
    } catch(err) {
      return dispatch({
        type: CREATE_LINK_ERROR
      })
    }
  }
}