import React, { useEffect, useState } from "react";
import NoteModal from "./NoteModal";
import { Icons } from "../Components/icons";
import "../Components/styleNotesContainer.css";
import { query, orderBy, where, onSnapshot } from "firebase/firestore";
import { colRef } from "../firebase-config";

const ListColection = ({ selectedColection }) => {

  /////setea los valores de las notas a renderizar
  const [currentNote, setCurrentNote] = useState("");
  /////setea los valores de nota a visualizar
  const [notes, setNotes] = useState([]);

  /////consulta en firestore por coleccion
  const getNotes = (newNotes) => {
    try {
      let q = query(
        colRef,
        where("colection", "==", selectedColection, orderBy("date", "desc"))
      );

      onSnapshot(q, (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });

        setNotes(docs);
      });
    } catch (error) {}
  };
  /////observa el cambio en la funcion get note
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <div className="header_colection_container">
      <Icons colection={selectedColection} />
        <div className="note_colection_select"> {selectedColection} </div>
      </div>

      <div className="getNote_colection_container">
        <NoteModal
          onClose={() => setCurrentNote("")}
          currentNote={currentNote}
        />
        {notes.map((note) => (
          <div
            className={`printNote_container  ${note.color} `}
            key={note.id}
            onClick={() => setCurrentNote(note)}
          >
            <section className="header_note_container">
              <div className="note_tittle">{note.title}</div>
              <div className="colection_saved">{note.colection} </div>
            </section>

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
    </>
  );
};
export default ListColection;
