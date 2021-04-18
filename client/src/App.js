import { Provider as StoreProvider, useDispatch } from 'react-redux';
import { Router } from 'react-router';
import { history, store } from './store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <Router history={history}></Router>
    </StoreProvider>
  );
};
export default App;
