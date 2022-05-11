import React from 'react'
import buscar  from '../../assets/buscar.png';


//INGRESO FUNCION DE FIREBASE

export function AccesTimeline() {
  return (
    
   
    <div>
    <button className='btnGoogle'> LOGIN WHIT GOOGLE 
        <img src= { buscar } className="google" alt="Google"/>
        </button>
    </div>

  );
}

export default AccesTimeline;