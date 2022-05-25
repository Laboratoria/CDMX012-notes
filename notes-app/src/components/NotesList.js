import React from "react";
import { useParams } from 'react-router-dom'; 

import "./styles/NotesList.css";
import { AiFillPushpin } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import { useState, useEffect } from "react";
import { db } from "../lib/firebaseConfig";
import { collection, deleteDoc, doc, getDocs, getDoc, orderBy, query } from "firebase/firestore";


function NotesList({theNotes}) {

/*   const [theNotes, setNotes] = useState([]);
  const notesCollectionReference = collection(db, "notesCreated");

  useEffect(() => {

    const getNotes = async () => {
      const q = query(notesCollectionReference, orderBy("date", "desc"));
    
      const data = await getDocs(q, {includeMetadataChanges:true});

      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getNotes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  /* Editar nota */
  const thisNote = {
    title: '',
    text: '',
  }


  const [noteID, setNoteID] = useState(thisNote);
  const {id} = useParams();

  const getNoteIdHandler = async (id) => {
    /* console.log(`I want ID of document to be edited: =${id}`); */

    try {
      console.log(id);
      const docRef = doc(db, "notesCreated", id);
const docSnap = await getDoc(docRef);
console.log(docSnap.data());
  
    } catch (e) {
      console.log(e);
    }
       
    setNoteID(id);}

  /* Borrar nota */

  const deleteNote = async (id) => {
    const noteDoc = doc(db, "notesCreated", id);
    await deleteDoc(noteDoc);
          console.log(`Que es noteDoc=${noteDoc}`);
    

  };

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
              <h4 className="titleOfNote">
                <AiFillPushpin /> {note.Title}{" "}
                <button
                  onClick={() => {
                    deleteNote(note.id);
                  }}
                  className="btnDelete"
                >
                  <BsFillTrashFill />
                </button>{" "}
              </h4>
              <h4 className="textOfNote"> {note.Text}</h4>
              <button className="btnEdit" onClick= {() => {getNoteIdHandler(note.id)} } >
                <TiPencil />
              </button>
            </section>
          );
        })}
      </section>
    </div>
  );
}

export default NotesList;



