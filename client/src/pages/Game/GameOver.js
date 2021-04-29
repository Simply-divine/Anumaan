import React, { useEffect } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Button, Card, CardActions, CardContent } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { SET_HEALTH, SET_SCORE } from '../../store/ducks';
import { toast } from 'react-toastify';

const GameOverWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .game-over-card {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
`;

const GameOver = () => {
  const score = useSelector((state) => state.game.score);
  const history = useHistory();
  const dispatch = useDispatch();
  const max_score = useSelector((state) => state.auth.user.max_score);

  useEffect(() => {
    console.log('MAX_SCORE_', max_score);
    console.log(score);
    if (score > max_score) {
      toast.success(' New High score 👏👏');
    }
  }, []);

  const onClick = (e) => {
    // handle button onclick
    const clearGame = (e) => {
      dispatch({ type: SET_SCORE, payload: 0 });
      dispatch({ type: SET_HEALTH, payload: 10 });
    };
    clearGame();
    history.push('/');
  };
  return (
    <GameOverWrapper>
      <Card className='game-over-card'>
        <CardContent>
          <Typography variant='h4'>GAME OVER </Typography>
          <br />
          <Typography variant='h6'>Your Score: {score}</Typography>
        </CardContent>
        <CardActions>
          <Button variant='contained' color='primary' onClick={onClick}>
            {' '}
            Play Again
          </Button>
        </CardActions>
      </Card>
    </GameOverWrapper>
  );
};

export default GameOver;
