import React from "react";
import "./ModulInput.sass";
import { chooseCategory } from "../../../tools/chooseCategory";

export const ModulInput = ({
  setShowMainElements,
  productArray,
  setAllProducts,
  navigationItems,
  setNavigationItems,
}) => {
  const showValue = () => {
    console.log('input')
    const input_value = document.getElementById("ModulInputId").value;
    if (input_value !== null) {
      console.log(input_value)
      chooseCategory(setShowMainElements, productArray, input_value, setAllProducts);
    }
  };
  return (
    <form>
      <input
        className="ModulInput"
        type={"text"}
        placeholder={"Search entiere store here..."}
        id="ModulInputId"
        
      ></input>
      <button onClick={() => showValue()}>click me</button>
    </form>
  );
};
