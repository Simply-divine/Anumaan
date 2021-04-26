import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { changePlay, DECREMENT_HEALTH, UPDATE_TIME } from '../store/ducks/game';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

const ImageWrapper = styled.div`
  img {
    border-radius: 50%;
  }
`;

const MovieDisplay = () => {
  const [loading, setLoading] = useState(false);
  const image = useSelector((state) => state.game.movie.path);
  const timer = useSelector((state) => state.game.movie.timer);
  const health = useSelector((state) => state.game.health);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    let lastUpdateTime = Date.now();
    let interval;
    dispatch(changePlay())
      .then(() => {
        interval = setInterval(() => {
          const now = Date.now();
          const deltaTime = now - lastUpdateTime;
          lastUpdateTime = now;
          dispatch({ type: UPDATE_TIME, payload: deltaTime });
        }, 1000);
      })
      .catch((err) => {});

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (health === 0) {
    history.push('/gameover');
  }

  if (timer >= 30000) {
    toast.error('Time Up!! ⏲⏲');
    dispatch({ type: DECREMENT_HEALTH });
    dispatch({ type: UPDATE_TIME, payload: -timer });
    dispatch(changePlay());
  }
  return (
    <ImageWrapper>
      {image && (
        <img
          src={`https://image.tmdb.org/t/p/original/${image}`}
          style={{ width: '500px', height: '500px' }}
          alt='Movie'
        />
      )}
    </ImageWrapper>
  );
};

export default MovieDisplay;
