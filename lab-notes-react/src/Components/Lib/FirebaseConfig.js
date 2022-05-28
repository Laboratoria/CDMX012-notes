import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCt4e8TihZec_MVQCzWvd967KgB2r5t9L8",
  authDomain: "mynotes-279fc.firebaseapp.com",
  projectId: "mynotes-279fc",
  storageBucket: "mynotes-279fc.appspot.com",
  messagingSenderId: "474299047331",
  appId: "1:474299047331:web:3e09849399000f170ece16"
};

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const collectionRef = collection(db, 'myNotes');
  