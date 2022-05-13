//import { getRedirectResult, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig"
import { signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";


export const LoginWithGoogle = ()=>{
 const provider = new GoogleAuthProvider();
  
  signInWithPopup(auth, provider)

      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
      // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
      // ...
      }).catch((error) => {
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
  

export const logOut =()=>signOut(auth);
