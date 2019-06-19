import {
  TOKEN_RIGHT,
  TOKEN_WRONG
} from './type';

import axios from 'axios';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

export const verifyGithubToken = token => {
  return async dispatch => {
    try {
      const { data } = await axios(`https://api.github.com/gists`, {
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
        ipcRenderer.send('option:githubTokenRight');
      }
    } catch (e) {
      dispatch({
        type: TOKEN_WRONG
      });
      ipcRenderer.send('option:githubTokenWrong');
    }
  }
}
