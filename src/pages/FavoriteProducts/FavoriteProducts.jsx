import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DigitalButton } from "../../Components/atoms/DigitalButton/DigitalButton";
import { DigitalProduct } from "../../Components/atoms/DigitalProduct/DigitalProduct";
import { FavoritesControlPanel } from "../../Components/atoms/FavoritesСontrolPanel/FavoritesControlPanel";
import BasketButton from "../../Components/BasketButton/BasketButton";
import { prepareTitle } from "../../tools/prepareTitle";
import "./FavoriteProducts.sass";

export const FavoriteProducts = () => {

  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const favoriteProducts = useSelector(
    (state) => state.favoriteProducts.favoriteProducts
  );

  const addFavoriteProductsToBasket = () => {
      dispatch({
        type: "ADD_SEVERAL_PRODUCTS_TO_BASKET",
        payload: favoriteProducts,
      });
  }

  return (
    <div className="FavoriteProducts">
      <div className="FavoriteProductTitle">
        <h1>Wish list</h1>
      </div>
      <div className="FavoriteProductWishList">
        <DigitalProduct />
      </div>
      <div className="FavoriteProductsBottom">
        <div></div>
        <div className="FavoriteProductsPriceAndPurchase">
          <div className="FavoriteProductTotalPrice">
            <h1>{prepareTitle(favoriteProducts)}</h1>
            <h1>Total:</h1>
          </div>
          <div className="FavoriteProductPurchaseAll">
            <DigitalButton
              text="Buy all"
              onClick={()=>addFavoriteProductsToBasket(favoriteProducts)}
            />
          </div>
        </div>
      </div> 
    </div>
  );
};
