import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Cancel } from "../../Images/Product/ProductImages";
import BasketButton from "../BasketButton/BasketButton";
import BasketInput from "../BasketInput/BasketInput";
import "./BasketModal.sass";

const BasketModal = (props) => {
  const handleClickAway = () => {
    props.setShowBasketModal(false);
    console.log("clicked");
  };

  const removeFromBasket = (id) => {
    const basketDataNew = [];
    for (let i = 0; i < props.basketData.length; i++) {
      if (id !== props.basketData[i].id) {
        basketDataNew.push(props.basketData[i]);
      }
    }
    props.setBasketData(basketDataNew);
  };

  const searchaItemCount = (id) => {
    const needId = props.countItems.filter((idCheck) => idCheck.id === id);
    return needId[0].count;
  };

  const countPrice = (currentPrice, id) => {
    const count = searchaItemCount(id);
    // console.log("currentPrice", currentPrice);
    // console.log("count", count);
    const prevPrice = currentPrice.replace("$", "").split(".")[0];
    // console.log("prevPrice", prevPrice);
    const resultPrice = "$" + prevPrice * count + ".00";
    // console.log("resultPRice", resultPrice);
    return resultPrice;
  };

  return (
    <div className="BasketModalGeneral">
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="BasketModalContainer">
          {props.basketData.length === 0 ? (
            <div className="BasketModalEmpty">No products in cart</div>
          ) : (
            <>
              {props.basketData.map((prod) => {
                return (
                  <div className="BasketProdContainer" key={prod.id}>
                    <img src={prod.image} alt="img"></img>
                    <span>{prod.title.slice(0, 15)}</span>
                    <h1>{countPrice(prod.newPrice, prod.id)}</h1>
                    <BasketInput
                      number={searchaItemCount(prod.id)}
                      {...searchaItemCount}
                    />
                    <div
                      className="BaskedProdCancel"
                      onClick={() => removeFromBasket(prod.id)}
                    >
                      {Cancel}
                    </div>
                  </div>
                );
              })}
              <div className="BasketModalButtonsBlock">
                <BasketButton
                  // onClick={handleClickAway}
                  text={"Continue Shopping"}
                />
                <BasketButton text={"Clear Shopping Cart"} />
                <BasketButton text={"Purchase"} />
              </div>
            </>
          )}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default BasketModal;

// Крок 1.
//     Додати клікнутий товар у basketData.
//      ?question: Какую роль играет (как работает)в onClick  данная конструкция: "() =>"?
//
// Крок 1.1.
//     В функції selectProduct створити пустий масив.
//
// Крок 1.2.
//      У цей масив помістити актуальне значення backetData
//
//  Крок 1.3
//      Додати до цього (щойно створеного) методом push
//    вибраний продукт (приходить як prod).
//
//  Крок 2.
//      Передати за допомогою props basketData до BasketModal
//
//  Крок 3.
//      Використовуючи  метод масиву map відмалювати у корзині наші товари
//    (поля name і image)
//
//        IMPORTANT!
//      Якщо basketData не мітить жодного елементу,
//    то при відображенні модального вікна повідомити
//    про необхідність вибору товару (корзина пуста).
//
//        important too
//     Коли пишеш логіку в функції коментуй in ukaraine each крок.
