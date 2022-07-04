import React, { useEffect, useState } from "react";
import NoteModal from "../Components/Helpers.js/NoteModal";
import "../Components/styles/styleNotesContainer.css";
import { query, orderBy, onSnapshot } from "firebase/firestore";
import { colRef } from "../firebase-config";

const NotesContainer = () => {
  const [currentNote, setCurrentNote] = useState("");
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
      <NoteModal onClose={() => setCurrentNote("")} currentNote={currentNote}/>
      {notes.map((note) => (
        <div
          className={`printNote_container  ${note.color} `}
          key={note.id}
          onClick={() => setCurrentNote(note)}
        >
          <section className="header_note_container">
            <div className="note_title">{note.title}
            <p></p>
            </div>
            <div className="colection_saved">{note.colection} </div>
          </section>

          <div className="note_text"> {note.note} </div>

          <div className="line"></div>

          <section className="date_container">
            <p className="note_mofifDate" id="modification_date">{note.modif}</p>
            <p className="note_Date"> {note.create}</p>
          </section>
        </div>
      ))}
    </div>
  );
};
export default NotesContainer;
