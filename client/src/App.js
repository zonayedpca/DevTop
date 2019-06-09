import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';

import MenuTab from './components/MenuTab';

import { verifyGithubToken } from './actions';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

function App({ verifyGithubToken }) {
  useEffect(() => {
    ipcRenderer.on('option:githubToken', (event, token) => {
      verifyGithubToken(token)
    });
  })

  return (
    <div className="App">
      <MenuTab />
    </div>
  );
}

export default connect(null, { verifyGithubToken })(App);
