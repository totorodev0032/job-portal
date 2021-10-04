import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ allowedRole, path, component }) => {
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  if (!userData) {
    return <Redirect to="/login" />;
  }
  if (allowedRole !== undefined && allowedRole !== userData.userRole) {
    return <Redirect to="/dashboard" />;
  }
  return <Route path={path} component={component} />;
};

export default PrivateRoute;
