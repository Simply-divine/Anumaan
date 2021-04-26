import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import GameOver from '../Components/GameOver';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import RestrictedRoute from './RestrictedRoute';

const MainRouter = () => (
  <BrowserRouter>
    <Switch>
      {/* Restricted Routes */}
      <RestrictedRoute path='/' exact component={Login} />
      <RestrictedRoute path='/signup' component={Signup} />

      {/* Private Routes */}
      <PrivateRoute path='/dashboard' exact component={Dashboard} />
      <PrivateRoute path='/gameover' exact component={GameOver} />

      {/* Public Routes */}
      <PublicRoute component={() => <div>404, page not found!</div>} />
    </Switch>
  </BrowserRouter>
);

export default MainRouter;
