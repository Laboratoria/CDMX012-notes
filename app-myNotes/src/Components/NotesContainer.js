import React, { useEffect, useState } from "react";
import "../Components/styleNotesContainer.css";
import { query, orderBy, onSnapshot } from "firebase/firestore";
import { colRef } from "../firebase-config";
import ModalNote from"../Components/NoteModal"


const NotesContainer = () => {
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
      
      {notes.map((notes) => (
        <div className="printNote_container" key={notes.id} onClick= {ModalNote}>
          <div className="printNote_body"></div>
          <div className="note_tittle">{notes.title}</div>
          <p className="note_text">{notes.note}</p>
          <p className="line"></p>
          <section className="date_container">
            <p className="note_mofifDate" id="modification_date"> 
              {" "}
            </p>
            <p className="note_Date"> Creación: {notes.date}</p>
          </section>
        </div>
      ))}
    </div>
  );
};
export default NotesContainer;
