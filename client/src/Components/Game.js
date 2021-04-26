import { CssBaseline, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { SET_HEALTH, SET_SCORE } from '../store/ducks/game';
import AnswerField from './AnswerField';
import MovieDisplay from './MovieDisplay';
import Status from './Status';

const GameWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Game = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const clearGame = (e) => {
      dispatch({ type: SET_SCORE, payload: 0 });
      dispatch({ type: SET_HEALTH, payload: 10 });
    };
    clearGame();
  }, []);

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
