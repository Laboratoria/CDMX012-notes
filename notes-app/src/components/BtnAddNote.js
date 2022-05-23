import React from "react";
import "./styles/Button.css";
import { BiPlus } from "react-icons/bi";




function btnAddNote() {
  return (
<button className="btnAddNote">
<BiPlus />
{/* className={isClickButton ? "clickButton" : "submitButton"}
      onClick={manageClick}>
      {text} */}
</button>
  )
}

export default btnAddNote






