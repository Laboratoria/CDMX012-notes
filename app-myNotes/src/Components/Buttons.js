import { useNavigate } from "react-router-dom";
import { auth, signOut } from "../firebase-config";
import iconHome from "../Assets/icons/casa.png";
import iconLogOut from "../Assets/icons/logout.png";
import iconBack from "../Assets/icons/flecha.png";
import iconAdd from "../Assets/icons/addBtn.png";


export function BackToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <img src={iconHome} alt="" className="icon_notes" onClick={BackToTop} />
  );
}

export function BtnAddNote() {
  const navigate = useNavigate();
  function BtnAddNewNote() {
    navigate("/CreateNote");
  }
  return (
    <img src={iconAdd} alt="" className="icon_add" onClick={BtnAddNewNote} />
  );
}

export function BtnLogOut() {
  const navigate = useNavigate();
  function logOut() {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  }
  return (
    <img src={iconLogOut} alt="" className="icon_notes" onClick={logOut} />
  );
}
export function BtnBack() {
  const navigate = useNavigate();
  function btnReturn() {
    navigate("/Home");
  }
  return (
    <img src={iconBack} alt="" className="icon_back" onClick={btnReturn} />
  );
}
