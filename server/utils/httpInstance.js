const axios = require('axios');

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {
    api_key: `${process.env.TMDB_API}`,
    region: 'IN',
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(undefined, (error) => {
  if (axios.isCancel(error)) {
    console.log(`request cancelled`);
  }
  return Promise.reject(error.response?.data?.error);
});

module.exports = instance;
