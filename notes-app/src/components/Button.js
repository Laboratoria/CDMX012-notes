import React from "react";
import "./styles/Button.css";

function Button({ text, isClickButton, manageClick }) {
  return (
    <button
      className={isClickButton ? "clickButton" : "submitButton"}
      onClick={manageClick}>
      {text}
    </button>
  );
}

export default Button;


{/* <Button
text="Log in with Google"
isClickButton={true}
manageClick={manageClick}
/>
 */}