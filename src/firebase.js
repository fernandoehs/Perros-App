import firebase from 'firebase/app';
import 'firebase/firestore';
 
var firebaseConfig = {
    apiKey: "AIzaSyAqPR4kAoIaBWHHEROHljD2TuVhTF_61P8",
    authDomain: "web-perro.firebaseapp.com",
    projectId: "web-perro",
    storageBucket: "web-perro.appspot.com",
    messagingSenderId: "36838333389",
    appId: "1:36838333389:web:239c4949769c13008fc284",
    measurementId: "G-C10MWKVVQE"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();