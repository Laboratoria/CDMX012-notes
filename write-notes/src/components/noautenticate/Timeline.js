import React from 'react'
import logoutImg from '../../assets/logoutImg.png'
import { logOut } from '../../lib/firebaseAuth'
import { useNavigate } from 'react-router-dom';



//INGRESO FUNCION DE FIREBASE

export function Timeline() {
  const navigate = useNavigate();
 

  const signOut = () => {
    logOut(); 
    navigate("/");

  }
 
  return (
 
    <div className='container'>

    <header className='title'> 
    <h1> WRITE NOTES </h1>  
    <button className='btnLogout' onClick = { signOut }> 
    <img src= { logoutImg } className="exit" alt="Exit"/></button>  
    </header>
   
    </div>

  );
}

export default Timeline;