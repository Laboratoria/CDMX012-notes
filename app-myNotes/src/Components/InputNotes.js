import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalTypeColection from "../Components/Helpers.js/ModalTypeColection";
import ModalDelete from "../Components/Helpers.js/ModalDelete";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { getDates, DateHour, DateDay } from "./Helpers.js/Date";
import "../Components/styles/styleImput.css";
import "../Components/styles/styleActionNotes.css";
import { BtnBack } from "../Components/Helpers.js/Buttons";
import { Icons } from "./Helpers.js/icons";
import iconSave from "../Assets/icons/guardar.png";
import iconColection from "../Assets/icons/nota-adhesiva.png";
import iconDeleteGray from "../Assets/icons/eliminarGray.png";
import iconDelete from "../Assets/icons/eliminar.png";
import iconArchive from "../Assets/icons/archivar.png";

const InputNotes = (props) => {
  let Id = localStorage.getItem("noteId");
  let BgColor = localStorage.getItem("bgColor");
  const navigate = useNavigate();
  ///// valores iniciales de la nota en blanco
  const initialValues = {
    title: "Titulo",
    note: "Nota",
    date: getDates,
    create: "Creación: " + DateHour,
    color: "gray",
    colection: "Apuntes",
  };

  /////setea el primer renderizado// ve si es nota nueva o a editar
  const [toCreateNewNote, setToCreateNewNote] = useState(true);
  /////flag para abrir modal de select colection
  const [openModal, setOpenModal] = useState(null);
  /////setea los valores a guardar
  const [note, setNote] = useState(initialValues);
  /////setea los valores de coleccion a guardar
  const [colection, setColection] = useState("Apuntes");
  /////set del color de la nota
  const [themeColor, setThemeColor] = useState();

  /////inputs valores a crear o editar
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  // boton guardar con funcion saveNotes
  const handleNewSubmit = (e) => {
    e.preventDefault();
    props.saveNote(note);
    navigate("/Home");
  };

  // boton editar con funcion editNote
  const handleEditSubmit = (e) => {
    e.preventDefault();
    props.toEditNote(note, Id);
    navigate("/Home");
  };

  // boton guardar en coleccion archivo con funcion saveArchive
  const handleArchive = (e) => {
    e.preventDefault();
    props.saveArchive(note);
    navigate("/Home");
  };

  // boton guardar en coleccion archivo con funcion saveArchive
  const handleEditArchive = (e) => {
    e.preventDefault();
    props.editArchive(note, Id);
    navigate("/Home");
  };

  //botones colores
  const handleChangeColor = (color) => {
    setThemeColor(color);
    setNote({ ...note, color: color });
  };

  // consulta en firestore la nota a editar
  const getNoteToEdit = async () => {
    setToCreateNewNote(true);

    if (Id) {
      const snap = await getDoc(doc(db, "notes", Id));
      let data = snap.data();
      setNote(data);
      setToCreateNewNote(false);
      setThemeColor(BgColor);
    }
  };
  /////observa el cambio en la funcion get note
  useEffect(() => {
    getNoteToEdit();
  }, []);

  //Renderizado condicional si se va a crear o editar una nota
  return (
    <div className="input_container ">
      {openModal === "colections" && (
        <ModalTypeColection
          openModal={openModal}
          setOpenModal={setOpenModal}
          setColection={setColection}
          note={note}
          setNote={setNote}
        />
      )}

      {openModal === "delete" && (
        <ModalDelete
          openModal={openModal}
          setOpenModal={setOpenModal}
          deletedNote={props.deletedNote}
          moveToTrash={props.moveToTrash}
          note={note}
        />
      )}

      <div className={`background_notes ${themeColor}`} />

      <div className="header_container">
        <Icons colection={colection} />

        <div className="note_colection"> {colection} </div>
        <BtnBack />
      </div>

      {note && (
      <form className="input_section">
        <div className="tittle">
          {toCreateNewNote === true ? (
            <input
              className="input_tittle"
              name="title"
              placeholder="Título"
              onChange={handleInputChange}
            />
          ) : (
            <input
              className="input_tittle"
              name="title"
              value={note.title}
              placeholder="Título"
              onChange={handleInputChange}
            />
          )}
        </div>

        <div className="text_note">
          {toCreateNewNote === true ? (
            <textarea
              type="text"
              name="note"
              placeholder="Nota"
              onChange={handleInputChange}
            />
          ) : (
            <textarea
              type="text"
              name="note"
              value={note.note}
              onChange={handleInputChange}
            />
          )}
        </div>
      </form>
    )}
    
      <div className="current_note_date"> {DateDay} </div>

      <section className="action_content">
        <div className="note_colors">
          <div className="text_colors"> Color de la nota </div>

          <section className="color_notes">
            <div
              id="color"
              className="gray"
              onClick={() => handleChangeColor("gray")}
            ></div>
            <div
              id="color"
              className="Maldives"
              onClick={() => handleChangeColor("Maldives")}
            ></div>
            <div
              id="color"
              className="Purpink"
              onClick={() => handleChangeColor("Purpink")}
            ></div>
            <div
              id="color"
              className="Neonlife"
              onClick={() => handleChangeColor("Neonlife")}
            ></div>
            <div
              id="color"
              className="Neuromancer"
              onClick={() => handleChangeColor("Neuromancer")}
            ></div>
          </section>
        </div>

        <section className="btns_content">
          <div className="btn_actions">
            <img src={iconSave} alt="" className="note_icon" />

            {toCreateNewNote === true ? (
              <button className="btn_action" onClick={handleNewSubmit}>
                {" "}
                Guardar{" "}
              </button>
            ) : (
              <button className="btn_action" onClick={handleEditSubmit}>
                {" "}
                Guardar cambios{" "}
              </button>
            )}
          </div>

          <div className="btn_actions">
            <img src={iconColection} alt="" className="note_icon" />
            <button
              className="btn_action"
              onClick={() => setOpenModal("colections")}
            >
              {" "}
              Agregar a colección{" "}
            </button>
          </div>

          <div className="btn_actions">
            <img src={iconArchive} alt="" className="note_icon" />

            {toCreateNewNote === true ? (
              <button className="btn_action" onClick={handleArchive}>
                Archivar
              </button>
            ) : (
              <button className="btn_action" onClick={handleEditArchive}>
                Archivar
              </button>
            )}
          </div>

          {toCreateNewNote === true ? (
            <div className="btn_action_delete">
              <img src={iconDeleteGray} alt="" className="note_icon" />
              <button className="btn_actionDelete"> Eliminar </button>
            </div>
          ) : (
            <div className="btn_actions">
              <img src={iconDelete} alt="" className="note_icon" />
              <button
                className="btn_action"
                onClick={() => setOpenModal("delete")}
              >
                {" "}
                Eliminar
              </button>
            </div>
          )}
        </section>
      </section>
    </div>
  );
};
export default InputNotes;
