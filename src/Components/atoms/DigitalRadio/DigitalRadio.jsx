import React from "react";
import {
  activeRadio,
  unactiveRadio,
} from "../../../Images/atomsImages/DigitalRadio";
import "./DigitalRadio.sass";

export const DigitalRadio = () => {
  return (
    <div className="DigitalRadio">
      <div className="DigitalRadioTitle">asdfasdf</div>
      <div className="DigitalRadioMain">
        <div className="DigitalRadioConditions">
            <div className="DigitalRadioConditionsRadio">
                {unactiveRadio}
            </div>
            <div className="DigitalRadioConditionsText">
                conditions 
            </div>
            
        </div>
        <div className="DigitalRadioPrice">
            $100
        </div>
      </div>

      {/* {activeRadio} */}
    </div>
  );
};
