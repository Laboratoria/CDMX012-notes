// Import the functions you need from the SDKs you need
import { initializeApp, getAuth, getFirestore } from './firebase-imports';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVKYE0ELFGJlFKqOiRSa0vpQboBYjoW_w",
  authDomain: "note-me-44781.firebaseapp.com",
  projectId: "note-me-44781",
  storageBucket: "note-me-44781.appspot.com",
  messagingSenderId: "8200281778",
  appId: "1:8200281778:web:ed088a6efc6965f1cd73ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);