import firebase from 'firebase/app';
import { auth, database } from 'firebase';
// import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBIoEBMV4L0Jas-Ian-JOoJ5UWjns6mEeQ',
  authDomain: 'mynotes-102f5.firebaseapp.com',
  databaseURL: 'https://mynotes-102f5.firebaseio.com',
  projectId: 'mynotes-102f5',
  storageBucket: 'mynotes-102f5.appspot.com',
  messagingSenderId: '692460331905',
  appId: '1:692460331905:web:ba2b359620edb010aa3e80',
  measurementId: 'G-R8CH6HRK7K',
};

const firebaseConfig = {
  app: firebase.initializeApp(config),
  googleAuthProvider: new auth.GoogleAuthProvider(),
  auth: firebase.auth(),
  db: database(),
  persistanceLocal: firebase.auth.Auth.Persistence.LOCAL,
  persistanceSession: firebase.auth.Auth.Persistence.SESSION,
};

export default firebaseConfig;
