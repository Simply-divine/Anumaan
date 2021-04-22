import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as ducks from './ducks/index.defaults';

const rootReducer = (history) => {
  console.log('DUCKS', { ...ducks });
  return combineReducers({ router: connectRouter(history), ...ducks });
};

export default rootReducer;
