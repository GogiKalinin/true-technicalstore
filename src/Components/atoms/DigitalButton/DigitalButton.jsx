import React from "react";
import "./DigitalButton.sass";

export const DigitalButton = (props) => {
  return (
    <button className="DigitalButton" onClick={props.onClick}
    style={{
      background: props.background ? props.background : 'white',
      color: props.color ? props.color : '#0156FF',
      border: props.border ? props.border : '1px solid #0156FF',
      width: props.width ? props.width : '208px',
      height: props.height ? props.height : '50px',
      textTransform: props.uppercase ? 'uppercase' : 'none'
    }}>
      {props.text}
    </button>
  );
};
