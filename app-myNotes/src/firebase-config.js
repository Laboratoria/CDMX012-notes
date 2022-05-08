import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, collection, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";
import { getStorage } from "firebase/storage";
export { signOut } from "firebase/auth";

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
export const colRef = collection(db, "notes");

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    if (!unsub) {
      navigate("/login");
    }
    return unsub;
  });
  return currentUser;
}

export const saveNote = async (newNotes) => {
  const user = auth.currentUser;
  newNotes.userId = user.email;

  await addDoc(colRef, newNotes);
  console.log("nueva nota creada");
};


export const editNote = async (newNotes) => {
  await updateDoc(colRef, newNotes);
  console.log("nueva notaeditada");
};

export const deletedNote = async(note) => {
  console.log(note);
  await deleteDoc(doc( colRef, note.id));
};

