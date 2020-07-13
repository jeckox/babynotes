import * as firebase from 'firebase';
import * as FBC from './constants/firebase';
const config = {
  apiKey: FBC.FIREBASE_APIKEY,
  authDomain: FBC.FIREBASE_AUTHDOMAIN,
  databaseURL: FBC.FIREBASE_DATABASEURL,
  projectId: FBC.FIREBASE_PROJECTID,
  storageBucket: FBC.FIREBASE_STORAGEBUCKET,
  messagingSenderId: FBC.FIREBASE_MESSAGINGSENDERID
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const babyRef = databaseRef.child("babies");
export const foodRef = databaseRef.child("food");
export const poopRef = databaseRef.child("poops");
export const extractionRef = databaseRef.child("extraction");
export const remindersRef = databaseRef.child("reminders");