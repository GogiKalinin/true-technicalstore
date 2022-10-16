import React from "react";
import "./BasketButton.sass";

const BasketButton = (props) => {
  return (
    <button className="BasketButton" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default BasketButton;
