import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqUNyFxc7wAX32B-hJ0JwwpVcye7OXGVQ",
  authDomain: "ama-zon-clone-firebase-react.firebaseapp.com",
  databaseURL: "https://ama-zon-clone-firebase-react.firebaseio.com",
  projectId: "ama-zon-clone-firebase-react",
  storageBucket: "ama-zon-clone-firebase-react.appspot.com",
  messagingSenderId: "1025450103188",
  appId: "1:1025450103188:web:bcb1472b55f4e842f2ff81",
  measurementId: "G-1FR2VM36PN",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
