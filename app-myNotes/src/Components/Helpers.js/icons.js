import iconApunte from "../../Assets/icons/apunte.png";
import iconWork from "../../Assets/icons/trabajo.png";
import iconReminder from "../../Assets/icons/recordatorios.png";
import iconIdeas from "../../Assets/icons/idea.png";
import iconArchive from "../../Assets/icons/archivar.png";

export function Icons({colection}) {
if(colection === "Apuntes")
  return (
 <img src={iconApunte} alt="" className="icon_create_note" />
  ); else if(colection === "Trabajo")
  return (
 <img src={iconWork} alt="" className="icon_create_note" />
  ); else if(colection === "Recordatorios")
  return (
 <img src={iconReminder} alt="" className="icon_create_note" />
 ); else if(colection === "Ideas")
 return (
<img src={iconIdeas} alt="" className="icon_create_note" />);
else 
return (
<img src={iconArchive} alt="" className="icon_create_note" />);
};

