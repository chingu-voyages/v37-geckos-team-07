import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../store/auth.context';

function PrivateRoute(props) {
  // Destructure the props

  const { isLoggedIn, isLoading } = useContext(AuthContext);

  // determine if authorized, from context

  // If the authentication is still loading ⏳
  if (isLoading) return <p>Loading ...</p>;

  // // If the user is not logged in ❌
  // if (!isLoggedIn) return <div>{auth && <Navigate replace to="/login" />}</div>;

  // If the user is logged in ✅
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
