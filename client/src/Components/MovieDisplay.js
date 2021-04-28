import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { changePlay, DECREMENT_HEALTH, UPDATE_TIME } from '../store/ducks/game';
import { toast } from 'react-toastify';
import Loading from './Common/Loading';

const ImageWrapper = styled.div`
  img {
    border-radius: 50%;
  }
`;

const LoadingWrapper = styled.div`
  height: '100%';
  width: '100%';
  display: 'flex';
  flex-direction: 'column';
  align-items: 'center';
  justify-content: 'center';
`;

const MovieDisplay = () => {
  const [loading, setLoading] = useState(false);
  const image = useSelector((state) => state.game.movie.path);
  const timer = useSelector((state) => state.game.movie.timer);
  const dispatch = useDispatch();

  useEffect(() => {
    let lastUpdateTime = Date.now();
    let interval;
    setLoading(true);
    dispatch(changePlay())
      .then(() => {
        setLoading(false);
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
    return (
      <LoadingWrapper>
        <Loading varient='primary' />
      </LoadingWrapper>
    );
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
