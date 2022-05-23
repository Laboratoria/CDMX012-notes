import React from "react";
/* Components */
import NavBar from "../NavBar";
import NotesList from "../NotesList";
import BtnAddNote from "../BtnAddNote";
import ANewNote from "../ANewNote";

/* Styles */
import "../styles/Notes.css";
import "../styles/Button.css";
/* Icons */
import { BsFillTrashFill } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";

function Notes() {
  return (
    <>
      <div className="mainContainerNotes">
        <section>
          <img
            className="backgroundImage"
            src="https://i.imgur.com/N9pCgiX.jpg?1"
            alt="bokeh background"
          ></img>
        </section>
        <NavBar />
        {/* Two sections */}

        <section className="twoSectionsContainer">
          <BtnAddNote />

          {/* Left side */}

          <section className="leftSide">
            <NotesList />
          </section>

          {/* Right side */}
          <section className="rightSide">
          <ANewNote />

{/*             <form>
              <section className="buttonsContainer">
                <button className="BtnTrash">
                  <BsFillTrashFill />
                </button>
                <button className="BtnEdit">
                  <TiEdit />
                </button>
              </section>


            </form> */}
          </section>
        </section>
      </div>
    </>
  );
}

export default Notes;
