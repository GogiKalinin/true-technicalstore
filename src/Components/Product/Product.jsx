import React, { useState } from "react";
import StarsNew from "../StarsNew/StarsNew";
import UniversalButton from "../UniversalButton/UniversalButton";
import "./Product.sass";
import Like from "../../Images/Product/like.png";
import LikeUnactive from "../../Images/Product/likeUnActive.png";
import LikeActive from "../../Images/Product/likeActive.png";
import { Link } from "react-router-dom";

const Product = (props) => {

  const setLocalBasket = (prod) => {
    const storageBasketData = localStorage.getItem("basketData");
    console.log('storageBasketData', storageBasketData)
    if (storageBasketData !== null) {
      console.log('first')
      const test = JSON.parse(storageBasketData);
      const resultArr = [];
      const uniqueProducts = test.filter((item) => item.id !== prod.id);
      if (uniqueProducts.length !== test.length) {
        resultArr.push([...uniqueProducts, {prod, count: 1}]);
      } else {
        resultArr.push([
          test.map((item) =>
            item.id === prod.id
              ? { ...item, count: item.count + 1 }
              : { ...item }
          ),
        ]);
      }
      console.warn('resultArr if localStorage not empty', resultArr)
      localStorage.setItem("basketData",
      JSON.stringify(resultArr)
      );
      props.setBasketData(resultArr);
      console.warn(test);
    } else {
      console.log('second')
      localStorage.setItem(
        "basketData",
        JSON.stringify([{...prod, count: 1}])
        );
        props.setBasketData([{...prod, count: 1}]);
      }
      console.warn('[{...prod, count: 1}] if localStorage empty', [{...prod, count: 1}])
  };

  return (
    <div className="ProductContainer">
      {props.allProducts.map((prod) => {
        return (
          <>
            <div
              className={prod.active ? "Product Product-active" : "Product"}
              key={prod.id}
            >
              <div
                className="ProductImageContainer"
                onClick={() => {
                  setLocalBasket(prod);
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
                    localStorage.setItem("localFavouritesData");
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
                      localStorage.setItem(
                        "moreAboutData",
                        JSON.stringify(prod)
                      );
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
