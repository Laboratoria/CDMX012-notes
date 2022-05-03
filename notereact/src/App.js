import './App.css';
import {Register} from './components/Register';
import {Header} from './components/Header';
import React from 'react';
import { WriteNote } from './components/WriteNote';
import { NewNote } from './components/NewNote';

function App () {
  return (
    <React.Fragment>
      <Register/>
      <Header/>
      <WriteNote/>
      <NewNote/>

    </React.Fragment>

   
  );
}

export default App;
