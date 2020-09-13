import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSs1C6tKJfVzsivX3QYYyl8fTDuqyhi0c",
  authDomain: "clone-ed3f9.firebaseapp.com",
  databaseURL: "https://clone-ed3f9.firebaseio.com",
  projectId: "clone-ed3f9",
  storageBucket: "clone-ed3f9.appspot.com",
  messagingSenderId: "1014832556054",
  appId: "1:1014832556054:web:e528001ec59a0da9432d37",
  measurementId: "G-X6CPCBR3CD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
