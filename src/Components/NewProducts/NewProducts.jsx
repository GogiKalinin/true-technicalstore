import React from "react";
import "./NewProducts.sass";

const NewProducts = ({ navigationItems, productArray, setAllProducts }) => {
  let name;
  const getName = () => {
    for (let i = 0; i < navigationItems.length; i++) {
      if (navigationItems[i].active === true) {
        name = navigationItems[i].name;
      } else {
        name = "All products";
      }
    }
  };

  getName(navigationItems);

  const showAll = () => {
    setAllProducts(productArray);
  };

  console.log("name", name);

  return (
    <div className="NewProducts">
      <h2>{name} Products</h2>
      <p onClick={showAll}>See All New Products</p>
    </div>
  );
};
export default NewProducts;
