import getFirebase from './firebase';

const signInWithGoogleFirebase = async () => {
  const googleProfileData = await getFirebase().auth.signInWithPopup(getFirebase().googleAuthProvider);
  return googleProfileData;
};

const GoogleSigninService = {
  signIn: async () => {
    try {
      const userCredential = await signInWithGoogleFirebase();
      return userCredential;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
};

export default GoogleSigninService;
