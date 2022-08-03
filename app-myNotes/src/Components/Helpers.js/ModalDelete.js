import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import "../styles/StyleHelpersModals.css";
import iconDelete from "../../Assets/icons/eliminar.png";
import iconArchive from "../../Assets/icons/archivar.png";
import iconflecha from "../../Assets/icons//flecha-izquierda.png";

export default function ModalDelete({ openModal, setOpenModal, deletedNote, moveToTrash, note}) {
  let Id = localStorage.getItem("noteId");
  const navigate = useNavigate();

  // boton borrar con funcion deletedNote
  const handleDelete = (e) => {
    console.log(Id);
    deletedNote(Id);
    setOpenModal(null);
    navigate("/Home");
  };

    // boton guardar en coleccion archivo con funcion saveArchive
    const handleEditArchive = (e) => {
      e.preventDefault();
      moveToTrash(note, Id, );
      setOpenModal(null);
      navigate("/Home");
    };

  if (openModal === "delete") {
    return ReactDOM.createPortal(
      <>
        <div className="modal_Overlay" />
        <section className="modal_helper_container">
          <div
            className="option"
            onClick={handleDelete}
          >
            <img src={iconDelete} alt="" className="icon_modal_colection" />
            <div className="coletion_selected">Eliminar</div>
          </div>

          <div
            className="option"
            onClick={handleEditArchive}
          >
            <img src={iconArchive} alt="" className="icon_modal_colection" />
            <div className="coletion_selected">Mover a papelera</div>
          </div>

          <div
            className="option"
            onClick={() => setOpenModal(null)}
          >
            <img src={iconflecha} alt="" className="icon_modal_colection" />
            <div className="coletion_selected">Cancelar</div>
          </div>
          
        </section>
      </>,
      document.getElementById("modal-root")
    );
  }
}
