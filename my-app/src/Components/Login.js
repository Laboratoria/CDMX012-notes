import React from "react";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {authentication} from "../firebase/firebaseConfig";


function Login  () {
    
   const signInWitGoogle =()=>{
       const provider =new GoogleAuthProvider();
       signInWithPopup(authentication, provider)
      .then((re) => {
          console.log(re);
      }).catch((err) => {
          console.log(err);
      });

   }
    return(
        <button onClick={signInWitGoogle}>Iniciar sesion con google</button>

    )
}

export default Login;