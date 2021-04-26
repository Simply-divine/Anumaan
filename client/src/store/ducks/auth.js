// ? idea: https://github.com/erikras/ducks-modular-redux
import { API, ApiActionCreator } from '../helpers';
import { CLEAR_ALL_ERRORS } from './errors';

export const CHECK_AUTH = ApiActionCreator('auth/CHECK_AUTH');
export const SIGNUP = ApiActionCreator('auth/SIGNUP');
export const LOGIN = ApiActionCreator('auth/LOGIN');
export const SET_MAX_SCORE = ApiActionCreator('users/SET_MAX_SCORE');
// Actions
const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {},
};

// Reducer - default export
const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CHECK_AUTH.SUCCESS:
      return { ...state, user: action.payload, isAuthenticated: true };
    case SIGNUP.SUCCESS:
      return { ...state, user: action.payload, isAuthenticated: true };
    case LOGIN.SUCCESS:
      return { ...state, user: action.payload, isAuthenticated: true };
    case SET_MAX_SCORE.SUCCESS:
      return { ...state, user: { ...state.user, max_score: action.payload } };
    default:
      return state;
  }
};
export default reducer;
// Action Creators - export

// Side-effects - exportimport { } from '../helpers'
export const signupUser = (formData) => ({
  type: API,
  payload: {
    method: 'POST',
    url: '/users/auth/signup',
    formData,
  },
  onRequest: SIGNUP.REQUEST,
  onSuccess: (dispatch, data) => {
    dispatch({ type: CLEAR_ALL_ERRORS });
    dispatch({ type: SIGNUP.SUCCESS, payload: data });
  },
  onFailure: (dispatch, err) => {
    dispatch({ type: SIGNUP.FAILURE, payload: err });
    dispatch({ type: CLEAR_ALL_ERRORS });
  },
});

export const loginUser = (formData) => ({
  type: API,
  payload: {
    method: 'POST',
    url: '/users/auth/login',
    formData,
  },
  onRequest: LOGIN.REQUEST,
  onSuccess: (dispatch, data) => {
    dispatch({ type: LOGIN.SUCCESS, payload: data });
    dispatch({ type: CLEAR_ALL_ERRORS });
  },
  onFailure: (dispatch, err) => {
    dispatch({ type: LOGIN.FAILURE, payload: err });
    dispatch({ type: CLEAR_ALL_ERRORS });
  },
});

export const checkAuth = () => ({
  type: API,
  payload: {
    method: 'GET',
    url: '/users/auth/check-auth',
  },
  onRequest: CHECK_AUTH.REQUEST,
  onSuccess: CHECK_AUTH.SUCCESS,
  onFailure: CHECK_AUTH.FAILURE,
});

export const setMaxScore = (score) => ({
  type: API,
  payload: {
    method: 'POST',
    url: '/users/score',
    formData: { data: score },
  },
  onRequest: SET_MAX_SCORE.REQUEST,
  onSuccess: (dispatch, data) => {
    dispatch({ type: SET_MAX_SCORE.SUCCESS, payload: data });
    dispatch({ type: CLEAR_ALL_ERRORS });
  },
  onFailure: (dispatch, err) => {
    dispatch({ type: SET_MAX_SCORE.FAILURE, payload: err });
    dispatch({ type: CLEAR_ALL_ERRORS });
  },
});
