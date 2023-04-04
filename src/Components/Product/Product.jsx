import React, { useState } from "react";
import StarsNew from "../StarsNew/StarsNew";
import UniversalButton from "../UniversalButton/UniversalButton";
import "./Product.sass";
import Like from "../../Images/Product/like.png";
import LikeUnactive from "../../Images/Product/likeUnActive.png";
import LikeActive from "../../Images/Product/likeActive.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Basket } from "../Navbar/Basket";
import { Search } from "../Navbar/Search";
import { getProductBasketStatus, getProductChosenListStatus } from "../../tools/productActions";

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

  const dispatch= useDispatch() 
  const basket = useSelector(state => state.basket.basket)
  const favoriteProducts = useSelector(state => state.favoriteProducts.favoriteProducts)

  const addProductToBasket = (prod) => {
    if (!basket.includes(prod)) {
      dispatch({type: 'ADD_TO_BASKET', payload: prod})
    }
    console.log(prod.id)
  }

  localStorage.setItem('basket', JSON.stringify(basket))

  const addProductToFavorites = (prod) => {
    dispatch({type: 'ADD_TO_FAVORITE_PRODUCTS', payload: prod})
  }

  const removeProductFromFavorites = (id) => {
    dispatch({type: 'GET_FROM_FAVORITE_PRODUCTS', payload: id})
  }

  localStorage.setItem('basket', JSON.stringify(basket))

  localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts))

  return (
    <div className="ProductContainer" >
      {props.allProducts.map((prod) => {
        return (
            <div
              className={prod.active ? "Product Product-active" : "Product"}
              key={prod.id}
              onClick={() => localStorage.setItem('moreAboutData', JSON.stringify(prod))}
            >
              <Link to={"/product"}>
                <div
                  className="ProductImageContainer"
                  onClick={() => {
                    setLocalBasket(prod);
                  }}
                >
                <div className="change-photos">
                  <div className="change-photo">
                    <img src={prod.images[0]} alt={prod.description.slice(0, 40) + "..."}></img>
                  </div>
                  <div className="change-photo">
                    <img src={prod.images[2]} alt={prod.description.slice(0, 40) + "..."}></img>
                  </div>
                </div>
                </div>
              </Link>
              <div className="ProductRating">
                <StarsNew />
                <div
                  className="ProductToFavourites"
                  onClick={() => {
                    props.setFavouritesData({ ...prod });
                    localStorage.setItem("localFavouritesData");
                  }}
                >
                  <div></div>
                  <div className="ProductToFavouritesImageContainer" onClick={()=>getProductChosenListStatus(favoriteProducts, prod.id) ? removeProductFromFavorites(prod.id) : addProductToFavorites(prod)}>
                    <img
                      src={
                        getProductChosenListStatus(favoriteProducts, prod.id)
                          ? LikeActive
                          : LikeUnactive
                      }
                    ></img>
                  </div>
                </div>
              </div>
                <div className="ProductDescription">
                  <Link to={"/product"}>
                    <p className="ProductDescriptionText">
                      {prod.description.length > 10
                        ? prod.description.slice(0, 40) + "..."
                        : prod.description}
                    </p>
                  </Link>
                </div> 
                <div className="ProductPriceAndPurchase">
                  <div className="ProductPice">${prod.price}</div>
                  <div className="ProductDescriptionAddToBasket" onClick={()=>addProductToBasket(prod)}><Basket /></div>
                    {getProductBasketStatus(basket, prod.id) && <div>serduck</div>}
                  </div>
              <div className="ProductButtons">
              </div>
            </div>
          
        );
      })}
    </div>
  );
};

export default Product;

