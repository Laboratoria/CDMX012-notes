import React from "react";
import "../styles/Login.css";
import "../styles/Button.css";

const Login = ({LoginWithGoogle}) => {
  return (
    <div className="mainContainerLogin">
      <section className="brownRectangle">
        <img
          className="bigRosettaLogo"
          src="https://i.imgur.com/pS4YttT.png"
          alt="rosetta Logo"
        ></img>
        <h1>All your ideas in one place.</h1>
        <h1>Write your lists, create notes.</h1>
        {/* Botón Google */}
        <button className="GoogleBtn" onClick={
        LoginWithGoogle} >Login with Google</button>
      </section>
      <footer>2022 | Roxana Hernández</footer>
      <img
        className="backgroundImage"
        src="https://i.imgur.com/N9pCgiX.jpg?1"
        alt="bokeh background"
      ></img>
    </div>
  );
}

export default Login;