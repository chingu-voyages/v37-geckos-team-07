import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { AuthContext } from '../store/auth.context';

function AnonRoute(props) {
  const { to, exact, component: Component, ...restProps } = props;

  const { isLoggedIn, isLoading } = useContext(AuthContext);

  const shouldRedirect = true;

  // If the authentication is still loading ⏳
  if (isLoading) return <p>Loading ...</p>;

  // If the user is already logged in, redirect him to home page
  if (isLoggedIn) return <div>{shouldRedirect && <Navigate replace to="/" />}</div>;

  // If the user is not logged in yet, allow him to see the page
  return <Route to={to} exact={exact} component={Component} {...restProps} />;
}

export default AnonRoute;
