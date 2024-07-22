import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import { getRoutePath } from './routes';
import { ROUTES_ID } from './routes_id';

const RouteWithRedirections = (props) => {
  const { isAuthenticated } = useAuth();

  const isLoginSidePage = (path) => {
    const loginsidePages = [
      ROUTES_ID.login,
      ROUTES_ID.register,
      ROUTES_ID.forgotpassword,
    ];
    const loginsidePaths = loginsidePages.map((id) => getRoutePath(id));
    return loginsidePaths.some((route) => route === path);
  };

  if (isAuthenticated) {
    if (isLoginSidePage(props.path)) {
      return <Navigate to={getRoutePath(ROUTES_ID.profile)} />;
    } else {
      return <>{props.children}</>;
    }
  } else {
    if (isLoginSidePage(props.path)) {
      return <>{props.children}</>;
    } else {
      return <Navigate to={getRoutePath(ROUTES_ID.login)} />;
    }
  }
};

export default RouteWithRedirections;