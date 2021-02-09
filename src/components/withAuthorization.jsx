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
    if (authenticated === true) {
      navigate("/app/pie");
    }
  }, [authenticated]);

  return (
    <Component
      handleSignIn={handleSignIn}
      authenticated={authenticated}
      {...props}
    />
  );
};

export default withAuthorization;
