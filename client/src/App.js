import { Provider as StoreProvider, useDispatch } from 'react-redux';
import { Router } from 'react-router';
import MainRouter from './routes/routes';
import { history, store } from './store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <Router history={history}>
        <MainRouter></MainRouter>
      </Router>
    </StoreProvider>
  );
};
export default App;
