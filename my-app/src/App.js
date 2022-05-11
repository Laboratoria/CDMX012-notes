import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './Routes/Register';
import Home from './Routes/Home';
import CreateNote from './Routes/CreateNote';
import NotesView from './Routes/NotesView';
import DisplaynNote from './Routes/DisplayNote';
import EditNote from './Routes/EditNote';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Register/>}/>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/createNote' element = {<CreateNote/>}/>
      <Route path='/notesView' element = {<NotesView/>}/>
      <Route path='/displayNote' element = {<DisplaynNote/>}/>
      <Route path='/EditNote' element = {<EditNote/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
