import React from "react";
import { Basket } from "../Navbar/Basket";
import { Logo } from "../Navbar/Logo";
import { Search } from "../Navbar/Search";
import "./SearchBar.sass";
import "../Navbar/Userpic.png";
import { SearchBarCancel } from "../../Images/Header";
// import { SearchBarCancel } from "../../Images/Header";

const SearchBar = ({ setShowSearchBar, showSearchBar }) => {
  const toggleBasketModalView = () => {
    setShowSearchBar(!showSearchBar);
  };
  return (
    <div className="SearchBar">
      <a className="SearchBarMainIcon" href="google.com">
        <Logo />
      </a>
      <div className="SearchBarInput">
        <input placeholder="Search entiere store here..."></input>
      </div>
      <a href="google.com">
      <div className="UserMenuSearch">
        {SearchBarCancel}
      </div>
      </a>
      <div className="UserMenuSearch" onClick={toggleBasketModalView}>
        <Basket />
      </div>
      <a href="google.com">
        {/* <img src={require("./Userpic.png")} alt="userpic"></img> */}
      </a>
    </div>
  );
};

export default SearchBar;
