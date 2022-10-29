import React, { useState } from "react";
import StarsNew from "../StarsNew/StarsNew";
import UniversalButton from "../UniversalButton/UniversalButton";
import "./Product.sass";
import Like from "../../Images/Product/like.png";
import LikeUnactive from "../../Images/Product/likeUnActive.png";
import LikeActive from "../../Images/Product/likeActive.png";
import { Link } from "react-router-dom";

const Product = (props) => {
  // console.log(JSON.parse(localStorage.getItem("localFavouritesData")));
  // localStorage.removeItem("localFavouritesData");
  return (
    <div className="ProductContainer">
      {props.allProducts.map((prod) => {
        return (
          <>
            <div
              className={prod.active ? "Product Product-active" : "Product"}
              key={prod.id}
              // onClick={props.basketData.push(prod)}
              // onClick={() => setClickedProduct(prod)}
            >
              <div
                className="ProductImageContainer"
                onClick={() => {
                  props.setBasketData({ ...prod, count: 1 });
                  localStorage.setItem("basketData", JSON.stringify({ prod }));
                }}
              >
                <img
                  className="ProductImage"
                  src={prod.images[0]}
                  alt="img"
                ></img>
              </div>
              <div className="ProductRating">
                <StarsNew />
                <div
                  className="ProductToFavourites"
                  onClick={() => {
                    props.setFavouritesData({ ...prod });
                    localStorage.setItem(
                      "localFavouritesData",
                      JSON.stringify("serduck")
                    );
                  }}
                >
                  <img
                    src={
                      prod.id === props.favouritesData.id
                        ? LikeActive
                        : LikeUnactive
                    }
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="ProductDescription">
                <p>
                  {prod.description.length > 10
                    ? prod.description.slice(0, 40) + "..."
                    : prod.description}
                </p>
              </div>
              <div className="ProductPrice">
                <h3 className="OldPrice">{prod.oldPrice}</h3>
                <h3 className="NewPrice">{prod.newPrice}</h3>
              </div>
              <div className="ProductButtons">
                <Link to={"/product"}>
                  <UniversalButton
                    text="more about"
                    onClick={() => {
                      props.setMoreAboutData({ ...prod, count: 1 });
                    }}
                  />
                </Link>
              </div>
            </div>
          </>
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
