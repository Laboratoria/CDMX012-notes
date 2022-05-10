export {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  onSnapshot,
  doc,
  updateDoc,
  orderBy,
  query,
  arrayUnion,
  arrayRemove,
// eslint-disable-next-line import/no-unresolved
  } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
  export {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
// eslint-disable-next-line import/no-unresolved
  } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
export { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";