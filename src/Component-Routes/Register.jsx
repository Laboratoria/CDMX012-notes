import logo from '../resource/NoteMe.png';
import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';


function Register() {

const [user, setUser]= useState({
  email:'',
  password:''
});
// te devuelve un objeto
const { signup }= useAuth();
const navigate =  useNavigate();
// eslint-disable-next-line no-unused-vars
const [error, setError] = useState();

// Esta funcion actualiza el estado
const handleChange = ({target: {name, value} })=> {
  setUser({...user, [name]: value})
}

// En esta función se ve lo que tiene el estado 
// Y aqui se encuentra el valor del usuario (su email y contra)
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signup(user.email, user.password);
      console.log('si navego')
    navigate('/');
    } catch (error) {
      console.log('djdfj')
      if (error.code === "auth/invalid-email") {
        setError("Correo inválido");
      }
      if (error.code === "auth/weak-password") {
        setError("La contraseña debería tener al menos 6 caracteres");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("Usuario ya registrado");
      }  
    }

};
// }

  return (
    <div className='App'>

      <img src={ logo } className='App-logo' alt='logo' />
      {error && <p>{error}</p>}
      <h1>Esto es el Register</h1>
      <form onSubmit={ handleSubmit}>
        <label htmlFor='email'>E-mail</label>
        <input
        type='text' 
        name='email' 
        id='email'
        placeholder='YourEmail@hotmail.com'
        onChange={handleChange}/>

        <label htmlFor='password'>Password</label>
        <input 
        type='password' 
        name='password' 
        id='password'
        placeholder='Password'
        onChange={handleChange}/>

        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;