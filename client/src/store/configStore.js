import { applyMiddleware, compose, createStore } from 'redux';
import history from '../utils/history';
import thunkMiddleWare from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import ApiMiddleware from './middlewares/apiMiddleware';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

export { history };

const middlewares = [thunkMiddleWare, routerMiddleware(history), ApiMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const initialState = {};

// for using redux dev tools in chrome extension
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  rootReducer(history),
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

// store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
