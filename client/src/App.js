import { Provider as StoreProvider, useDispatch } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import MainRouter from './routes/routes';
import { history, store } from './store';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/globalStyles';

const App = () => {
  return (
    <StoreProvider store={store}>
      <ConnectedRouter history={history}>
        <GlobalStyles />
        <ToastContainer autoClose={2000} />
        <MainRouter />
      </ConnectedRouter>
    </StoreProvider>
  );
};
export default App;
