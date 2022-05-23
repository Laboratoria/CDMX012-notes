import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { authentication } from "../lib/firebaseConfig";
import { FcGoogle } from "react-icons/fc";
import { Button, Div, Section } from "./LoginStyles";

function Login() {
  // const navigate = useNavigate();
  // const loginClick = () => {
  //     // navigate("/home");
  // }

  const signInWitGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Div>
      <Button onClick={signInWitGoogle}><Section><FcGoogle/></Section>Iniciar sesión con Google</Button>
    </Div>
  );
}

export default Login;
