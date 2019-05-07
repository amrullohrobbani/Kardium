import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyDl6vH14-lBFMmkfAxck-OJeh9vrAcKtq0",
    authDomain: "wecg-3193d.firebaseapp.com",
    databaseURL: "https://wecg-3193d.firebaseio.com",
    projectId: "wecg-3193d",
    storageBucket: "wecg-3193d.appspot.com",
    messagingSenderId: "363345857760"
  };
  firebase.initializeApp(config);
  firebase.firestore();

  export default firebase;
