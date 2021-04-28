import React, { useEffect } from 'react';
import { Switch } from 'react-router';
import Leaderboard from '../Components/Leaderboard';
import Game from '../pages/Game/Game';
import GameOver from '../pages/Game/GameOver';
import Profile from '../pages/Profile/Profile';
import PrivateRoute from './PrivateRoute';

const DashboardRoutes = () => {
  useEffect(() => {
    console.log('Inside dashboard routes');
  }, []);
  return (
    <Switch>
      <PrivateRoute exact path='/game' component={Game} />
      <PrivateRoute exact path='/leaderboard' component={Leaderboard} />
      <PrivateRoute path='/gameover' exact component={GameOver} />
      <PrivateRoute path='/profile' exact component={Profile} />
    </Switch>
  );
};

export default DashboardRoutes;
