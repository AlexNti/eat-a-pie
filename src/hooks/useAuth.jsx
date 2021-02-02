import React from 'react';
import { AuthContext } from '../components/providers/authProvider/AuthProvider';

const useAuth = () => React.useContext(AuthContext);

export default useAuth;
