import React from 'react'
import { Router } from '@reach/router'

import { ProtectedRoute } from '../utils'

import { Cake } from './routes'

import withAuthorization from './withAuthorization.jsx'

const App = ({ authenticated }) => (
  <Router style={{ height: '100%', width: '100%' }} basepath="/app">
    <ProtectedRoute path="/" authenticated={authenticated} component={Cake} />
  </Router>
)

export default withAuthorization({})(App)
