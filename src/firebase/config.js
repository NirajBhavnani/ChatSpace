import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZxe7AMC2ki6Zj7ZHTuEKIB7GEvIHdKlk",
  authDomain: "vue-firebase-sites-36b5a.firebaseapp.com",
  projectId: "vue-firebase-sites-36b5a",
  storageBucket: "vue-firebase-sites-36b5a.appspot.com",
  messagingSenderId: "133477645271",
  appId: "1:133477645271:web:fe22165a5599e9f367e992",
};

//   firebase init
firebase.initializeApp(firebaseConfig);

// firestore init
const firestore = firebase.firestore();

// authentication init
const auth = firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firestore, auth, timestamp };
