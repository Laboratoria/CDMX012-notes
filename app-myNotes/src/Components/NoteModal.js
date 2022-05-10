import React from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import "../Components/styleModalNote.css";
import iconBack from "../Assets/icons/flecha.png";
import iconEdit from "../Assets/icons/editar.png";

export default function ModalNote({ currentNote, onClose }) {
  const navigate = useNavigate();

  if (currentNote) {
    function BtnEdit() {
      localStorage.setItem("noteId", currentNote.id);
      // localStorage.setItem("noteTittle", currentNote.title);
      // localStorage.setItem("noteNote", currentNote.note);
      // localStorage.setItem("noteColor", currentNote.color);

      ////////////////////////////////////////enviar props
      navigate("/EditNotes");
    }

    return ReactDOM.createPortal(
      <>
        <div className="modal_Overlay" />
        <div className={`modal_container  ${currentNote.color} `}>
          <img
            src={iconBack}
            alt=""
            className="iconModal_back"
            onClick={onClose}
          />
          <div className="modal_tittle"> {currentNote.title}</div>
          <div className="modal_note"> {currentNote.note}</div>

          <img
            src={iconEdit}
            alt=""
            className="iconModal_edit"
            onClick={BtnEdit}
          />

          <p className="line_modal"></p>
          <section className="date_modal_container">
            <p className="note_mofifDate" id="modification_date">
              {" "}
            </p>
            <p className="note_Date"> {currentNote.create}</p>
          </section>
        </div>
      </>,
      document.getElementById("modal-root")
    );
  }
}
