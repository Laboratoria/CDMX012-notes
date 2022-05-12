/* eslint-disable no-unused-vars */
// eslint-disable-next-line
import  { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from '../lib/firebase'


export const loginWithGoogle = (auth, provider) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(auth,provider)
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    // ...
    }).catch((error) => {
      console.log(error.message)
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};


export const logOut = () => {
  signOut(auth).then(() => {
  // Sign-out successful.
  console.log("Cerrar Sesión")
  }).catch((error) => {
    console.log(error.message)
  // An error happened.
  });
};