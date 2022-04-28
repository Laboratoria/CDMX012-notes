import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDsA9-I7lqFyROVJ9D17JbVM_afni45ZyE",
    authDomain: "memodoo.firebaseapp.com",
    projectId: "memodoo",
    storageBucket: "memodoo.appspot.com",
    messagingSenderId: "239187329414",
    appId: "1:239187329414:web:b8a5cb751e92942588ec07"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
//Authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export {
    signInWithPopup
}

// Initialize Cloud Firestore and get a reference to the service
//const db = getFirestore(app);

