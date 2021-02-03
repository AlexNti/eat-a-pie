import React, { useEffect } from 'react';
import { useAuth } from '../hooks';

import { navigate } from 'gatsby';

const withAuthorization = redirect => Component => props => {
  const auth = useAuth();
  const authenticated = auth?.isAuthenticated;
  const toPath = redirect?.path;

  const handleSignIn = () => {
    auth.signIn();
  };

  useEffect(() => {
    if (authenticated === true && !!toPath) {
      navigate(toPath);
    }
  }, [authenticated, toPath]);

  return (
    <Component
      handleSignIn={handleSignIn}
      authenticated={authenticated}
      {...props}
    />
  );
};

export default withAuthorization;
