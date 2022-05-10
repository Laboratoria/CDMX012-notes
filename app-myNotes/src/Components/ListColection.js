import React, { useEffect, useState } from "react";
import NoteModal from "./NoteModal";
import "../Components/styleNotesContainer.css";
import { query, orderBy, where, onSnapshot } from "firebase/firestore";
import { colRef } from "../firebase-config";
import iconNote from "../Assets/icons/apunte.png";

const ListColection = ({ selectedColection }) => {
  const [currentNote, setCurrentNote] = useState("");
  const [notes, setNotes] = useState([]);

  const getNotes = (newNotes) => {
    try {
      console.log(selectedColection);
      let q = query(colRef);

      q = q.where("colection", "==", {selectedColection});

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
      <div className="header_container">
        <img src={iconNote} alt="" className="icon_create_note" />
        <div className="note_colection"> {selectedColection} </div>
      </div>

      <NoteModal onClose={() => setCurrentNote("")} currentNote={currentNote} />
      {notes.map((note) => (
        <div
          className={`printNote_container  ${note.color} `}
          key={note.id}
          onClick={() => setCurrentNote(note)}
        >
          <div className="note_tittle">{note.title}</div>
          <p className="note_text"> {note.note} </p>
          <p className="line"></p>
          <section className="date_container">
            <p className="note_mofifDate" id="modification_date">
              {" "}
              {note.modif}{" "}
            </p>
            <p className="note_Date"> {note.create}</p>
          </section>
        </div>
      ))}
    </div>
  );
};
export default ListColection;
