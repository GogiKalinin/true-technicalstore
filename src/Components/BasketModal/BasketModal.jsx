import React from "react";
// import { CancelButton } from "../../Images/BasketModal/BasketModal";
import "./BasketModal.sass";

const CancelButton = (
  <svg
    width="27"
    height="27"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="13.4882"
      cy="13.4883"
      r="12.4882"
      fill="white"
      stroke="#CACDD8"
      stroke-width="2"
    />
    <path
      d="M9.44177 9.44183L18.2091 18.2092"
      stroke="#A2A6B0"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M18.2091 9.44183L9.44178 18.2092"
      stroke="#A2A6B0"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);

const BasketModal = (props) => {
  // let basketArray = [];
  // basketArray.push(props.basketData);
  // console.log("basketArray", basketArray)

  const searchaItemCount = (id) => {
    // console.group("search item count");
    // console.log("count items", props.countItems);
    // console.log("clicked id", id);
    // console.groupEnd();
    const needId = props.countItems.filter((idCheck) => idCheck.id === id);
    // console.log("needId", needId);
    return needId[0].count;
  };

  const countPrice = (currentPrice, id) => {
    const count = searchaItemCount(id);
    console.log("currentPrice", currentPrice);
    console.log("count", count);
    const prevPrice = currentPrice.replace("$", "").split(".")[0];
    console.log("prevPrice", prevPrice);
    const resultPrice = "$" + prevPrice * count + ".00";
    console.log("resultPRice", resultPrice);
    return resultPrice;
  };

  return (
    <div className="BasketModalContainer">
      {props.basketData.map((prod) => {
        return (
          <div className="BasketProdContainer" key={prod.id}>
            <img src={prod.image} alt="img"></img>
            <span>{prod.title.slice(0, 15)}</span>
            <div className="BasketProdContainerCounter">
              {searchaItemCount(prod.id)}
            </div>
            <h1>{countPrice(prod.newPrice, prod.id)}</h1>
          </div>
        );
      })}
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
