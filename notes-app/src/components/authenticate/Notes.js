import React from "react";
import "../styles/Notes.css";

//import { logout } from "../../lib/firebaseAuth";
//import Button from "./Button";

function Notes({ logOut }) {
  return (
    <div className="mainContainerNotes">
      <nav>
        <img
          className="bigRosettaLogo"
          src="https://i.imgur.com/pS4YttT.png"
          alt="rosetta Logo"
        ></img>
        <button
          onClick={() => {
            logOut();
          }}
        >
          Salir
        </button>
      </nav>
      <section className="mainContainerNotes">
        <section className="leftSide"></section>
        <section className="rightSide"></section>
      </section>

      <img
        className="backgroundImage"
        src="https://i.imgur.com/N9pCgiX.jpg?1"
        alt="bokeh background"
      ></img>
    </div>
  );
}

export default Notes;
