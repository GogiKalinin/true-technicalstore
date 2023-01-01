import React from "react";
import { useState } from "react";
import { InputArrow } from "../../../Images/Product/ProductImages";
import "./DigitalInput.sass";

export const DigitalInput = ({ text, height, width, dropdown, listArray }) => {
  const [openDropdownList, setOpenDropdownList] = useState(false)
  //функция по поиску клацнутого варианта списка 
  //и помещению оного в див DigitalInputDropdownModeMain
  //с дальнейшим сохранием в localStorage
  const choseListVariant = (id) => {
    console.log(id)
    // return (
    //   test.name
    //   )
  }
  
  return (
    <>
      {dropdown ? (
        <div include="DigitalInputDropdownMode">
          <h1 className="DigitalInputDropdownModeTitle">
            {text}
            <span>*</span>
          </h1>
          <div className="DigitalInputDropdownModeMain" id="DropdownMode" onClick={()=>setOpenDropdownList(!openDropdownList)}>
            <div className="DigitalInputDropdownModeMainChosenText">
              {listArray[0].name}
            </div>
            {/* {choseListVariant} */}
            <div className={openDropdownList ? "DigitalInputDropdownModeMainArrowActive" : 'DigitalInputDropdownModeMainArrowUnactive'}>
              {InputArrow}
            </div>
          </div>
          {openDropdownList &&
            <div className="DigitalInputDropdownModeMainList">
              {listArray.map((test) => {
                return (
                  <div className="DigitalInputDropdownModeMainListItem" key={test.id} onClick={() => choseListVariant(id)}>
                    <p>{test.name}</p>
                  </div>
                )
              })}
            </div>
          }
        </div>
      ) : (
        <div className="DigitalInput">
          <h1 className="DigitalInputTitle">
            {text}
            <span>*</span>
          </h1>
          <input className="DigitalInputInput" style={{}}></input>
        </div>
      )}
    </>
  );
};
