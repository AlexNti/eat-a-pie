import React from 'react'
import { Router } from '@reach/router'

import ProtectedRoute from '../utils/ProtectedRoute'

import Cake from './client-pages/cake/Cake'

const App = ({ authenticated }) => (
  <Router style={{ height: '100%', width: '100%' }} basepath="/app">
    <ProtectedRoute path="/" authenticated={authenticated} component={Cake} />
  </Router>
)

export default App
