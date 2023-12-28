// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5xifm3U45Dml8dwtiX35WAVB4_4n28oo",
  authDomain: "audrino-door-lock.firebaseapp.com",
  projectId: "audrino-door-lock",
  storageBucket: "audrino-door-lock.appspot.com",
  messagingSenderId: "388461626313",
  appId: "1:388461626313:web:88487463cea46b4081de18",
  measurementId: "G-V82G6R4WTM"
});

const db = firebase.firestore();
export { db};