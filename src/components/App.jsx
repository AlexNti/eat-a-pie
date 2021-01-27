import React from 'react';
import { Router } from '@reach/router';

import Cake from './client-pages/Cake';

const App = () => <Router basepath="/app"><Cake path="/" /></Router>;

export default App;
