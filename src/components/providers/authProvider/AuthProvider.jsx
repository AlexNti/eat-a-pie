/** Some features of this function are experimental
 * and they are going to used in feature releases */

import React from 'react';

import getFirebase from './firebase';

const AuthContext = React.createContext({
  isAuthenticated: false,
  userInfo: null,
  signOut: () => null,
  signIn: () => null,
});

const AuthProvider = ({ children, authenticationService }) => {
  const isAuthenticated = React.useRef(false);
  const [authUser, setAuthUser] = React.useState(null);
  const firebase = getFirebase();

  React.useEffect(() => {
    // Verify the ID token first.
    // TODO add gogole play games services silent login on authcontet when is not expo client
    getFirebase().auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        console.log(token);
        isAuthenticated.current = true;
        setAuthUser(user);
      } else {
        isAuthenticated.current = false;
        setAuthUser(null);
      }
    });
  }, []);

  const userInfo = React.useMemo(() => {
    if (authUser) {
      const {
        displayName,
        email,
        phoneNumber,
        photoURL,
        providerId,
        uid,
      } = authUser;
      return {
        displayName,
        email,
        phoneNumber,
        photoURL,
        providerId,
        uid,
      };
    }
    return null;
  }, [authUser]);

  const signOut = React.useCallback(
    ({ onSuccess = () => {}, onError = () => {} } = {}) => auth.signOut().then(onSuccess).catch(onError),
    [],
  );

  const signIn = React.useCallback(() => {
    authenticationService.signIn();
  }, []);

  const contextValue = React.useMemo(
    () => ({
      userInfo,
      isAuthenticated: isAuthenticated.current,
      signOut,
      signIn,
    }),
    [isAuthenticated.current, userInfo],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const memoizedProvider = React.memo(AuthProvider);

export { AuthContext, memoizedProvider as AuthProvider };
