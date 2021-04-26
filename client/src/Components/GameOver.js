import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  setMaxScore,
  SET_HEALTH,
  SET_MAX_SCORE,
  SET_SCORE,
} from '../store/ducks';

const GameOverWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const GameOver = () => {
  const score = useSelector((state) => state.game.score);
  const history = useHistory();
  const dispatch = useDispatch();
  const max_score = useSelector((state) => state.auth.user.max_score);
  const onClick = (e) => {
    // handle button onclick
    const clearGame = (e) => {
      dispatch({ type: SET_SCORE, payload: 0 });
      dispatch({ type: SET_HEALTH, payload: 10 });
    };
    console.log('MAX_SCORE_', max_score);
    if (score > max_score) {
      dispatch(setMaxScore(score));
      // todo: add message for new high score
    }
    clearGame();
    history.push('/dashboard');
  };
  return (
    <GameOverWrapper>
      <Typography variant='h5'>GAME OVER...</Typography>
      <Typography variant='h6'>Your Score</Typography>
      <Typography variant='h6'>{score}</Typography>

      <Button variant='contained' color='primary' onClick={onClick}>
        {' '}
        Play Again
      </Button>
    </GameOverWrapper>
  );
};

export default GameOver;
