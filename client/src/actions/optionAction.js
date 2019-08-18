import {
  TOKEN_RIGHT,
  TOKEN_WRONG
} from './type';

import axios from 'axios';

const GITHUB_LINK = `https://api.github.com`;
const BITLY_LINK = `https://api-ssl.bitly.com/v4`;

const setLocalStorageData = (provider, data) => {
  localStorage.setItem(`${provider}`, JSON.stringify(data));
}

export const getLocalAuth = () => {
  const github_token = JSON.parse(localStorage.getItem('github'));
  const bitly_token = JSON.parse(localStorage.getItem('bitly'));
  return dispatch => {
    if(github_token) {
      dispatch({
        type: TOKEN_RIGHT,
        payload: {
          name: 'github',
          token: github_token.token
        }
      });
    }
    if(bitly_token) {
      dispatch({
        type: TOKEN_RIGHT,
        payload: {
          name: 'bitly',
          token: {
            token: bitly_token.token.token,
            id: bitly_token.token.id
          }
        }
      });
    }
  }
}

export const verifyGithubToken = token => {
  return async dispatch => {
    try {
      const { data } = await axios(`${GITHUB_LINK}/gists`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if(data.length) {
        dispatch({
          type: TOKEN_RIGHT,
          payload: {
            name: 'github',
            token
          }
        });
        setLocalStorageData('github', { token });
      }
    } catch (e) {
      dispatch({
        type: TOKEN_WRONG,
        payload: {
          name: 'github',
          error: true
        }
      });
    }
  }
}

export const verifyBitlyToken = token => {
  return async dispatch => {
    try {
      const { data } = await axios(`${BITLY_LINK}/user`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if(data.login) {
        dispatch({
          type: TOKEN_RIGHT,
          payload: {
            name: 'bitly',
            token: {
              token,
              id: data.default_group_guid
            }
          }
        });
        setLocalStorageData('bitly', { token: { token, id: data.default_group_guid } });
      }
    } catch (e) {
      dispatch({
        type: TOKEN_WRONG,
        payload: {
          name: 'bitly',
          error: true
        }
      });
    }
  }
}