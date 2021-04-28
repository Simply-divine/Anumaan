import {
  CssBaseline,
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
  withStyles,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Loading from './Common/Loading';

const StatusWrapper = styled.div`
  div {
    margin: 20px;
  }
  .score {
    border: 2px solid yellow;
    padding: 5px;
  }
`;

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Status = () => {
  const classes = useStyles();
  const score = useSelector((state) => state.game.score);
  const health = useSelector((state) => state.game.health);
  return (
    <StatusWrapper>
      <div className={classes.root}>
        <div className='score'>
          <Typography variant='h6'>Score: {score}</Typography>
        </div>
        <div>
          <Typography variant='h6'>
            Health: {health >= 0 ? health : <Loading variant='secondary' />}
          </Typography>
          <BorderLinearProgress variant='determinate' value={50} />
        </div>
      </div>
    </StatusWrapper>
  );
};

export default Status;
