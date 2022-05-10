import React, { useState } from "react";
import ListColection from "../Components/ListColection";

import "../Components/styleColections.css";
import iconApunte from "../Assets/icons/apunte.png";
import iconWork from "../Assets/icons/trabajo.png";
import iconReminder from "../Assets/icons/recordatorios.png";
import iconIdeas from "../Assets/icons/idea.png";
import iconArchived from "../Assets/icons/papelera.png";
import iconTrash from "../Assets/icons/archivado.png";

function Colections() {
   /////setea los valores de la coleccion
  const [handleColection, setHandleColection] = useState("menuColections");

   /////setea con los valores de la coleccion seleccionada
  const handleSetColection = () => {
      return <ListColection selectedColection = {handleColection}/>
  };

  const MenuColection = () => {
    return (
      <section className="set_colections_content">

        <div className="colection_style">
          <img src={iconApunte} alt="" className="colection_icon" />
          <button
            className="btn_colection"
            onClick={() => setHandleColection("apuntes")}
          >
            Apuntes
          </button>
        </div>

        <div className="colection_style">
          <img src={iconWork} alt="" className="colection_icon" />
          <button className="btn_colection" 
          onClick={() => setHandleColection("trabajo")}
          > Trabajo </button>
        </div>

        <div className="colection_style">
          <img src={iconReminder} alt="" className="colection_icon" />
          <button className="btn_colection"
          onClick={() => setHandleColection("recordatorios")}
          > Recordatorios </button>
        </div>

        <div className="colection_style">
          <img src={iconIdeas} alt="" className="colection_icon" />
          <button className="btn_colection"
          onClick={() => setHandleColection("ideas")}
          > Ideas </button>
        </div>

        <section className="deleted_notes_content">
          <div className="colection_style" id="btn_shade">
            <img src={iconArchived} alt="" className="colection_icon" />
            <button className="btn_colection" id="shade">
              {" "}
              Notas archivadas{" "}
            </button>
          </div>

          <div className="colection_style" id="btn_shade">
            <img src={iconTrash} alt="" className="colection_icon" />
            <button className="btn_colection" id="shade">
              {" "}
              Papelera{" "}
            </button>
          </div>
        </section>
      </section>
    );
  };

  return (
    <div className="colections_content">
      {handleColection === "menuColections"
        ? MenuColection()
        : handleSetColection()}
    </div>
  );
}
export default Colections;
