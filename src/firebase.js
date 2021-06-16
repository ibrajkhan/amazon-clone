import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDLzss9FU6-71R316CvMXaFPtCNOegYCWc",
  authDomain: "app-ae3b3.firebaseapp.com",
  projectId: "app-ae3b3",
  storageBucket: "app-ae3b3.appspot.com",
  messagingSenderId: "492719757375",
  appId: "1:492719757375:web:3ed34fff0aab6bccc5408a",
  measurementId: "G-5QGGCB546T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
