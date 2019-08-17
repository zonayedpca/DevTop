import axios from 'axios';

import {
  GET_LINK_LOADING,
  GET_LINK,
  GET_LINK_ERROR,
  CREATE_LINK_SUCCESS,
  CREATE_LINK_ERROR,
  CREATE_LINK_LOADING
} from './type';

const DEFAULT_GET_LINK = `https://api-ssl.bitly.com/v4/groups/Be3ae4aTy6h/bitlinks`;

export const getLink = (token, link=DEFAULT_GET_LINK) => {
  return async dispatch => {
    dispatch({
      type: GET_LINK_LOADING
    })
    try {
      const { data } = await axios(`${link}`, {
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

export const createNewLink = (link, cb, token) => {
  return async dispatch => {
    try {
      await axios.post(`https://api-ssl.bitly.com/v4/bitlinks`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        data: {
          long_url: link
        }
      });
      cb(token);
    } catch(err) {
      return dispatch({
        type: CREATE_LINK_ERROR
      })
    }
  }
}