import React from "react";
import "./styles/Button.css"

function Button({ text, isClickButton, handleClick}) {
  return (
    <button 
    className={ isClickButton ? "createBtn" : "editBtn" }
    onClick={handleClick}>
    {text}
    </button>

    );
}

export default Button;
