import React from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import "../styles/styleModalNote.css";
import iconBack from "../../Assets/icons/flecha-izquierda.png"
import iconEdit from "../../Assets/icons/editar.png";

export default function ModalNote({ currentNote, onClose }) {
  const navigate = useNavigate();
  /////envia el id de la nota a editar a la vista de editado mediante localStorage y redirige
  if (currentNote) {
    function BtnEdit() {
      localStorage.setItem("noteId", currentNote.id);
      localStorage.setItem("bgColor", currentNote.color);
      navigate("/CreateNote");
    }
    /////crea el Dom con info de la nota a renderizar
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
            {currentNote.modif}
            </p>
            <p className="note_Date"> {currentNote.create}</p>
          </section>
        </div>
      </>,
      document.getElementById("modal-root")
    );
  }
}
