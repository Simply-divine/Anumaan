// ? idea: https://github.com/erikras/ducks-modular-redux
import { API, ApiActionCreator } from '../helpers';
import { CLEAR_ALL_ERRORS } from './errors';

export const CHECK_AUTH = ApiActionCreator('auth/CHECK_AUTH');
export const SIGNUP = ApiActionCreator('auth/SIGNUP');
export const LOGIN = ApiActionCreator('auth/LOGIN');

// Actions
const DEFAULT_STATE = {
  isAuthenticated: false,
  user: {},
};

// Reducer - default export
export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    // case CHECK_AUTH.SUCCESS:
    case SIGNUP.SUCCESS:
    case LOGIN.SUCCESS:
      return { ...state, user: action.payload, isAuthenticated: true };
    default:
      return state;
  }
}

// Action Creators - export

// Side-effects - exportimport { } from '../helpers'
export const signupUser = (formData) => ({
  type: API,
  payload: {
    method: 'POST',
    url: '/signup',
    formData,
  },
  onRequest: SIGNUP.REQUEST,
  onSuccess: (dispatch, data) => {
    dispatch({ type: CLEAR_ALL_ERRORS });
    dispatch({ type: SIGNUP.SUCCESS, payload: data });
  },
  onFailure: (dispatch, err) => {
    dispatch({ type: SIGNUP.FAILURE, payload: err });
    dispatch({ type: SIGNUP.FAILURE, payload: err });
    dispatch({ type: CLEAR_ALL_ERRORS });
  },
});

export const loginUser = (formData) => ({
  type: API,
  payload: {
    method: 'POST',
    url: '/login',
    formData,
  },
  onRequest: LOGIN.REQUEST,
  onSuccess: (dispatch, data) => {
    dispatch({ type: CLEAR_ALL_ERRORS });
    dispatch({ type: LOGIN.SUCCESS, payload: data });
  },
  onFailure: (dispatch, err) => {
    dispatch({ type: LOGIN.FAILURE, payload: err });
    dispatch({ type: LOGIN.FAILURE, payload: err });
    dispatch({ type: CLEAR_ALL_ERRORS });
  },
});

export const checkAuth = () => ({
  type: API,
  payload: {
    method: 'GET',
    url: '/auth/check-auth',
  },
  onRequest: CHECK_AUTH.REQUEST,
  onSuccess: CHECK_AUTH.SUCCESS,
  onFailure: CHECK_AUTH.FAILURE,
});
