import React, { useState } from "react";
import Inform from "../Inform/Inform";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.sass";

const Header = (
  { showBasketModal, setShowBasketModal },
  { showSearchBar, setShowSearchBar }
) => {
  const [searchData, setSearchData] = useState([]);
  console.log("searchData", searchData);

  // console.log("showBasketModal", showBasketModal);
  // console.log("setShowBasketModal", setShowBasketModal);
  return (
    <div className="Header">
      <Inform />
      <Navbar
        setShowBasketModal={setShowBasketModal}
        showBasketModal={showBasketModal}
        showSearchBar={showSearchBar}
        setShowSearchBar={setShowSearchBar}
      />
      {/* {showSearchBar ? <SearchBar setSearchData={setSearchData} /> : null} */}
      {showBasketModal ? <SearchBar setBasketData={setSearchData} /> : null}
      {/* <SearchBar /> */}
    </div>
  );
};
export default Header;
