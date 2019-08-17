import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import MenuTab from './components/MenuTab';
import Settings from './components/Settings';

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
    <Router>
      <div className="App">
        <Route exact path="/" component={MenuTab} />
        <Route exact path="/settings" component={Settings} />
      </div>
    </Router>
  );
}

export default connect(null, { verifyGithubToken })(App);
