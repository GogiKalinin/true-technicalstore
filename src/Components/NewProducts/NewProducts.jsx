import React from "react";
import "./NewProducts.sass";

const NewProducts = ({
  navigationItems,
  productArray,
  setAllProducts,
  setShowMainElements,
  setNavigationItems,
}) => {
  let name;

  for (let i = 0; i < navigationItems.length; i++) {
    if (navigationItems[i].active === true) {
      name = navigationItems[i].name;
      break;
    } else {
      name = "All products";
    }
  }

  const showAll = () => {
    setAllProducts(productArray);
    // const newNavigationItemsForShowAll = [];
    // setShowMainElements(true);
    // for (let i = 0; i < navigationItems.length; i++) {
    //   if (navigationItems[i].active === true) {
    //     const newElement = { ...navigationItems[i], active: false };
    //     newNavigationItemsForShowAll.push(newElement);
    //   } else {
    //     newNavigationItemsForShowAll.push(navigationItems[i]);
    //   }
    // }
    // setNavigationItems(newNavigationItemsForShowAll);
    setNavigationItems(
      navigationItems.map((item) => ({ ...item, active: false }))
    );
  };

  return (
    <div className="NewProducts">
      <h2>{name}</h2>
      <p onClick={showAll}>See All New Products</p>
    </div>
  );
};
export default NewProducts;
