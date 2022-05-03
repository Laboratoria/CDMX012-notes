import React from "react";
import { auth } from "../firebase-config";
import { DateDay } from "../Components/Date";
import "./Home.css";
import NotesContainer from "../Components/NotesContainer";
import { BtnLogOut, BtnAddNote, BackToTop } from "../Components/Buttons";
import logoN from "../Assets/logo/LogoN.png";
import iconSearch from "../Assets/icons/lupa.png";
import iconNote from "../Assets/icons/nota-adhesiva.png";
import iconColections from "../Assets/icons/colecciones.png";

function HomePage() {
  const user = auth.currentUser;
  const name = user?.displayName.split(" ")[0];
  const UserImage = user?.photoURL;

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
        <section className="all_notes_cont">
          <img src={iconNote} alt="" className="icon_notes" />
          <div className="all_notes">Todas las notas </div>
        </section>

        <section className="colections_cont">
          <img src={iconColections} alt="" className="icon_notes" />
          <div className="colections">Colecciones</div>
        </section>
      </nav>

      <main className="notes_section">
        <NotesContainer />
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
