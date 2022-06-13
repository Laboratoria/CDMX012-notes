import { signOut } from "firebase/auth";
import React from "react";
import { BiArrowToRight } from "react-icons/bi";

// import { useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
import { authentication } from "../lib/firebaseConfig";
import { Button, Div, H2 } from "./HeaderStayles";

function Header() {
  // const navigate = useNavigate();
  // const loginClick = () => {
  //     navigate("/");
  // }
  const logOut = () => {
    signOut(authentication)
      .then((re) => {
        console.log(signOut);
        console.log(re);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <Div>
      <H2>Bienvenida a tus notas </H2>
      <Button onClick={logOut}>
        <BiArrowToRight />
      </Button>
    </Div>
  );
}

export default Header;
