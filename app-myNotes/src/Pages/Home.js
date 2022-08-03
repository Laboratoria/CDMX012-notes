import React, { useState } from "react";
import { auth } from "../firebase-config";
import { DateDay } from "../Components/Helpers.js/Date";
import "./Home.css";
import NotesContainer from "../Components/NotesContainer";
import Colections from "../Components/Colections";
import { BtnLogOut, BtnAddNote, BackToTop } from "../Components/Helpers.js/Buttons";
import logoN from "../Assets/logo/LogoN.png";
import iconSearch from "../Assets/icons/lupa.png";
import iconNote from "../Assets/icons/nota-adhesiva.png";
import iconColections from "../Assets/icons/colecciones.png";

function HomePage() {
  const user = auth.currentUser;
  const name = user?.displayName.split(" ")[0];
  const UserImage = user?.photoURL;
  const [handleColection, setHandleColection] = useState("allNotes");

  // crea una flag para saber si esta en menu o lista de colecciones
  const [flag, setFlag] = useState(true);
  // hace set a false para comunicar el componente con el padre
  const setFlagFalse = () => {
    setFlag(false);
  };
  // convierte a true el flag para saber que esta en menu
  const setFlagTrue = () => {
    setFlag(true);
  };
  // hace la redireccion en el boton colecciones
  const redirectNav = () => {
    setFlagTrue();
    setHandleColection("menuColections");
  };

  return (
    <>
      <header className="header">

        <section className="header_content">

          <img src={logoN} alt="Logo" className="logo_n" />

          <div className="info_container">
            <div className="user_name"> ¡Hola {name}! </div>
            <div className="current_date"> {DateDay} </div>
          </div>

          <img src={UserImage} alt="" className="user_img" />

        </section>

        <div className="input_search">
          <input type="text" search="text" placeholder="Buscar nota" />
          <img src={iconSearch} alt="" className="search_icon" />
        </div>

      </header>

      <nav className="nav_menu">
        <div

          className="all_notes_cont"
          onClick={() => setHandleColection("allNotes")}
        >

          <img src={iconNote} alt="" className="icon_notes" />
          { handleColection === "allNotes" ?
            <div className="all_notes">Todas las notas </div>
            :<div className="all_notes_inactive">Todas las notas </div>
          }
        </div>

        <div className="colections_cont" onClick={() => redirectNav()}>
          <img src={iconColections} alt="" className="icon_notes" />
          { handleColection === "menuColections" ?
            <div className="colections">Colecciones</div>
            :<div className="colections_inactive">Colecciones </div>
          }

        </div>
      </nav>

      <main className="notes_section">
        {handleColection ===  "allNotes" ? <NotesContainer /> : < Colections setFlagFalse={setFlagFalse} flag={flag}/>}
      </main>

      <div className="footer_menu">
        <BackToTop />
        <BtnAddNote />
        <BtnLogOut />
      </div>
    </>
  );
}
export default HomePage;
