import React from "react";
import { useState } from "react";
import "./DigitalInput.sass";

export const DigitalInput = ({ text, height, width, dropdown, listArray }) => {
  const [openDropdownList, setOpenDropdownList] = useState(false)
  //функция по поиску клацнутого варианта списка 
  //и помещению оного в див DigitalInputDropdownModeMain
  //с дальнейшим сохранием в localStorage
  const choseListVariant = (test) => {
    console.log(test.name)
    return (
      test.name
      )
  }
// document.getElementById("DropdownMode").value = choseListVariant;
  
  return (
    <>
      {dropdown ? (
        <div include="DigitalInputDropdownMode">
          <h1 className="DigitalInputDropdownModeTitle">
            
            <span>*</span>
          </h1>
          <div className="DigitalInputDropdownModeMain" id="DropdownMode" onClick={()=>setOpenDropdownList(!openDropdownList)}>
            {choseListVariant}
          </div>
          {openDropdownList &&
            <div className="DigitalInputDropdownModeMainList">
              {listArray.map((test) => {
                return (
                  <div className="DigitalInputDropdownModeMainListItem" key={test.id} onClick={()=>choseListVariant(test, listArray)}>
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
