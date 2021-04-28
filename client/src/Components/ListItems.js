import React, { useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { useHistory } from 'react-router';

export const MainListItems = () => {
  const history = useHistory();

  useEffect(() => {
    history.push('/game');
  }, []);

  return (
    <div>
      <ListItem
        button
        onClick={() => {
          history.push('/game');
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
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary='About' />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary='Controls' />
      </ListItem>
    </div>
  );
};
