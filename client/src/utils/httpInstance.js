import axios from 'axios';
import { SERVER_URL } from '../config';

const instance = axios.create({
  baseURL: SERVER_URL + '/api',
  withCredentials: true,
  timeout: 30000,
});

instance.interceptors.response.use(undefined, (error) => {
  if (axios.isCancel(error)) {
    console.log(`request cancelled`);
  }
  return Promise.reject(error.response?.data?.error);
});

export default instance;
