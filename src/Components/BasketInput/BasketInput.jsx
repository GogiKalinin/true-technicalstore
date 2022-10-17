import React from "react";
import { InputArrow } from "../../Images/Product/ProductImages";
import "./BasketInput.sass";

const BasketInput = (props) => {
  return (
    <div className="BasketInput">
      <input
        className="BasketInputInput"
        value={props.number}
        onChange={props.onChange}
      />
      <div className="BasketInputButtonsBlock">
        <button
          className="BasketInputButtonMore"
          name="more"
          onClick={props.onClick}
        >
          {InputArrow}
        </button>
        <button
          className="BasketInputButtonLess"
          name="less"
          onClick={props.onClick}
        >
          {InputArrow}
        </button>
      </div>
    </div>
  );
};

export default BasketInput;
