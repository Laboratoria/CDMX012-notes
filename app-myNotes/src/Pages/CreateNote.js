import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, saveNote } from "../firebase-config";
import InputNotes from "../Components/InputNotes";
import iconNote from "../Assets/icons/apunte.png";
import iconBack from "../Assets/icons/flecha.png";
import "./CreateNote.css";

function CreateNote() {
  useAuth();
  const navigate = useNavigate();

  const BtnBack = () => {
    navigate("/Home");
  };

  return (
    <div className="Create_note_container">
      <div className="header_container">
        <img src={iconNote} alt="" className="icon_create_note" />
        <div className="note_colection"> Apuntes </div>
        <img src={iconBack} alt="" className="icon_back" onClick={BtnBack} />
      </div>

      <InputNotes addOrEdit={saveNote} />
    </div>
  );
}
export default CreateNote;
