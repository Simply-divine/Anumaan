import { Avatar, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { UserMetaInfo } from './UserInfo.style';

const UserInfo = () => {
  const user = useSelector((state) => state.auth.user);
  const StandOut = styled.p`
    &:before {
      content: '${(p) => p.prefix} ';
      font-size: 1.4em;
      color: ${(p) => p.theme.colors.primary};
      font-family: ${(p) => p.theme.font.primaryMedium};
    }
  `;
  return (
    <UserMetaInfo>
      <Grid item xs={3}>
        <Avatar style={{ width: '150px', height: '150px' }} />
      </Grid>
      <Grid item xs={8}>
        <StandOut prefix={'Email'}>{user.email}</StandOut>
        <StandOut prefix={'Name'}>{user.name}</StandOut>
      </Grid>
    </UserMetaInfo>
  );
};

export default UserInfo;
