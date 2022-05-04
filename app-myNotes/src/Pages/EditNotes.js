import React from "react";
import { BtnBack } from "../Components/Buttons";
import { editNote } from "../firebase-config";
import EditNotesImput from "../Components/EditNotesInput";
import iconNote from "../Assets/icons/apunte.png";
import "./CreateNote.css";

function EditNotes() {
  return (
    <div className="Create_note_container">
      <div className="header_container">
        <img src={iconNote} alt="" className="icon_create_note" />
        <div className="note_colection"> Apuntes </div>
        <BtnBack />
      </div>
      <EditNotesImput addOrEdit={editNote} />
    </div>
  );
}
export default EditNotes;

