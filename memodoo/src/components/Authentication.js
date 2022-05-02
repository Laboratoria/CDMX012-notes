import '../App.css';
import { useNavigate } from "react-router-dom";
import {auth, signInWithPopup, provider} from  '../firebase';

export function GoogleSignIn() {

  const navigate = useNavigate();

  const signInWithGoogle = () => {
  
    signInWithPopup(auth, provider)
      .then((result) => {
        //setisAuth(true);
        navigate('/Notes')
      //console.log(result)
    }).catch((error) => {
      console.log(error)
  });
  } 

    return (
      <div className="intro-buttons"> 
        <button className="btn-register" onClick={signInWithGoogle}>Register & Log In with Google</button>
      </div>
    );
  }
  export default GoogleSignIn;