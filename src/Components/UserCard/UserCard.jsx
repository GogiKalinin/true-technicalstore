import React from "react";
import UniversalButton from "../UniversalButton/UniversalButton";
import "./UserCard.sass";

const UserCard = (props) => {
  const favouriteProductsSwitcher = () => {
    props.setShowFavouriteProducts(!props.showFavouriteProducts);
  };

  return (
    <div className="UserCard">
      {" "}
      <h1>UserCard</h1>
      <div className="UserCardFavouriteProducts">
        <UniversalButton
          text={"favourite products"}
          onClick={favouriteProductsSwitcher}
        />
      </div>
    </div>
  );
};

export default UserCard;
