import React from 'react';
import Game from '../../Components/Game';
import Navbar from '../../Components/Navbar';
import DashboardWrapper from './Dashboard.styles';

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Navbar />
      <Game />
    </DashboardWrapper>
  );
};

export default Dashboard;
