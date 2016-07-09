import { createStore, applyMiddleware, compose } from 'redux';
// Root Reducer
import rootReducer from './rootReducer';

// Middlewares
import enforceImmutableMiddleware from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

import DevTools from './devTools';

export default function configureStore(initialState) {
  const enhancer = compose(
      applyMiddleware(enforceImmutableMiddleware(), thunkMiddleware, loggerMiddleware),
      DevTools.instrument()
    );

  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextReducer = require('./rootReducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
