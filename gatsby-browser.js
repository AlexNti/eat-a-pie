import React from 'react';

import { AuthProvider } from './src/components/providers/authProvider/AuthProvider';
import GoogleSigninService from './src/components/providers/authProvider/GoogleSignInService';
import './src/styles/global.css';
import '@fontsource/londrina-solid';
import '@fontsource/montserrat';

export const wrapRootElement = ({ element }) => (
  <AuthProvider authenticationService={GoogleSigninService}>
    {element}
  </AuthProvider>

);
