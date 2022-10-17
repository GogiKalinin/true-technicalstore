import React from "react";
import "./BasketButton.sass";

const BasketButton = (props) => {
  return (
    <button
      className="BasketButton"
      style={{
        background: props.background ? props.background : "black",
        color: props.color ? props.color : "white",
        border: props.border ?? "none",
        margin: props.margin ?? "none",
      }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default BasketButton;
