/* eslint-disable react/prop-types */
import './Login.css';
import logo from '../../resource/NoteMe.png'
import google from '../../resource/google.png';
import { LoginGoogle } from '../../firebase-store/firebase-auth';

function Login() {

  return (
    <>
    <div className='loginContainer'>
      <img src={logo} className='NoteLogo' alt='logo' />
      <button className='buttonsStylesLogin' onClick={ ()=>{ LoginGoogle()} }>
        Login with
        <img src={google} className='Google-logo' alt='google' />
      </button>
      <br/>
    </div>
    </>
  );
}

export default Login;