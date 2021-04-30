import React, { useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import { useHistory } from 'react-router';

export const MainListItems = () => {
  const history = useHistory();
  useEffect(() => {
    history.push('/about');
  }, []);

  return (
    <div>
      <ListItem
        button
        onClick={() => {
          history.push('/about');
        }}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          history.push('/leaderboard');
        }}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary='Leaderboard' />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          history.push('/profile');
        }}
      >
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary='Profile' />
      </ListItem>
    </div>
  );
};

export const SecondaryListItems = () => {
  const history = useHistory();
  return (
    <div>
      <ListItem
        button
        onClick={() => {
          history.push('/story');
        }}
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary='About Us' />
      </ListItem>
    </div>
  );
};
