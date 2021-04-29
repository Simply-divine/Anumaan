import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Flex from '../../Components/Common/Flex';

const AboutWrapper = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const About = () => {
  const history = useHistory();
  const onClick = () => {
    history.push('/game');
  };
  return (
    <AboutWrapper>
      <Typography variant='h5'>Guess the movie and win.</Typography>
      <p>You get 30 seconds to guess a movie.</p>

      <Button variant='contained' color='primary' onClick={onClick}>
        Start Playing
      </Button>
    </AboutWrapper>
  );
};

export default About;
