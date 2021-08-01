import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyA7LjQaM7UCgcGtb7BIcFP2FJxyA0Olfzs",
  authDomain: "pastefy.firebaseapp.com",
  databaseURL: "https://pastefy.firebaseio.com",
  projectId: "pastefy",
  storageBucket: "pastefy.appspot.com",
  messagingSenderId: "50714223227",
  appId: "1:50714223227:web:f45c007d465df69505b8de",
  measurementId: "G-G55DBNDYRD"
};
firebase.initializeApp(config);
export default firebase;