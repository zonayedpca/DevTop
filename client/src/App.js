import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import './App.css';

import MenuTab from './components/MenuTab';

const store = createStore(reducers, applyMiddleware(reduxThunk))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MenuTab />
      </div>
    </Provider>
  );
}

export default App;
