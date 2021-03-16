import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2AfzH0BT2pccJwKa8KBAJVAlPmLkBCPA",
  authDomain: "cyber-threat-solutions.firebaseapp.com",
  projectId: "cyber-threat-solutions",
  storageBucket: "cyber-threat-solutions.appspot.com",
  messagingSenderId: "1035459772674",
  appId: "1:1035459772674:web:56d80ebd10382c187c821b",
  measurementId: "G-EBXR6B1JRC",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Storage = firebase.storage();
const db = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { Storage, db, timestamp };

export default firebase;
