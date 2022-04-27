import React, { useState } from "react";
import "./styleForms.css"
import {onAuthStateChanged } from 'firebase/auth';



const Formulario = () => {
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.account]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault()
    console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
}

<form onSubmit={enviarDatos}></form>

  return (
    <div className="input_section">
      <form>
        <div className="input_account">
          <img src="../../public/Assets-icons/email.png" alt="" className="input_icon" />
          <input type="email" account="email" placeholder="Email" onChange={handleInputChange}/>
        </div>
        <div className="input_account">
          <img src="../Assets/icons/candado.png" alt="" className="input_icon"/>
          <input type="text" account="password" placeholder="Contraseña" onChange={handleInputChange}/>
          <img src="../Assets/icons/ver.png" alt="" className="input_icon" />
        </div>
        <div className="forgot_pass"> ¿Olvidaste la contraseña? </div>
        <button type="submit" className="btn_send">Continuar</button>

      </form>

      <h1> <span>o utiliza</span> </h1>
    </div>
  );
};
export default Formulario;
