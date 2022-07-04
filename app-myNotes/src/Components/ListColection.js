import React, { useEffect, useState } from "react";
import NoteModal from "../Components/Helpers.js/NoteModal";
import { Icons } from "./Helpers.js/icons";
import "../Components/styles/styleNotesContainer.css";
import { query, orderBy, where, onSnapshot } from "firebase/firestore";
import { colRef, archiveRef } from "../firebase-config";

//// vlaida la coleccion entrante a consultar / renderizar
function validateColection(typeOfColection) {
  let q = "";
  if (typeOfColection === "Archivado" || typeOfColection === "Papelera") {
    q = query(
      archiveRef,
      where("colection", "==", typeOfColection, orderBy("date", "desc"))
    );
  } else {
    q = query(
      colRef,
      where("colection", "==", typeOfColection, orderBy("date", "desc"))
    );
  }
  return q;
}

const ListColection = ({ selectedColection }) => {
  /////inicializar query
  const q = validateColection(selectedColection);
  /////setea los valores de las notas a renderizar
  const [currentNote, setCurrentNote] = useState("");
  /////setea los valores de nota a visualizar
  const [notes, setNotes] = useState([]);

  /////consulta en firestore por coleccion notas o archivo
  const getColection = (newNotes) => {
    try {
      onSnapshot(q, (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setNotes(docs);
      });
    } catch (error) {}
  };

  /////observa el cambio en la funcion getColection
  useEffect(() => {
    getColection();
  }, []);

  return (
    <>
      <div className="header_colection_container">
        <Icons colection={selectedColection} />
        <div className="note_colection_select"> {selectedColection} </div>
      </div>
      <div className="margin">
        <div className="getNote_container">
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
                <div className="note_title">{note.title}</div>
                <div className="colection_saved">{note.colection} </div>
              </section>

              <div className="note_text"> {note.note} </div>
              <div className="line"></div>
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
      </div>
    </>
  );
};
export default ListColection;
