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
          type: 'GITHUB_TOKEN_RIGHT',
          payload: token
        });
        console.log('Token is right');
        ipcRenderer.send('option:githubTokenRight');
      }
    } catch (e) {
      dispatch({
        type: 'GITHUB_TOKEN_WRONG'
      })
      console.log('Token is wrong');
      ipcRenderer.send('option:githubTokenWrong');
    }
  }
}
