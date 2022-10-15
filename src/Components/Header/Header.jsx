import React, { useState } from "react";
import Inform from "../Inform/Inform";
import Navbar from "../Navbar/Navbar";
import "./Header.sass";

const Header = ({
  showBasketModal,
  setShowBasketModal,
  basketDataLength,
  productArray,
  setAllProducts,
}) => {
  return (
    <div className="Header">
      <Inform />
      <Navbar
        setShowBasketModal={setShowBasketModal}
        showBasketModal={showBasketModal}
        basketDataLength={basketDataLength}
        productArray={productArray}
        setAllProducts={setAllProducts}
      />
    </div>
  );
};
export default Header;
