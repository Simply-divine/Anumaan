import { Container } from '@material-ui/core';
import React from 'react';
import UserInfoWrapper from './Profile.styles';
import UserInfo from '../../Modules/UserInfo/UserInfo';
import UserChart from '../../Components/UserChart';

const Profile = () => {
  return (
    <Container>
      <UserInfoWrapper>
        <UserInfo />
      </UserInfoWrapper>
      <UserChart />
    </Container>
  );
};

export default Profile;
