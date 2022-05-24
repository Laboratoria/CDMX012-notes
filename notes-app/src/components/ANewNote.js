import React from "react";
import "./styles/ANewNote.css";
import "./styles/Button.css";
import { useState } from "react";
import { db } from "../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function ANewNote() {
  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");
  const notesCollectionReference = collection(db, "notesCreated");

  const createNewNote = async () => {
    await addDoc(notesCollectionReference, { Title: newTitle, Text: newText });
  };

  return (
    <>
      <section className="titleCreateANote">
        <h3>Create a note</h3>
      </section>

      <section className="titleAndText">
        {/*       <img
            className="noteBackground"
            src="https://i.imgur.com/hrDyHDA.png"
            alt="note background"
          ></img> */}
        <input
          className="noteTitle"
          type="text"
          placeholder="Write a title"
          onChange={(event) => {
            setNewTitle(event.target.value);
          }}
        ></input>
        <input
          className="noteText"
          type="text"
          placeholder="Write your ideas"
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
