import React from "react";
import "./styles/ANewNote.css";
import "./styles/Button.css";
import { useState, useEffect } from "react";
import { db, auth } from "../lib/firebaseConfig";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

function ANewNote({ getNotes, currentNote = {} }) {
  const [newTitle, setNewTitle] = useState(currentNote.Title);
  const [newText, setNewText] = useState(currentNote.Text);
  const notesCollectionReference = collection(db, "notesCreated");
  const user = auth.currentUser;
  const date = new Date();

  useEffect(() => {
    console.log("HOLA", currentNote);
    setNewTitle(currentNote.Title);
    setNewText(currentNote.Text);
  }, [currentNote]);

  const createNewNote = async () => {
    if (currentNote.id) {
      const noteRef = doc(db, "notesCreated", currentNote.id);
      await updateDoc(noteRef, {
        uid: user.uid,
        Title: newTitle,
        Text: newText,
        date,
      });
    } else {
      await addDoc(notesCollectionReference, {
        uid: user.uid,
        Title: newTitle,
        Text: newText,
        date,
      });
    } 
    getNotes();
    setNewText("")
    setNewTitle("")
    
  };

  return (
    <>
      <section className="titleCreateANote">
        <h3>Current Note</h3>
      </section>

      <section className="titleAndText">
        <input
          className="noteTitle"
          type="text"
          placeholder="Write a title"
          value={newTitle}
          onChange={(event) => {
            setNewTitle(event.target.value);
          }}
        ></input>
        <input
          className="noteText"
          type="text"
          placeholder="Write your ideas"
          value={newText}
          onChange={(event) => {
            setNewText(event.target.value);
          }}
        ></input>

        <button className="btnCreate" onClick={createNewNote}>
          Save
        </button>

        {/*         <button className="btnSaveEditedNote" onClick={createNewNote}>
          Save
        </button> */}
      </section>
    </>
  );
}

export default ANewNote;
