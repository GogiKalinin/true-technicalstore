import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { InputArrow } from "../../../Images/Product/ProductImages";
import "./DigitalInput.sass";

export const DigitalInput = ({
  title,
  dropdown,
  type,
  id,
  height,
  width,
  onChange,
  value,
  dropdownCountries,
  dropdownStates,
  dropdownType,
}) => {
  const [openDropdownList, setOpenDropdownList] = useState(false);

  //функция по поиску клацнутого варианта списка
  //и помещению оного в див DigitalInputDropdownModeMain
  //с дальнейшим сохранием в localStorage
  // const choseListVariant = (id) => {
  //   if (id) {
  //     const index = id - 1;
  //     localStorage.setItem(
  //       "chosenListItem",
  //       JSON.stringify(listArray[index].name)
  //     );
  //   }
  // };
  // console.log(JSON.parse(localStorage.getItem("chosenListItem")));

  // const getInputValues = () => {};

  return (
    <>
      {dropdown === true ? (
        <div include="DigitalInputDropdownMode">
          {/* {listArray.map((arr) => {
            return ( */}
          <h1 className="DigitalInputDropdownModeTitle">
            {title}
            <span>*</span>
          </h1>
          {/* )
          })} */}
          <div
            className="DigitalInputDropdownModeMain"
            id="DropdownMode"
            onClick={() => setOpenDropdownList(!openDropdownList)}
          >
            <div className="DigitalInputDropdownModeMainChosenText"></div>
            <div
              className={
                openDropdownList
                  ? "DigitalInputDropdownModeMainArrowActive"
                  : "DigitalInputDropdownModeMainArrowUnactive"
              }
            >
              {InputArrow}
            </div>
          </div>
          {openDropdownList && (
            <div className="DigitalInputDropdownModeMainList">
              {dropdownCountries.map((item) => {
                return (
                  <div className="DigitalInputDropdownModeMainListItem" key={item.id}>
                    {item.country}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="DigitalInput">
          {/* {listArray.map((test) => { */}
          {/* return ( */}
          <>
            <h1 className="DigitalInputTitle">
              {title}
              <span>*</span>
            </h1>
            <input
              className="DigitalInputInput"
              type="text"
              id={id}
              value={value}
              onChange={onChange}
            ></input>
            {/* <button onClick={() => getInputValue()}>check</button> */}
          </>
          {/* );  */}
          {/* })}  */}
        </div>
      )}
    </>
  );
};
