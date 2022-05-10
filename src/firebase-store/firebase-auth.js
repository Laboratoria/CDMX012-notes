import { GoogleAuthProvider,getAuth, signInWithPopup } from "./firebase-imports";
import { app } from "./firebaseKeys";
import { signOut } from "firebase/auth";

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const exit=()=>signOut(auth)

export const LoginGoogle = () => {

return signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result)
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user.displayName + ' ' + user.email+ ' esta logueado');
    // ...
  }).catch((error) => {
    // Handle Errors here.
    // const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    // const email = error.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}