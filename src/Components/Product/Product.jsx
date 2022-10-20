import React, { useState } from "react";
import StarsNew from "../StarsNew/StarsNew";
import UniversalButton from "../UniversalButton/UniversalButton";
import "./Product.sass";

const Product = (props) => {
  return (
    <div className="ProductContainer">
      {props.allProducts.map((prod) => {
        return (
          <div
            className={prod.active ? "Product Product-active" : "Product"}
            key={prod.id}
            // onClick={props.basketData.push(prod)}
            // onClick={() => setClickedProduct(prod)}
            onClick={() => props.setBasketData({ ...prod, count: 1 })}
          >
            <div className="ProductImageContainer">
              <img className="ProductImage" src={prod.image} alt="img"></img>
            </div>
            <div className="ProductRating">
              <StarsNew />
            </div>
            <div className="ProductDescription">
              <p>{prod.title}</p>
            </div>
            <div className="ProductPrice">
              <h3 className="OldPrice">{prod.oldPrice}</h3>
              <h3 className="NewPrice">{prod.newPrice}</h3>
            </div>
            <UniversalButton
              text="about"
              onClick={() => props.setMoreAboutData({ ...prod, count: 1 })}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Product;

//  Крок 1.
//    При кліці на товар має викликатись функція selectProduct.
//  Крок 2.
//    У цю функцію параметром має передаватися об'єкт клікнутого товару.
//  Крок 3.
//    Використовцючи консоль лог в цій функції превірити правильність вибору товару.
//  Крок 4.
//    Використовуючи setSelectedProductItem (setState) записати це значення в selectedProductItem.

// Доробити зірочки.
