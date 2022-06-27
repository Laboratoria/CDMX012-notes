// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

//import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firestore";
//import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
//import {
  //getAuth,
/*onAuthStateChanged,  Observador vinculado al objeto de autenticación global. 
  Se llama a este observador cada vez que cambia el estado de acceso del usuario. */
  //GoogleAuthProvider,
  //signOut,
  //signInWithPopup,
 //} from '"https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"';

// Web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA6y73QmnxrUJSNn-TkRwOLmBYMQFfvTBk",
  authDomain: "rosetta-e89bb.firebaseapp.com",
  projectId: "rosetta-e89bb",
  storageBucket: "rosetta-e89bb.appspot.com",
  messagingSenderId: "1031755121561",
  appId: "1:1031755121561:web:c9c8ab957d67da86f3c908",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// We’ll import db anytime we need to access the database.
export const db = getFirestore(app);
// We’ll import database anytime we need to access it.
//export const database = getDatabase(app);
// We’ll import auth anytime we need to authenticate with Firebase.
//export const auth = getAuth(app);
// We’ll import provider anytime we need to authenticate with Google.
//export const provider = new GoogleAuthProvider();
//provider.setCustomParameters({ prompt: "select_account" });

