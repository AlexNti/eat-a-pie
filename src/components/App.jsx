import React from 'react';
import { Router } from '@reach/router';

import ProtectedRoute from './ProtectedRoute';
import LoginPage from './client-pages/cake/Login';

import Cake from './client-pages/cake/Cake';

import withAuthorization from './withAuthorization.jsx';

const App = ({ authenticated }) => (
  <Router style={{ height: '100%', width: '100%' }} basepath="/app">
    <ProtectedRoute path="/pie" authenticated={authenticated} component={Cake} />
    <LoginPage path="/login" />
  </Router>
);

export default withAuthorization({})(App);
