import React from 'react'
import buscar  from '../../assets/buscar.png';
import { auth, provider } from '../../lib/firebase';
import { loginWhitGoogle } from '../../lib/firebaseAuth';

export function Home() {

  const loginGoogle = () =>{
    loginWhitGoogle(auth, provider) 
  }

    return (
    
    <div>
        <div className='container'>
          <img id='note' src="https://imgur.com/x2eC1lG.jpeg" alt="Note" />
        </div>

        <button className='btnGoogle' onClick= { loginGoogle } > LOGIN WHIT GOOGLE
        <img src= { buscar } className="google" alt="Google"/>
        </button>

        <div className='footer'>
        <h4>Write Notes Copyright 2022 by Nanci Mondragón <a class="gitHubLogo" href="https://github.com/NanciMondragon"
           ><i class="fa-brands fa-github"></i> </a></h4>
        </div>
          
    </div>
  )
  
}

export default Home