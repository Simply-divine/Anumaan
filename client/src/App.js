import { Provider as StoreProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import MainRouter from './routes/routes';
import { history, store } from './store';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const App = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <GlobalStyles />
          <ToastContainer autoClose={2000} />
          <MainRouter />
        </ConnectedRouter>
      </ThemeProvider>
    </StoreProvider>
  );
};
export default App;
