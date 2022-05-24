import React from "react";
/* Components */
import NavBar from "../NavBar";
import NotesList from "../NotesList";
import ANewNote from "../ANewNote";



/* Styles */
import "../styles/Notes.css";
/* Icons */

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

          {/* Left side */}

          <section className="leftSide">
            <NotesList />
          </section>

          {/* Right side */}
          <section className="rightSide">
          <ANewNote />


          </section>
        </section>
      </div>
    </>
  );
}

export default Notes;
