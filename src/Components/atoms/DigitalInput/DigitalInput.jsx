import React from "react";
import { useState } from "react";
import { InputArrow } from "../../../Images/Product/ProductImages";
import "./DigitalInput.sass";

export const DigitalInput = ({ title, dropdown, type, height, width }) => {
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
            <div className="DigitalInputDropdownModeMainChosenText">
              {/* {listArray[0].name} */}
              {/* <h1>{(listArray)}</h1> */}
              {JSON.parse(localStorage.getItem("chosenListItem"))}
            </div>
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
              {/* {listArray.map((test) => { */}
              {/* return (  */}
              <div
                className="DigitalInputDropdownModeMainListItem"
                // key={test.id}
                // onClick={() => choseListVariant(test.id)}
              >
                {/* <p>{test.name}</p>  */}
              </div>
              {/* );  */}
              {/* })}  */}
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
            <input className="DigitalInputInput" style={{}}></input>
          </>
          {/* );  */}
          {/* })}  */}
        </div>
      )}
    </>
  );
};
