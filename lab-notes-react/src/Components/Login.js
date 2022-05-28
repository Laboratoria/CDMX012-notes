import { loginGoogle } from './Lib/Auth.js'; 
import '../StyleSheets/Login.css';
import google from './Images/google.png';

function Login () {
    return (
        <div className="notesContainer">
            <header>MyNotes</header>
            <button className="loginButton" onClick={loginGoogle}>
            <img src={google} alt="iconGoogle" className="googleImg" />
                Log in with Google
            </button> 
        </div>
    );
}

    export default Login;