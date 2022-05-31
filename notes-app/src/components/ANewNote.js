import React from "react";
import "./styles/ANewNote.css";
import "./styles/Button.css";
import { useState, useEffect } from "react";
import { db, auth } from "../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function ANewNote({getNotes, currentNote={}}) {
  const [newTitle, setNewTitle] = useState(currentNote.title);
  const [newText, setNewText] = useState(currentNote.text);
  const notesCollectionReference = collection(db, "notesCreated");
  const user = auth.currentUser;
  const date = new Date();

  useEffect( ()=>{
    console.log("HOLA", currentNote)
    setNewTitle(currentNote.title);
    setNewText(currentNote.text);
  },[currentNote]);

  const createNewNote = async () => {
    await addDoc(notesCollectionReference, { 
      uid: user.uid,
      Title: newTitle, 
      Text: newText,
      date, 

    });
    getNotes();
  };

  return (
    <>
      <section className="titleCreateANote">
        <h3>Create a note</h3>
      </section>

      <section className="titleAndText">
      {newTitle}
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
          Create
        </button>
        
      </section>
    </>
  );
}

export default ANewNote;
