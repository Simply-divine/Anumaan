import React, { useEffect } from 'react';
import { Switch } from 'react-router';
import Game from '../Components/Game';
import GameOver from '../Components/GameOver';
import Leaderboard from '../Components/Leaderboard';
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
    </Switch>
  );
};

export default DashboardRoutes;
