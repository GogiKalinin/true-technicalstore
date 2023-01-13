import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setBasketToLocalStorage } from "../../../tools/setBasketToLocalStorage";
import { Basket } from "../../Navbar/Basket";
import "./DigitalProduct.sass";

export const DigitalProduct = () => {
  // const setMoreAboutData = () => 
  const dispatch= useDispatch() 
  const basket = useSelector(state => state.basket.basket)
  const favoriteProducts = useSelector(state => state.favoriteProducts.favoriteProducts)
  
  const addFavoriteProductToBasket = (prod) => {
    if (!basket.includes(prod)) {
      dispatch({type: 'ADD_TO_BASKET', payload: prod})
    }
  }
  localStorage.setItem('basket', JSON.stringify(basket))

  return (
    <div className="DigitalProduct">
      <div className="DigitalProductsContainer">
      {favoriteProducts.map((prod) => {
        return (
          <div
            className={prod.active ? "DigitalProductItem Product-active" : "DigitalProductItem"}
            key={prod.id}
            // onClick={() => localStorage.setItem('moreAboutData', JSON.stringify(prod))}
            // onClick={() => addProductToBasket(prod)}
          >
            {/* <Link to={"/product"}> */}
            <Link to={"/product"}>
              <div
                className="ProductImageContainer"
                onClick={()=>localStorage.setItem('moreAboutData', JSON.stringify(prod))}
                // onClick={() => {
                //   setLocalBasket(prod);
                // }}
              >
                <img
                  className="ProductImage"
                  src={prod.images[0]}
                  alt={prod.title}
                ></img>
              </div>
            </Link>
            {/* </Link> */}
            <div className="ProductRating">
              {/* <StarsNew /> */}
              <div
                className="ProductToFavourites"
                // onClick={() => {
                //   props.setFavouritesData({ ...prod });
                //   localStorage.setItem("localFavouritesData");
                // }}
              >
                <div></div>
                <div className="ProductToFavouritesImageContainer"></div>
              </div>
            </div>
            <Link to={"/product"}>
              <div className="ProductDescription">
                <p className="ProductDescriptionText">
                  {prod.description.length > 10
                    ? prod.description.slice(0, 40) + "..."
                    : prod.description}
                </p>
              </div>
            </Link>
            <div className="ProductPriceAndBasket">
              {prod.price}$
            <div className="ProductBasket" onClick={()=>addFavoriteProductToBasket(prod)}>
              <Basket />
            </div>
            </div>
            <div className="ProductButtons"></div>
          </div>
        );
      })}
      </div>
    </div>
  );
};
