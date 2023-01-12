import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./StarsNew.sass";

const StarsNew = () => {
  const [starsArray, setStarsArray] = useState([
    {
      id: 0,
      active: false,
    },
    {
      id: 1,
      active: false,
    },
    {
      id: 2,
      active: false,
    },
    {
      id: 3,
      active: false,
    },
    {
      id: 4,
      active: false,
    },
  ]);

  const yellowColor = "#E9A426";

  const greyColor = "#D9D9D9";

  const starSVG = (fill = greyColor) => (
    <svg
      width="25"
      height="23"
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.91099 0.173835C6.94815 0.10127 7.05185 0.10127 7.08901 0.173834L8.92922 3.76772C8.94375 3.79609 8.97092 3.81583 9.00239 3.82088L12.989 4.46045C13.0695 4.47337 13.1016 4.572 13.044 4.62976L10.1947 7.49048C10.1722 7.51306 10.1618 7.54501 10.1668 7.57649L10.7904 11.5657C10.803 11.6462 10.7191 11.7072 10.6464 11.6703L7.04522 9.84443C7.0168 9.83002 6.9832 9.83002 6.95478 9.84443L3.35358 11.6703C3.28087 11.7072 3.19697 11.6462 3.20956 11.5657L3.83323 7.57649C3.83816 7.54501 3.82778 7.51306 3.80529 7.49048L0.955954 4.62976C0.898423 4.572 0.93047 4.47337 1.01096 4.46045L4.99761 3.82088C5.02908 3.81583 5.05625 3.79609 5.07078 3.76772L6.91099 0.173835Z"
        fill={fill}
      />
    </svg>
  );

  const [mark, setMark] = useState();

  // const changeStarMark = (id) => {
  //   setMark(id + 1);
  // };

  const changeStarState = (id) => {
    setMark(id + 1);
    const updatedStars = [];
    for (let i = 0; i < starsArray.length; i++) {
      const starItem = starsArray[i];
      if (starsArray[i].id <= id) {
        starItem.active = true;
        updatedStars.push(starItem);
        // updatedStars.push({id:id,active:true})
        // const newStarObjecrt = { id: starsArray[i].id, active: true };
      } else {
        starItem.active = false;
        updatedStars.push(starItem);
      }
    }
    setStarsArray(starsArray);
  };

  const dispatch= useDispatch() 
  const basket = useSelector(state => state.basket.basket)

  const [starMark, setStarMark] = useState(3)

  const getStarMark = () => {
    console.log(starMark)

  }

  return (
    <div className="StarsContainer">
      <div className="ViewMarkItem">{mark}</div>
      {starsArray.map((item) => {
        return (
          <div
            className="StarItem"
            onClick={() => changeStarState(item.id)}
            key={item.id}
          >
            {starSVG(item.active ? yellowColor : greyColor)}
          </div>
        );
      })}
    </div>
  );
};

export default StarsNew;

// Add mark.
//
//  Step 1.
//    Add div element for view mark
//  Step 2.
//    Create useState (mark, setMark)
//  Step 3.
//    Change this state on star click
