import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDBSeiGf4OBgBGTsvCi1aKOFdAzVSzWS20",
  authDomain: "project-8d596.firebaseapp.com",
  projectId: "project-8d596",
  storageBucket: "project-8d596.appspot.com",
  messagingSenderId: "449677295191",
  appId: "1:449677295191:web:920ab93bbf5dd12b6aed12",
  measurementId: "G-LEXN3HZ16C"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
