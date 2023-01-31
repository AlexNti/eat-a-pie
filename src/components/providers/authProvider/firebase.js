import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore';

// @ts-ignore
const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_DEV_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DEV_DATABASE_URL,
  projectId: process.env.GATSBY_DEV_PROJECT_ID,
  storageBucket: process.env.GATSBY_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_DEV_MESSAGING_SENDER_ID,
};
let instance;
let auth;
let googleAuthProvider;

export default function getFirebase() {
  if (typeof window !== 'undefined') {
    if (instance) return { instance, auth, googleAuthProvider };
    instance = firebase.initializeApp(config);
    auth = firebase.auth();
    googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    return instance;
  }

  return null;
}
