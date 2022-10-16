import React, { useState } from "react";
import Inform from "../Inform/Inform";
import Navbar from "../Navbar/Navbar";
import "./Header.sass";

const Header = ({
  showBasketModal,
  setShowBasketModal,
  basketDataLength,
  productArray,
  allProducts,
  setAllProducts,
  setNavigationItems,
  navigationItems,
  setShowMainElements,
  showMainElements,
}) => {
  return (
    <div className="Header">
      <Inform />
      <Navbar
        setShowBasketModal={setShowBasketModal}
        showBasketModal={showBasketModal}
        basketDataLength={basketDataLength}
        productArray={productArray}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        navigationItems={navigationItems}
        setNavigationItems={setNavigationItems}
        setShowMainElements={setShowMainElements}
        showMainElements={showMainElements}
      />
    </div>
  );
};
export default Header;
