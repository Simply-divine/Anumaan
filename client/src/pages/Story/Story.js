import {
  Button,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const StoryWrapper = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Story = () => {
  const history = useHistory();
  const onClick = () => {
    history.push('/game');
  };
  return (
    <StoryWrapper>
      <CssBaseline />
      <Paper variant='outlined' style={{ padding: '40px' }}>
        <div>
          <Typography variant='h4' gutterBottom>
            Anumaan
          </Typography>
        </div>
        <div>
          <p>Anumaan is a fun app for all those movie lovers.</p>
          <p>Quarantine has been dull and mundane for almost everyone.</p>
          <p>Anumaan helps to bring some light entertainment on the table.</p>
        </div>
        <br />
        <div></div>
          <Typography variant='h6' gutterBottom>
            Made by
          </Typography>
        <div>
        
          <ul style={{ listStyleType: 'none' }}>
            <li>U18CO008 Shikhar Sarang</li>
            <li>U18CO070 Jay Chawla</li>
            <li>U18CO072 Hardik Upadhyay</li>
            <li>U18CO096 Atul Bharti</li>
          </ul>
        </div>
      </Paper>
    </StoryWrapper>
  );
};

export default Story;
