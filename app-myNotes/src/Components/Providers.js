import React from "react";
import { useNavigate } from "react-router-dom";
import iconGoogle from "../Assets/icons/logo-google.png";
import iconApple from "../Assets/icons/logo-apple.png";
import "../Components/styles/styleProviders.css";
import { auth, provider, LogInGoogle } from "../firebase-config";

function Providers() {
  const navigate = useNavigate();

  const loginWithGoogle = async (app) => {
   await LogInGoogle(auth, provider).then((loginDone) => {
      navigate("/Home");
    });
  };

  return (
    <div className="providers_content">
      <div className="btn_provider">
        <img src={iconGoogle} alt="" className="provider_icon" />
        <button onClick={loginWithGoogle} className="btn_send_prov">
          Inicia sesión con Google
        </button>
      </div>

      <div className="btn_provider">
        <img src={iconApple} alt="" className="provider_icon" />
        <button type="submit" className="btn_send_prov">
          Inicia sesión con Apple
        </button>
      </div>
    </div>
  );
}
export default Providers;

