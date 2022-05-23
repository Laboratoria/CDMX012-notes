import React from "react";
/* ICONS */
import { FiLogOut } from "react-icons/fi";
/* STYLES */
import "./styles/Button.css";
import "./styles/NavBar.css";

import { logOut } from "../lib/firebaseAuth.js";
/* import Greeting from "./Greeting"; */

function NavBar() {
  return (
    <>
      <nav className="navBarContent">
        {/* LOGO ROSETTA */}
        <img
          className="smallRosettaLogo"
          src="https://i.imgur.com/pS4YttT.png"
          alt="Rosetta Logo"
        ></img>

        {/* Saludo y foto de usuario */}

        {/* BUTTON LOGOUT */}
        <button
          className="btnLogout"
          onClick={() => {
            logOut();
          }}
        >
          <FiLogOut /> Salir
        </button>
      </nav>
    </>
  );
}

export default NavBar;
