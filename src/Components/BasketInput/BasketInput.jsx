import React from "react";
import { InputArrow } from "../../Images/Product/ProductImages";
import "./BasketInput.sass";

const BasketInput = (props) => {
  const add = (searchaItemCount) => {
    return searchaItemCount + 1;
  };
  const away = (searchaItemCount) => {
    return searchaItemCount - 1;
  };
  return (
    <div className="BasketInput">
      <input className="BasketInputInput" placeholder={props.number}></input>
      <div className="BasketInputButtonsBlock">
        <button className="BasketInputButtonMore" onClick={add}>
          {InputArrow}
        </button>
        <button className="BasketInputButtonLess" onClick={away}>
          {InputArrow}
        </button>
      </div>
    </div>
  );
};

export default BasketInput;
