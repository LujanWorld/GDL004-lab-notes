import firebase from 'firebase/app';
import firebaseConfig from '../configs/firebaseConfig';

const fire = firebase.initializeApp(firebaseConfig);
/**
 *
 *
 *
 */

export default {
  fire,
  createUserEamilAndPassword
};
