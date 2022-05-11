import React from "react";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {authentication} from "../firebase/firebaseConfig";
import {useNavigate} from 'react-router-dom';



function Login  () {
    
    const navigate = useNavigate();
    const loginClick = ()=>{
     navigate("/home");
    }
    
   const signInWitGoogle =()=>{
       const provider =new GoogleAuthProvider();
       signInWithPopup(authentication, provider)
      .then((re) => {
          loginClick(re);
      }).catch((err) => {
          console.log(err);
      });

   }
    return(
        <button onClick={signInWitGoogle}>Iniciar sesion con google</button>

    )
}

export default Login;