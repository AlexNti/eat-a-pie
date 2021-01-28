import React from 'react';
import { Router } from '@reach/router';

import Cake from './client-pages/Cake';

const App = () => <Router style={{ height: '100%', width: '100%' }} basepath="/app"><Cake path="/" /></Router>;

export default App;
