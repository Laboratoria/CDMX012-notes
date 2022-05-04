import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { authentication } from './firebase-config';
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Header } from './components/Header';
import { WriteNote } from './components/WriteNote';

const provider = new GoogleAuthProvider();
const signInGoogle  = ()=>(
  signInWithPopup(authentication, provider)
  .then((re)=>{
    console.log(re);
  })
  .catch((err)=>{
    console.log(err);
  })
  
)
const Login = () => (
  
  <div>
    <h1>Crea notas fácil y rápido</h1>
    <button className='google' onClick={signInGoogle}>Iniciar con google</button>
    <Link to="/bienvenida">Google</Link>
  </div>
)
const Bienvenida = () => (
  <div>
    <Header/>
    <WriteNote/>
    <Link to="/">Inicio</Link>
  </div>
)

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/bienvenida' element={<Bienvenida />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
