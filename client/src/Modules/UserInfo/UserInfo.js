import { Avatar, Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { UserMetaInfo } from './UserInfo.style';
import Flex from '../../Components/Common/Flex';

const UserInfo = () => {
  const user = useSelector((state) => state.auth.user);
  const StandOut = styled.p`
    margin: 20px;
    &:before {
      content: '${(p) => p.prefix} ';
      font-size: 1.4em;
      color: ${(p) => p.theme.colors.primary};
      font-family: ${(p) => p.theme.font.primaryMedium};
    }
  `;
  return (
    <Flex direction='row'>
      <UserMetaInfo>
        <Grid columns={{ desktop: `150px 1fr`, tablet: '1fr' }}>
          <Avatar style={{ width: '150px', height: '150px' }} />
        </Grid>
      </UserMetaInfo>
      <div>
        <StandOut prefix={'Email'}>{user.email}</StandOut>
        <StandOut prefix={'Name'}>{user.name}</StandOut>
        <StandOut prefix={'High Score'}>{user.max_score}</StandOut>
      </div>
    </Flex>
  );
};

export default UserInfo;
