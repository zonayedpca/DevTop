import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default ({ element }) => {
    return <Provider store={store}>{element}</Provider>;
};
