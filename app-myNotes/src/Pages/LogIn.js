import React from "react";
import "./Login.css";
import logo from "../Assets/logo/myNotes.png";
import reactlogo from "../Assets/logo/reactIcon.png";
import Providers from "../Components/Providers";

function LogInPage() {
  return (
    <>
      <div className="login_container">
          <img className="logo_mynotes" src={logo} alt="Logo" />
          <div className="slogan"> Recuerda todo lo que importa </div>
        <div className="welcome">¡Bienvenido!</div>
        <Providers />
        <div className="footer">
          <div> LabNotes CDMX12 Powered by React </div>
          <img src={reactlogo} alt="" className="icon_log_react" />
        </div>
      </div>
    </>
  );
}

export default LogInPage;
