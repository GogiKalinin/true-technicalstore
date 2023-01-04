import React from "react";
import {
  activeRadio,
  unactiveRadio,
} from "../../../Images/atomsImages/DigitalRadio";
import "./DigitalRadio.sass";

export const DigitalRadio = ({ title, image, conditions, price }) => {
  return (
    <div className="DigitalRadio">
      <div className="DigitalRadioTitle">{title}</div>
      <div className="DigitalRadioMain">
        <div className="DigitalRadioConditions">
          <div className="DigitalRadioConditionsRadio">{image}</div>
          <div className="DigitalRadioConditionsText">{conditions}</div>
        </div>
        <div className="DigitalRadioPrice">{price}</div>
      </div>
    </div>
  );
};
