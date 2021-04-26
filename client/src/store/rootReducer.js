import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as ducks from './ducks/index.defaults';

const rootReducer = (history) => {
  return combineReducers({ router: connectRouter(history), ...ducks });
};

export default rootReducer;
