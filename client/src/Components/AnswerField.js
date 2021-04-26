import { Container, TextField } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  changePlay,
  DECREMENT_HEALTH,
  INCREMENT_SCORE,
} from '../store/ducks/game';
import { toast } from 'react-toastify';

const AnswerField = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const movieName = useSelector((state) => state.game.movie?.name);
  const onSubmit = (data, e) => {
    e.target.reset();
    if (data.movie === movieName) {
      dispatch({ type: INCREMENT_SCORE });
      toast.success('Correct Guess 😉!!');
      dispatch(changePlay());
    } else {
      dispatch({ type: DECREMENT_HEALTH });
      toast.error('Wrong Guess 😔!!');
      dispatch(changePlay());
    }
  };
  return (
    <footer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button type='submit' style={{ visibility: 'hidden' }}>
          GO
        </button>
        <Container>
          <TextField
            label='Movie Name'
            style={{
              width: '100%',
              height: '100%',
              bottom: '0px',
            }}
            autoComplete='off'
            {...register('movie')}
          />
        </Container>
      </form>
    </footer>
  );
};

export default AnswerField;
