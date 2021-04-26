import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const RestrictedRoute = ({ ...props }) => {
  const checkingAuthStatus = useSelector(
    (state) => state.loading['auth/CHECK_AUTH']
  );
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return checkingAuthStatus ? (
    <></>
  ) : isAuthenticated ? (
    <Redirect
      to={{ pathname: '/dashboard', state: { from: props.location } }}
    />
  ) : (
    <Route {...props} />
  );
};

export default RestrictedRoute;
