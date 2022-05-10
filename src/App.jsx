import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Component-Routes/Login/Login'
import MakeNote from './Component-Routes/MakeNote/MakeNote';
import Feed from '../src/Component-Routes/Feed/Feed';
import Register from './Component-Routes/Register';
import Page404 from './Component-Routes/Page404/Page404';

import { onAuthStateChanged } from "firebase/auth";

import {auth, exit} from './firebase-store/firebase-auth'


function App() {
  // Este es el objeto de donde sacamos el estado actual y el nuevo 
  // is Autenticate es igual a null y setAutenticate es con lo que modificaremos 
  // Esto es destructuración 
  const [isAutenticate, setAutenticate] = useState(null)
  // Se condiciona que si escucha un usuario mangenda el estado en true mandandole el usuario
  // Si está en false se pone el usuario en null
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAutenticate(user)
    } else {
      setAutenticate(null)
    }
  });
  // Con el condicionador ternario, se bloquea o se le permiten las paginas al usuario dependiendo su estado
  return (
    <BrowserRouter>
    {isAutenticate?<Routes>
        <Route path='/' element={<Feed handleExit={exit} UserInfo={ isAutenticate}/>} />
        <Route path='/feed' element={<Feed handleExit={exit} UserInfo ={ isAutenticate} />} />
        <Route path='/MakeNote' element={<MakeNote  handleExit={exit} UserInfo={ isAutenticate}/>} />
      </Routes>
    : <Routes>
        <Route path='/' element={<Login />} /> 
        <Route path='*' element={<Page404 />} />
        <Route path='/Register' element={<Register />} />
    </Routes>}
    </BrowserRouter>
  );
}

export default App;