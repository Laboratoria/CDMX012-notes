import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";

export { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged }



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4EXr3k-Sr3urT1LINcu4mKC-qsvcID2Y",
  authDomain: "write-notes-react.firebaseapp.com",
  projectId: "write-notes-react",
  storageBucket: "write-notes-react.appspot.com",
  messagingSenderId: "254920904923",
  appId: "1:254920904923:web:5aed92c62b3dc76fc6bcfe"
};

// Initialize firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

