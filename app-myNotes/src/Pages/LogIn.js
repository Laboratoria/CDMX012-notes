import React from 'react';
import './Login.css';
import logo from "../Assets/logo/myNotes.png"
import reactlogo from "../Assets/logo/reactIcon.png"
import Providers from '../Components/Providers'

function LogInPage () {
  return (
    <div>
      <img src= {logo} alt="Logo" className= "logo_mynotes"/>
      <div className= "slogan"> Recuerda todo lo que importa </div>
      <div className= "welcome">¡Bienvenido!</div>
      <Providers/>

    < div className= "footer">
      <div>  LabNotes CDMX12 Powered by React </div>
       <img src= {reactlogo} alt="" className= "input_iconr"/>
      </div>


    </div>
  )
}

export default LogInPage;