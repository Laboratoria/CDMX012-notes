import React, { useEffect, useState } from "react";
import NoteModal from "../Components/NoteModal"
import "../Components/styleNotesContainer.css";
import { query, orderBy, onSnapshot } from "firebase/firestore";
import { colRef } from "../firebase-config";

const NotesContainer = () => {
  const [currentNote , setCurrentNote] = useState('');
  const [notes, setNotes] = useState([]);

  const getNotes = (newNotes) => {
    try {
      const q = query(colRef, orderBy("date", "desc"));

      onSnapshot(q, (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });

        setNotes(docs);
      });
    } catch (error) {}
  };
  useEffect(() => {
    getNotes();
  }, []);

  return (

    <div className="getNote_container">
      <NoteModal onClose={() => setCurrentNote('')} currentNote={currentNote} />

      {notes.map((note) => (
        <div 
          className="printNote_container" key={note.id}
          onClick={() => setCurrentNote(note) } >

          <div className="printNote_body"></div>
          <div className="note_tittle">{note.title}</div>
          <p className="note_text">{note.note}</p>
          <p className="line"></p>
          <section className="date_container">
            <p className="note_mofifDate" id="modification_date">
              {" "}
            </p>
            <p className="note_Date"> Creación: {note.date}</p>
          </section>
        </div>
      ))}
    </div>
  );
};
export default NotesContainer;
