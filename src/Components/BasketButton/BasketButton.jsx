import React from "react";
import "./BasketButton.sass";

const BasketButton = (props) => {
  return <button className="BasketButton">{props.text}</button>;
};

export default BasketButton;
