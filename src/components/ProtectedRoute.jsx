import React from 'react';
import { navigate } from 'gatsby';

const ProtectedRoute = ({ component: Component, authenticated, ...props }) => {
  if (!authenticated) {
    navigate('/app/login');

    return null;
  }

  return <Component {...props} />;
};

export default ProtectedRoute;
