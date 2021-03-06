import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store';
import { checkAuth } from './store/ducks';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
