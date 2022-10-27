import React from "react";
import "./ChoseColor.sass";

const ChoseColor = (props) => {
  return (
    <div
      className="ColorsChooseColor"
      alt="choose color"
      style={{
        background: props.background ? props.background : "none",
      }}
      onClick={props.onClick}
    ></div>
  );
};

export default ChoseColor;
