import React from 'react'
import buscar  from '../../assets/buscar.png';
import write from '../../assets/write.jpeg'
import { auth, provider } from '../../lib/firebase';
import { loginWithGoogle } from '../../lib/firebaseAuth';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  const loginGoogle = () =>{
    loginWithGoogle(auth, provider);
    navigate("/timeline");
  }

    return (
    
    <div>
        <div className='container'>
          <img id='note' src = { write } alt="Note" />
        </div>

        <button className='btnGoogle' onClick= { loginGoogle } > LOGIN WITH GOOGLE
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