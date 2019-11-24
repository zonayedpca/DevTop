import React from 'react';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(reduxThunk));

export default ({ element }) => {
    <Provider log={console.log('I am Mr. Provider works here!')} store={store}>
        {element}
    </Provider>;
};
