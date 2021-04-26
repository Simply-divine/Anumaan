import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position='relative'>
      <Toolbar>
        <Link to='/' style={{ color: 'inherit' }}>
          <Typography variant='h6' color='inherit' noWrap>
            Anumaan
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
