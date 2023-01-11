import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BasketArrow } from "../../../Images/Basket";
import { Cancel } from "../../../Images/Product/ProductImages";
import BasketInput from "../../BasketInput/BasketInput";
import "./MiniBasket.sass";

export const MiniBasket = () => {
  
  const prepareTitle = () => {
    return mini_basket_data.length < 2 ? (
      <h1>{basket.length}item in card</h1>
    ) : (
      <h1>{basket.length}items in card</h1>
    );
  };

  const dispatch= useDispatch() 
  const basket = useSelector(state => state.basket.basket)
  console.log(basket)

  const GET_FROM_BASKET = (id) => {
    dispatch({type: 'GET_FROM_BASKET', payload: id})
  }

  const mini_basket_data = JSON.parse(localStorage.getItem("basketData"));
  const [showBasketProducts, setShowBasketProducts] = useState(true);
  return (
    <div className="MiniBasket">
      <div className="MiniBasketTitle">
        <h1>Order Summary</h1>
      </div>
      <div
        className="MiniBasketItemsTitle"
        onClick={() => setShowBasketProducts(!showBasketProducts)}
      >
        {prepareTitle()}
        {showBasketProducts ? (
          <div className="TitleArrowUnactive">{BasketArrow}</div>
        ) : (
          <div className="TitleArrowActive">{BasketArrow}</div>
        )}
      </div>
      {showBasketProducts && (
        <div className="MiniBasketItemsContainer">
          {basket.map((prod) => {
            return (
              <div className="BasketItem" key={prod.id}>
                <div className="BasketItemImage">
                  <img src={prod.images[0]} alt="img"></img>
                </div>
                <div className="BasketItemAboutProd">
                  <div className="BasketItemMain">
                    <div className="BasketItemMainDescription">
                      <span>{prod.description.slice(0, 55) + '...'}</span>
                    </div>
                    <div className="BasketItemMainCounterAndPrice">
                      <BasketInput
                        // onChange={(event) => changeInput(prod.id, event)}
                        number={prod.count}
                        // {...searchaItemCount}
                        // onClick={(event) => changeCost(prod.id, event, prod.count)}
                      />
                      <h1>{prod.newPrice}555$</h1>
                    </div>
                  </div>
                  <div
                    className="BaskedProdCancel"
                    onClick={() => GET_FROM_BASKET(prod.id)}
                  >
                    {Cancel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
