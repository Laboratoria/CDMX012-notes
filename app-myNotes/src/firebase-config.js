import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// export { getFirestore, collection, doc, addDoc, getDoc, getDocs, query, where, setDoc, deleteDoc} from 'firebase/firestore';
// export { getStorage, ref, uploadBytes, getDownloadURL, getBytes } from 'firebase/storage';

// , collection, doc, addDoc, getDoc, getDocs, query, where, setDoc, deleteDoc
// , ref, uploadBytes, getDownloadURL, getBytes



// myNotes app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-8IuLisSyFr8OETQ36eCpsqGukLAFTH4",
  authDomain: "mynotes-8af1b.firebaseapp.com",
  projectId: "mynotes-8af1b",
  storageBucket: "mynotes-8af1b.appspot.com",
  messagingSenderId: "227673115812",
  appId: "1:227673115812:web:34fa2ee9ad86b423f3aa31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const LogInGoogle = signInWithPopup;

export const db = getFirestore(app);
export const storage = getStorage(app);




export function useAuth() {
  const [currentUser,setCurrentUser] = useState();

  useEffect (() => {
   const unsub = onAuthStateChanged(auth,user=> setCurrentUser(user));
    return unsub;
    }
  )
    return currentUser;
}
