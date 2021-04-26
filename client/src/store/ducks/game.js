// ? idea: https://github.com/erikras/ducks-modular-redux

import { API, ApiActionCreator } from '../helpers';
import { CLEAR_ALL_ERRORS } from './errors';

export const INCREMENT_SCORE = 'INCREMENT_SCORE';
export const DECREMENT_HEALTH = 'DECREMENT_HEALTH';
export const SET_IMAGE = 'SET_IMAGE';
export const UPDATE_TIME = 'UPDATE_TIME';
export const CHANGE_MOVIE = ApiActionCreator('game/CHANGE_MOVIE');
export const SET_SCORE = 'SET_SCORE';
export const SET_HEALTH = 'SET_HEALTH';
// Actions
const DEFAULT_STATE = {
  score: 0,
  movie: {},
  health: 10,
};

// Reducer - default export
const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case INCREMENT_SCORE:
      return { ...state, score: state.score + 1 };
    case DECREMENT_HEALTH:
      return { ...state, health: state.health - 1 };
    case SET_SCORE:
      return { ...state, score: action.payload };
    case SET_HEALTH:
      return { ...state, health: action.payload };
    case SET_IMAGE:
      return { ...state, movie: action.payload };
    case CHANGE_MOVIE.SUCCESS:
      return {
        ...state,
        movie: { ...action.payload, timer: 0 },
      };
    case UPDATE_TIME:
      const time = state.movie.timer + action.payload;
      return {
        ...state,
        movie: { ...state.movie, timer: time },
      };
    default:
      return state;
  }
};
export default reducer;
// Action Creators - export
export const changePlay = () => ({
  type: API,
  payload: {
    method: 'GET',
    url: '/movies/change',
  },
  onRequest: CHANGE_MOVIE.REQUEST,
  onSuccess: (dispatch, data) => {
    dispatch({ type: CHANGE_MOVIE.SUCCESS, payload: data });
    dispatch({ type: CLEAR_ALL_ERRORS });
  },
  onFailure: (dispatch, err) => {
    dispatch({ type: CHANGE_MOVIE.FAILURE, payload: err });
    dispatch({ type: CLEAR_ALL_ERRORS });
  },
});
