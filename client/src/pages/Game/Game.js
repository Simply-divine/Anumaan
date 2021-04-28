import { CssBaseline } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import MovieDisplay from '../../Components/MovieDisplay';
import Status from '../../Components/Status';
import AnswerField from '../../Components/AnswerField';
import {
  addScore,
  DECREMENT_HEALTH,
  SET_HEALTH,
  SET_SCORE,
} from '../../store/ducks';
import Loading from '../../Components/Common/Loading';
import Flex from '../../Components/Common/Flex';

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Game = () => {
  const dispatch = useDispatch();
  const health = useSelector((state) => state.game.health);
  const score = useSelector((state) => state.game.score);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const clearGame = (e) => {
      dispatch({ type: SET_SCORE, payload: 0 });
      dispatch({ type: SET_HEALTH, payload: 10 });
    };
    clearGame();
  }, []);

  if (health === 0) {
    dispatch({ type: DECREMENT_HEALTH });
    setLoading(true);
    dispatch(addScore(score)).then((res) => {
      history.push('/gameover');
    });
    setLoading(true);
  }

  if (loading) {
    return (
      <Flex align='center' justify='center' direction='column'>
        <Loading varient='primary' />
      </Flex>
    );
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
