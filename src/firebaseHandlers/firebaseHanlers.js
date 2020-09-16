import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyASTbbv5-OLpT171JP3OIJ1kO_o-KulAkI",
  authDomain: "solvely22-4b6ac.firebaseapp.com",
  databaseURL: "https://solvely22-4b6ac.firebaseio.com",
  projectId: "solvely22-4b6ac",
  storageBucket: "solvely22-4b6ac.appspot.com",
  messagingSenderId: "775467895655",
  appId: "1:775467895655:web:0081208940cc723c47bdc2",
  measurementId: "G-DE5GCC9Z4X",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
