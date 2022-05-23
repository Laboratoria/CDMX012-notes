import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection,Timestamp } from "firebase/firestore";

//doc, , getFirestore, , , onSnapshot, orderBy, query, deleteDoc, getDoc, updateDoc, setDoc, arrayUnion, arrayRemove


const firebaseConfig = {
  apiKey: "AIzaSyDTBUKrpf83uxM2wSdUy7xpQTNg-39fsgA",
  authDomain: "labnotes-7125f.firebaseapp.com",
  projectId: "labnotes-7125f",
  storageBucket: "labnotes-7125f.appspot.com",
  messagingSenderId: "321351428702",
  appId: "1:321351428702:web:9b43b407a8631a2493a2cf"
};

// Initializar  Firebase
const app = initializeApp(firebaseConfig);
export  const authentication =getAuth (app);

export const db = getFirestore(app);

// crear notas 
export const notes = async (title, note) => {
  await addDoc(collection(db, 'posts'), {
    text: title,
    text2: note ,
    datecreate: Timestamp.now(),
    dateupdate: Timestamp.now(),
    email: authentication.currentUser.email,
    likes: [],
  })
}




