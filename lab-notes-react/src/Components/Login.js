import { auth } from './Firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function Login () {

    const loginGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((re)=>{
            console.log(re);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
            <h1>MyNotes</h1>
            <button className="loginButton" onClick={loginGoogle}>Empezar con Google
            </button> 
        </div>
    )}

    export default Login;