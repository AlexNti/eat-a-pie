import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore';

console.log(process.env.GATSBY_FIREBASE_API_KEY);
// @ts-ignore
const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_DEV_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DEV_DATABASE_URL,
  projectId: process.env.GATSBY_DEV_PROJECT_ID,
  storageBucket: process.env.GATSBY_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_DEV_MESSAGING_SENDER_ID,
};

const firebaseApp = firebase.initializeApp(config);
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseDatabase = firebase.database();
export const firebaseFunctions = firebaseApp.functions('europe-west1');

export default firebase;
