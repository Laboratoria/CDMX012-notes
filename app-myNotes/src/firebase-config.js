import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut,} from "firebase/auth";
import { getFirestore, collection, addDoc} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// , , doc, addDoc, getDoc, getDocs, where, setDoc, deleteDoc  onSnapshot
// , ref, uploadBytes, getDownloadURL, getBytes

// myNotes app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-8IuLisSyFr8OETQ36eCpsqGukLAFTH4",
  authDomain: "mynotes-8af1b.firebaseapp.com",
  projectId: "mynotes-8af1b",
  storageBucket: "mynotes-8af1b.appspot.com",
  messagingSenderId: "227673115812",
  appId: "1:227673115812:web:34fa2ee9ad86b423f3aa31",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const LogInGoogle = signInWithPopup;
export const db = getFirestore(app);
export const storage = getStorage(app);

export { signOut } from "firebase/auth";

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    console.log('ue stetechange');
    return unsub;
    
  });
  return currentUser;
}

const colRef = collection(db, "notes");

export const saveNote = async (newNotes) => {
  const auth = getAuth();
  const user = auth.currentUser;
  newNotes.userId = user.email;
  
  await addDoc(colRef, newNotes);
  console.log("nueva nota creada");
};

