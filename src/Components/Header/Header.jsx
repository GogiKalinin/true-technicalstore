import React from "react";
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
  showMainElements,
  setShowMainElements,
  changePage,
  setChangePage,
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
        showMainElements={showMainElements}
        setShowMainElements={setShowMainElements}
        changePage={changePage}
        setChangePage={setChangePage}
      />
    </div>
  );
};
export default Header;
