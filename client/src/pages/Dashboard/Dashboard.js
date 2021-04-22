import React from 'react';
import MovieDisplay from '../../Components/MovieDisplay';
import DashboardWrapper from './Dashboard.styles';

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <h1>Start Playing</h1>
      <MovieDisplay time={30}/>
    </DashboardWrapper>
  );
};

export default Dashboard;
