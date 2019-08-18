import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import MenuTab from './components/MenuTab';
import Settings from './components/Settings';

import { getLocalAuth } from './actions';

function App({ getLocalAuth }) {
  useEffect(() => {
    getLocalAuth();
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

export default connect(null, { getLocalAuth })(App);
