import React from "react";
import { BtnBack } from "../Components/Buttons";
import { saveNote } from "../firebase-config";
import InputNotes from "../Components/InputNotes";
import iconNote from "../Assets/icons/apunte.png";

import "./CreateNote.css";

function CreateNote() {
  return (
    <div className="Create_note_container">
      <div className="header_container">
        <img src={iconNote} alt="" className="icon_create_note" />
        <div className="note_colection"> Apuntes </div>
        <BtnBack />
      </div>
      <InputNotes addOrEdit={saveNote} />
    </div>
  );
}
export default CreateNote;
