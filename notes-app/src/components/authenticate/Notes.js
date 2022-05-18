import React, { useState, useEffect } from "react";
/* Styles */
import "../styles/Notes.css";
import "../styles/Button.css";
/* Icons */
import { FiLogOut } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";
import { BiPlus } from "react-icons/bi";
/* Firebase, firestore */
import { db } from "../../lib/firebaseConfig";
import { collection,  getDocs } from "firebase/firestore";

// Main container
function Notes({ logOut }) {

/* Configuración de hook useState */
  const[theNotes, setTheNotes] = useState([]);
  /* Referencia a la colección db de Firestore: notesCreated */
  const notesCollectionReference = collection(db, "notesCreated")
  useEffect(()=>{
    const getNotes =async () => {
      const notesDataFireBase = await getDocs(notesCollectionReference);
    console.log(notesDataFireBase);
    };
    getNotes();
  }, []);

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

        <nav className="navBar">
          <img
            className="smallRosettaLogo"
            src="https://i.imgur.com/pS4YttT.png"
            alt="rosetta Logo"
          ></img>
          <button
            className="btnLogout"
            onClick={() => {
              logOut();
            }}
          >
            <FiLogOut /> Salir
          </button>
        </nav>
{/* Two sections */}

        <section className="twoSectionsContainer">
          <button className="btnAddNote" ><BiPlus /></button>

          {/* Left side */}


  
    <div>NotesList</div>


  

          <section className="leftSide">
            <section>
              <h1>
                <u>My Notes</u>
                
              </h1>
            </section>

          </section>

          {/* Right side */}
          <section className="rightSide">
            <section>
              <h1>
                <u>My Notes</u>
              </h1>
            </section>
            
            <form>
            <button className="BtnTrash" ><BsFillTrashFill /></button>
            <button className="BtnEdit" ><TiEdit /></button>

            <input
              className="newNoteTitle"
              type="text"
              placeholder="Write a title "
            ></input>
            <input
              className="newNoteText"
              type="text"
              placeholder="Write your note here"
            ></input>
            </form>

          </section>
        </section>
      </div>
    </>
  );
}

export default Notes;

//BOTÓN DE LOGOUT QUE FUNCIONA

/* function Notes({ logOut }) {
  return (
    <>
        <section>
          <img
            className="backgroundImage"
            src="https://i.imgur.com/N9pCgiX.jpg?1"
            alt="bokeh background"
          ></img>
        </section>
        <nav className="navBar">
          <img
            className="smallRosettaLogo"
            src="https://i.imgur.com/pS4YttT.png"
            alt="rosetta Logo"
          ></img>
          <button
            className="btnLogout"
            onClick={() => {
              logOut();
            }}
          >
            <FiLogOut /> Salir
          </button>
        </nav>

        <section className="mainContainerNotes">
          <section className="leftSide"></section>
          <section className="rightSide"></section>
        </section>
    </>
  );
} */

/* function Notes({ logOut }) {
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
        <nav className="navBar">
          <img
            className="smallRosettaLogo"
            src="https://i.imgur.com/pS4YttT.png"
            alt="rosetta Logo"
          ></img>
          <button
            className="btnLogout"
            onClick={() => {
              logOut();
            }}
          >
            <FiLogOut /> Salir
          </button>
        </nav>

        <section className="mainContainerNotes">
          <section className="leftSide"></section>
          <section className="rightSide"></section>
        </section>
      </div>
    </>
  );
}  */



