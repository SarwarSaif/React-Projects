import firebase from "firebase/app"; // Must import it
import "firebase/firestore"; // For the database
import "firebase/auth"; // For the authentication

const config = {
  apiKey: "AIzaSyA3VG47773pq1vRZSNf4QIWC2WorvDLonQ",
  authDomain: "dalal-clothing-db.firebaseapp.com",
  databaseURL: "https://dalal-clothing-db.firebaseio.com",
  projectId: "dalal-clothing-db",
  storageBucket: "dalal-clothing-db.appspot.com",
  messagingSenderId: "214977339891",
  appId: "1:214977339891:web:4ad2c66884db04e15bb286",
  measurementId: "G-2CPXK926F9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/************************************/
// Setting Up google authentication //
/************************************/

const provider = new firebase.auth.GoogleAuthProvider();
// Create provider for Google accounts

provider.setCustomParameters({ prompt: "select_account" });
// Always trigger the google pop-up whenever we use the google auth provider

export const signInWithGoogle = () => auth.signInWithPopup(provider);
// signInWithPopup can take all types of provider like google, fb, twitter and so on

export default firebase;
