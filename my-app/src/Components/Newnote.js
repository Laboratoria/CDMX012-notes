import React from "react";

// import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Textarea } from "./styles";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { authentication, db } from "../lib/firebaseConfig";
import { useState } from "react";

const NewNote = () => {
  const [notes, setNotes] = useState("");
  const [descripcion, setDescription] = useState("");

  const collectionNotes = collection(db, "notes");
  const notesData = async (e) => {
    e.preventDefault();
    await addDoc(collectionNotes, {
      titulo: notes,
      descripcion: descripcion,
      date: serverTimestamp(),
      email: authentication.currentUser.email,
    });
  };

  return (
    <div>
      <Form onSubmit={notesData}>
        <div>
          <Input
            type="text"
            placeholder="Nombre de tú nota"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></Input>
          <Textarea
            placeholder="Escribe tú nota"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></Textarea>
        </div>

        <Button onClick={notesData} placeholder={"Escribe tu nota"}>
          Guardar
        </Button>
      </Form>
    </div>
  );
};

export default NewNote;
