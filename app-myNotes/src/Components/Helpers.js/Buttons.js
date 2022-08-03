import { useNavigate } from "react-router-dom";
import { auth, signOut } from "../../firebase-config";
import iconHome from "../../Assets/icons/casa.png";
import iconLogOut from "../../Assets/icons/logout.png";
import iconBack from "../../Assets/icons/flecha-izquierda.png";
import iconAdd from "../../Assets/icons/add.svg";

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
    <div className="btn_add_container" onClick={BtnAddNewNote}>
      <div className="btn_add">
        <img
          src={iconAdd}
          alt=""
          className="icon_add"
        />
      </div>
    </div>
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
    localStorage.clear();
    navigate("/Home");
  }
  return (
    <img src={iconBack} alt="" className="icon_back" onClick={btnReturn} />
  );
}
