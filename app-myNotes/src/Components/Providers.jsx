import React from 'react';
import { useNavigate} from 'react-router-dom';
import iconGoogle from '../Assets/icons/logo-google.png'
import iconApple from '../Assets/icons/logo-apple.png'
import "./styleProviders.css"
import {auth, provider, LogInGoogle} from '../firebase-config'

// { useEffect } userExist


function Providers () {
  const navigate = useNavigate();

  const loginWithGoogle = (app)=>{
    LogInGoogle(auth, provider)
        .then((loginDone)=>{
            navigate('/Home');
        });
    }


  return (
    <div className="providers_content">
      < div className="btn_provider">
      <img src= {iconGoogle} alt="" className="provider_icon"/>
       <button onClick={loginWithGoogle} className="btn_send_prov">Inicia sesión con Google</button>
      </div>

      < div className="btn_provider">
       <img src={iconApple} alt="" className="provider_icon"/>
       <button type="submit" className="btn_send_prov">Inicia sesión con Apple</button>
      </div>

    </div>
  )
}
export default Providers;

/* <div className="register_content">
  <div className="register_text"> ¿No tienes una cuenta?  </div>
  <div className="btn_register">Regístrate</div>
</div> */