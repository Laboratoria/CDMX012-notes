import React from "react";
import "../Components/styleColections.css";
import iconApunte from "../Assets/icons/apunte.png";
import iconWork from "../Assets/icons/trabajo.png";
import iconReminder from "../Assets/icons/recordatorios.png";
import iconIdeas from "../Assets/icons/idea.png";
import iconArchived from "../Assets/icons/papelera.png";
import iconTrash from "../Assets/icons/archivado.png";

function ColectionMenu(handleSetColection) {

  const selectColection = (colection) => {
    handleSetColection (colection);


  };

  return (
    <div className="colections_content">
      <section className="set_colections_content">
        <div className="colection_style">
          <img src={iconApunte} alt="" className="colection_icon" />
          <button
            className="btn_colection"
            onClick={() => selectColection("Apuntes")}
          ></button>
        </div>

        <div className="colection_style">
          <img src={iconWork} alt="" className="colection_icon" />
          <button className="btn_colection"> Trabajo </button>
        </div>

        <div className="colection_style">
          <img src={iconReminder} alt="" className="colection_icon" />
          <button className="btn_colection"> Recordatorios </button>
        </div>

        <div className="colection_style">
          <img src={iconIdeas} alt="" className="colection_icon" />
          <button className="btn_colection"> Ideas </button>
        </div>

        <section className="deleted_notes_content">
          <div className="colection_style" id="btn_shade">
            <img src={iconArchived} alt="" className="colection_icon" />
            <button className="btn_colection" id="shade">
            </button>
          </div>

          <div className="colection_style" id="btn_shade">
            <img src={iconTrash} alt="" className="colection_icon" />
            <button className="btn_colection" id="shade">
            </button>
          </div>
        </section>
      </section>
    </div>
  );
}
export default ColectionMenu;
