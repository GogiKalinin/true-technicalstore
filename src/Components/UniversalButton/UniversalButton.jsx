import React from "react";
import "./UniversalButton.sass";

const UniversalButton = (props) => {
  return (
    <button className="UniversalButton" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default UniversalButton;
