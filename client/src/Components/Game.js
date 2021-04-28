import { CssBaseline, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import {
  changePlay,
  DECREMENT_HEALTH,
  SET_HEALTH,
  SET_SCORE,
  UPDATE_TIME,
} from '../store/ducks/game';
import AnswerField from './AnswerField';
import MovieDisplay from './MovieDisplay';
import Status from './Status';

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Game = () => {
  const dispatch = useDispatch();
  const health = useSelector((state) => state.game.health);
  const history = useHistory();

  useEffect(() => {
    const clearGame = (e) => {
      dispatch({ type: SET_SCORE, payload: 0 });
      dispatch({ type: SET_HEALTH, payload: 10 });
    };
    clearGame();
  }, []);

  if (health === 0) {
    history.push('/gameover');
  }

  return (
    <GameWrapper>
      <CssBaseline />
      <Status />
      <MovieDisplay time={30} />
      <AnswerField />
    </GameWrapper>
  );
};

export default Game;
