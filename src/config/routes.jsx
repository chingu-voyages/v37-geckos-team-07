import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../layout/Home';
import Landing from '../layout/Landing';
import LoginPage from '../layout/LoginPage';
import SignupPage from '../layout/SignupPage';
import Dashboard from '../layout/Dashboard';
import NotFoundPage from '../layout/NotFoundPage';
import * as PATHS from '../utils/paths';

const routes = ({ user }) => [
  {
    path: PATHS.LANDING,
    element: <Landing {...user} />,
  },
  {
    path: PATHS.SIGNUPPAGE,
    element: <SignupPage {...user} />,
  },

  {
    path: PATHS.LOGINPAGE,
    element: <LoginPage {...user} />,
  },
  {
    path: PATHS.PROTECTEDPAGE,
    element: user ? <Home {...user} /> : <Navigate to={PATHS.LOGINPAGE} replace />,
  },
  {
    path: PATHS.PROTECTEDPAGE1,
    element: user ? <Dashboard {...user} /> : <Navigate to={PATHS.LOGINPAGE} replace />,
  },
  {
    path: PATHS.NOTFOUND,
    element: user ? <NotFoundPage {...user} /> : <Navigate to={PATHS.LOGINPAGE} replace />,
  },
];

export default routes;
