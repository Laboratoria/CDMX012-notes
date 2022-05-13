import { useState } from "react";
import "./App.css";
import Paths from "./components/Paths";
import { BrowserRouter } from "react-router-dom";

/* import { Routes, Route } from "react-router-dom";
import Login from "./components/noauthenticate/Login";
import Notes from "./components/Notes"; */
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [isAuthenticate, setAuthenticate] = useState(null)
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthenticate(user);
      //const uid = user.uid;
    } else {
      setAuthenticate(null);
    }
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Paths isAuthenticate={isAuthenticate} />
      </BrowserRouter>
    </div>
  );
}

export default App;

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
