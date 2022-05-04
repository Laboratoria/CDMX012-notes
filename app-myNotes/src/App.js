
import React from "react";
import { Route, Routes } from 'react-router-dom';
import {useAuth} from './firebase-config'
import LogInPage from './Pages/LogIn'
import HomePage from './Pages/Home'
import CreateNote from './Pages/CreateNote'
import EditNotes from './Pages/EditNotes'

function App() {
  useAuth();

  return (
    <div>
    <Routes>
      <Route exact path='/' element={<LogInPage />} />
      <Route exact path='/Home' element={<HomePage />} />
      <Route exact path='/CreateNote' element={<CreateNote/>} />
      <Route exact path='/EditNotes' element={<EditNotes/>} />
    </Routes>
  </div>
);
}

export default App;

/* <Route path="/registro" element={<RegisterPage/>}/>
<Route path="/notas" element={<NotesPage/>}/>
<Route path="*" element={<NotFoundPage/>}/> */