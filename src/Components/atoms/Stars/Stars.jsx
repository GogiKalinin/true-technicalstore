import React from "react";
import "./Stars.sass";

const Stars = () => {
  const StarsArray = [
    {
      id: 0,
      type: "radio",
      className: "RatingItem",
      name: "rating",
      value: "1",
    },
    {
      id: 1,
      type: "radio",
      className: "RatingItem",
      name: "rating",
      value: "2",
    },
    {
      id: 2,
      type: "radio",
      className: "RatingItem",
      name: "rating",
      value: "3",
    },
    {
      id: 3,
      type: "radio",
      className: "RatingItem",
      name: "rating",
      value: "4",
    },
    {
      id: 4,
      type: "radio",
      className: "RatingItem",
      name: "rating",
      value: "5",
    },
  ];

  return (
    <div className="Rating">
      <div className="RatingBody">
        <div className="RatingActive"></div>
        {StarsArray.map((star) => {
          return (
            <div className="RatingItems" key={star.id}>
              <input
                key={star.id}
                type={star.type}
                className={star.class}
                value={star.value}
                name={star.name}
              ></input>
            </div>
          );
        })}
      </div>
      <div className="RatingValue">3</div>
    </div>
  );
};

export default Stars;
