import React from "react";
import { useParams } from "react-router-dom";

import "./styles/NotesList.css";
import { AiFillPushpin } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import { useState } from "react";
import { db } from "../lib/firebaseConfig";
import { deleteDoc, doc, getDoc } from "firebase/firestore";


function NotesList({ theNotes, edit }) {
  /* Editar nota */
  const thisNote = {
    title: "",
    text: "",
  };
  const [noteID, setNoteID] = useState(thisNote);
  const { id } = useParams();

  const getNoteIdHandler = async (note) => {

    try {
      edit(note);
      const docRef = doc(db, "notesCreated", note.id);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
    } catch (e) {
      console.log(e);
    }

    setNoteID(note.id);
  };

  /* Borrar nota */

  const deleteNote = async (id) => {
    const noteDoc = doc(db, "notesCreated", id);
    if (window.confirm ("Confirm if you want to delete the note")) {
    await deleteDoc(noteDoc);
    }
  };

  return (
    <div>
      <section className="titleNotesList">
        <h3>My Notes</h3>
      </section>

      <section className="listOfNotes">
        {theNotes.map((note) => {

          return (
            <section className="listElement" key={note.id}>
              {" "}
              <h4 className="titleOfNote">
                <AiFillPushpin /> {note.Title}{" "}
                <button
                  onClick={() => {
                    deleteNote(note.id);
                  }}
                  className="btnDelete"
                >
                  <BsFillTrashFill />
                </button>{" "}
              </h4>
              <h4 className="textOfNote"> {note.Text}</h4>
              
              <section className="editBtnSection">
              <button
                className="btnEdit"
                onClick={() => {
                  getNoteIdHandler(note);
                }}
              >
                <TiPencil />
              </button>
              </section>


            </section>
          );
        })}
      </section>
    </div>
  );
}

export default NotesList;
