import { initializeApp } from 'firebase/app';
import { confirmPasswordReset, getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL, getBytes } from 'firebase/storage';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import useForm from '../Hooks/useForm';

const firebaseConfig = {
  apiKey: 'AIzaSyAF69GlD9YNy106CYWYcGm9FqKYOap70KM',
  authDomain: 'spacenotes-2ddef.firebaseapp.com',
  projectId: 'spacenotes-2ddef',
  storageBucket: 'spacenotes-2ddef.appspot.com',
  messagingSenderId: '311695225043',
  appId: '1:311695225043:web:bc4c05341f18bb64dca426',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

export async function userExist(uid) {
  const docRef = doc(db, 'users', uid);
  const res = await getDoc(docRef);
  console.log(res);
  return res.exists();
}

export async function registerUser(uid, name, email) {
  try {
    const userCollection = collection(db, 'users');
    console.log(uid);
    console.log(name);
    console.log(email);
    await setDoc(doc(userCollection, uid), {
      uid,
      name,
      email,
    });
  } catch (error) {
    console.log('usuario no guardado', error);
  }
}

export async function registerUserEmailPass(uid, userName, name, email, password) {
  try {
    const userCollection = collection(db, 'users');
    console.log(uid);
    console.log(userName);
    console.log(name);
    console.log(email);
    console.log(password);
    await setDoc(doc(userCollection, uid), {
      uid,
      userName,
      name,
      email,
      password,
    });
  } catch (e) {
    console.log('Usuario no guardado', e);
  }
}
