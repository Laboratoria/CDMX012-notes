import React from "react";
import './Header.css'; 
// Encabezado en todas las paginas menos en register
// Contiene bienvenida y boton de cerrar sesión
function Header () {
    return (
        <><h2 className="header"> Bienevenida a tus notas  </h2><button>Cerrar Sesión</button></>
    )
}
export {Header}