import http from '../../utils/httpInstance';
import { API } from '../helpers';

export const ApiMiddleware = ({ getState, dispatch }) => (next) => async (
  action
) => {
  const noop = () => {};
  if (action.type !== API) return next(action);
  const {
    payload: { method, url, formData },
    onRequest = noop,
    onSuccess = noop,
    onFailure = noop,
  } = action;
  if (typeof onRequest === 'function') {
    onRequest(dispatch);
  } else {
    dispatch({ type: onRequest });
  }

  try {
    console.log('URL', url);
    let { data } = await http({
      method,
      url,
      data: formData,
    });

    data = data.data;
    if (typeof onSuccess === 'function') {
      onSuccess(dispatch, data);
    } else {
      dispatch({ type: onSuccess, payload: data });
    }
    return Promise.resolve(data);
  } catch (err) {
    if (typeof onFailure === 'function') {
      onFailure(dispatch, err);
    } else {
      dispatch({ type: onFailure, payload: err || 'Something went wrong' });
    }
    return Promise.reject(err || 'Something went wrong');
  }
};

export default ApiMiddleware;
