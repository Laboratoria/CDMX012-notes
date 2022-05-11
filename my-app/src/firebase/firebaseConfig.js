import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDTBUKrpf83uxM2wSdUy7xpQTNg-39fsgA",
  authDomain: "labnotes-7125f.firebaseapp.com",
  projectId: "labnotes-7125f",
  storageBucket: "labnotes-7125f.appspot.com",
  messagingSenderId: "321351428702",
  appId: "1:321351428702:web:9b43b407a8631a2493a2cf"
};

const app = initializeApp(firebaseConfig);
export const authentication =getAuth (app);
