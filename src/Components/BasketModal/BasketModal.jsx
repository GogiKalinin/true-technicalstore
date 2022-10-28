import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Cancel } from "../../Images/Product/ProductImages";
import BasketButton from "../BasketButton/BasketButton";
import BasketInput from "../BasketInput/BasketInput";
import "./BasketModal.sass";

const BasketModal = (props) => {
  const handleClickAway = () => {
    props.setShowBasketModal(false);
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
    if (needId[0]) {
      return needId[0].count;
    } else return 0;
  };

  const [modalThanks, setModalThanks] = useState(false);

  const toggleBasketModalViewIfPurchase = () => {
    setModalThanks(true);
    props.setBasketData([]);
    setTimeout(() => {
      props.setShowBasketModal(false);
    }, 3000);
  };

  // const [clearShoppingCart, setClearShoppingCart] = useState(false);

  const toggleBasketModalViewCleanCart = () => {
    props.setBasketData([]);
    props.setShowBasketModal(false);
  };

  const toggleBasketModalViewContinue = () => {
    props.setShowBasketModal(false);
  };

  const countPrice = (currentPrice, id) => {
    const count = searchaItemCount(id);
    const prevPrice = currentPrice.replace("$", "").split(".")[0];
    const resultPrice = "$" + prevPrice * count + ".00";
    return resultPrice;
  };

  const changeCounter = (id, newCount) => {
    const newBasketData = [];
    for (let i = 0; i < props.basketData.length; i++) {
      if (props.basketData[i].id === id) {
        newBasketData.push({ ...props.basketData[i], count: newCount });
      } else {
        newBasketData.push(props.basketData[i]);
      }
    }
    props.setBasketData(newBasketData);
  };

  const changeInput = (id, event) => {
    const value = event.target.value;
    changeCounter(id, +value);
  };

  const changeCost = (id, event, prevValue) => {
    let newValue = 0;
    if (event.currentTarget.name === "more") {
      newValue = prevValue + 1;
    }
    if (event.currentTarget.name === "less" && prevValue > 1) {
      newValue = prevValue - 1;
    }
    changeCounter(id, newValue);
  };

  return (
    <div className="BasketModalGeneral">
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="BasketModalContainer">
          {props.basketData.length === 0 && modalThanks && (
            <div className="BasketModalEmpty">Thanks for purchase</div>
          )}
          {props.basketData.length === 0 && !modalThanks ? (
            <div className="BasketModalEmpty">No products in cart</div>
          ) : (
            <>
              {props.basketData.map((prod) => {
                return (
                  <div className="BasketProdContainer" key={prod.id}>
                    <img src={prod.image} alt="img"></img>
                    <span>{prod.title.slice(0, 15)}</span>
                    {/* <h1>{prod.newPrice}</h1> */}
                    <BasketInput
                      onChange={(event) => changeInput(prod.id, event)}
                      number={prod.count}
                      {...searchaItemCount}
                      onClick={(event) =>
                        changeCost(prod.id, event, prod.count)
                      }
                    />
                    <div className="BasketProdContainerTotalPrice">
                      {countPrice(prod.newPrice, prod.id)}
                    </div>
                    <div
                      className="BaskedProdCancel"
                      onClick={() => removeFromBasket(prod.id)}
                    >
                      {Cancel}
                    </div>
                  </div>
                );
              })}
              {!modalThanks && (
                <div className="BasketModalButtonsBlock">
                  <div>
                    <BasketButton
                      onClick={toggleBasketModalViewContinue}
                      text="Continue Shopping"
                      background={"white"}
                      color={"gray"}
                      border={"2px solid gray"}
                      margin={"0 7px 0 0"}
                    />
                    <BasketButton
                      text={"Clear Shopping Cart"}
                      onClick={toggleBasketModalViewCleanCart}
                    />
                  </div>
                  <BasketButton
                    text={"Purchase"}
                    onClick={toggleBasketModalViewIfPurchase}
                  />
                </div>
              )}
            </>
          )}{" "}
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
