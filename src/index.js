import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import DevTools from './redux/devTools';

import App from './containers/App/App';

// Create store
import createStore from './redux/createStore';
const store = createStore();


ReactDOM.render(
  <Provider store={store}>
    <div style={{ height: '100%' }}>
      <App />
      {
        (__DEVELOPMENT__) ? <DevTools key="devtool" /> : null
      }
    </div>
  </Provider>,
  document.getElementById('app')
);
