import React from "react";
import "./styles/NotesList.css";
import { AiFillPushpin } from "react-icons/ai";
import { useState, useEffect } from "react";
import { db } from "../lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function NotesList() {
  /* ESTADO LLAMADO theNotes LISTA DE USUARIOS QUE CONTENDRÁ
    LA LISTA DE NOTAS 
    Configuración de hook useState */
  const [theNotes, setNotes] = useState([]);
  /* Referencia a la colección db de Firestore: notesCreated */
  const notesCollectionReference = collection(db, "notesCreated");
  /* CARGAR LA LISTA DE NOTAS CREADAS.
USE EFFECT ES UNA FUNCIÓN QUE SE LLAMARÁ CUANDO LA PAG SE 
RENDERICE*/
  useEffect(() => {
    /* CREAR FUNCIÓN ASINCRONA, AL HACER UNA CONSULTA SIEMPRE
    REGRESA UNA PROMESA. USE EFFECT NO SE HACE ASINCRONA, SOLO LA 
    FUNCIÓN QUE ESTÁ DENTRO.   */
    const getNotes = async () => {
      /* TRAER DOCUMENTOS DE LA COLECCION  */
      const data = await getDocs(notesCollectionReference);
      /* console.log(`Docs de notesCreated=${data}`); */
      /* MANEJAR DATA
        ESTABLECER el estado de setNotes para igualarlo al array de
        notas de la coleccion.
        ...doc.data son los datos contenidos en el doc pero sin ID.
        ... es spreading operator en JS */
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getNotes();
  }, []);

  return (
    <div>
      <section className="titleNotesList">
        <h3>My Notes</h3>
      </section>

      <section className="listOfNotes">
        {theNotes.map((note) => {
        /* console.log(`Título=${theNotes.map}`); */

          return (
          <section className="listElement">
              {" "}
              <h4><AiFillPushpin /> Title: {note.title} </h4>

          </section>);
        })}
      </section>
    </div>
  );
}

export default NotesList;
