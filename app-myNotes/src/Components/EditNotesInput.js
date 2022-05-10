import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { getDates, DateHour, DateDay } from "./Date";
import "./styleImput.css";
import "./styleActionNotes.css";
import iconSave from "../Assets/icons/guardar.png";
import iconAdd from "../Assets/icons/image.png";
import iconColection from "../Assets/icons/nota-adhesiva.png";
import iconDelete from "../Assets/icons/eliminar.png";

const EditNotesImput = (props) => {
  let Id = localStorage.getItem("noteId");
  const navigate = useNavigate();

  const initialStateVAlues = {
    title: "",
    note: "",
    date: getDates,
    modif: "Modificación: " + DateHour,
    color: "",
    colection: "",
  };

  /////setea el primer renderizado
  const [loading, setLoading] = useState(true);
  /////setea los valores a editar
  const [note, setNote] = useState(initialStateVAlues);
  /////set del color de la nota
  const setThemeColor = useState();

  /////trae la nota seleccionada segun el id del local storage
  const getNote = async (newNotes) => {
    setLoading(true);
    const snap = await getDoc(doc(db, "notes", Id));
    let data = snap.data();

    setLoading(false);
    setNote(data);
  };
  /////observa el cambio en la funcion get note
  useEffect(() => {
    getNote();
  }, []);

  /////inputs valores a editar
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  //botones colores
  const handleChangeColor = (color) => {
    setThemeColor(color);
    setNote({ ...note, color: color });
  };

  // boton editar
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(note, Id);
    navigate("/Home");
  };

     // boton borrar
  const handleDelete = (e) => {
    console.log(Id);
    props.deletedNote(Id);
    navigate("/Home");
  };

  if (loading) {
    return <div>Loading...</div>;
  } else {

    return (
      <div className="input_container">
        <div className={`background_notes ${note.color}`} />
        {
          <form className="input_section">
            <div className="tittle">
              <input
                className="input_tittle"
                name="title"
                value={note.title}
                onChange={handleInputChange}
              />
            </div>

            <div className="text_note">
              <textarea
                type="text"
                name="note"
                value={note.note}
                onChange={handleInputChange}
              />
            </div>
          </form>
        }

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
              <button className="btn_action" onClick={handleSubmit}>
                {" "}
                Guardar cambios{" "}
              </button>
            </div>

            <div className="btn_actions">
              <img src={iconColection} alt="" className="note_icon" />
              <button name="Apuntes" className="btn_action">
                {" "}
                Agregar a lista{" "}
              </button>
            </div>

            <div className="btn_actions">
              <img src={iconAdd} alt="" className="note_icon" />
              <button className="btn_action"> Agregar imágen </button>
            </div>

            <div className="btn_actions">
              <img
                src={iconDelete}
                alt=""
                className="note_icon"
            
              />
              <button className="btn_action" onClick={handleDelete}>
                {" "}
                Eliminar{" "}
              </button>
            </div>
          </section>
        </section>
      </div>
    );
  }
};
export default EditNotesImput;
