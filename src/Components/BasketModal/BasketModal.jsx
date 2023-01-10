import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Cancel } from "../../Images/Product/ProductImages";
import BasketButton from "../BasketButton/BasketButton";
import BasketInput from "../BasketInput/BasketInput";
import "./BasketModal.sass";

const BasketModal = (props) => {
  // console.log(JSON.parse(localStorage.getItem("basketData")));
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
    setTimeout(() => {
      props.setShowBasketModal(false);
    }, 500);
  };

  // const [clearShoppingCart, setClearShoppingCart] = useState(false);

  const toggleBasketModalViewCleanCart = () => {
    props.setBasketData([]);
    localStorage.removeItem("basketData");
    props.setShowBasketModal(false);
  };

  const toggleBasketModalViewContinue = () => {
    props.setShowBasketModal(false);
  };

  // const countPrice = (Prodprice, id) => {
  //   const count = searchaItemCount(id);
  //   const prevPrice = Prodprice.replace("$", "").split(".")[0];
  //   const resultPrice = "$" + prevPrice * count + ".00";
  //   return resultPrice;
  // };

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

  // console.log(JSON.parse(localStorage.getItem("basketData")));

  // console.log(typeof JSON.parse(localStorage.getItem("basketData"))); // объект
  // console.log("basketData"); // [1, 2, 3]

  // props.setBasketData(JSON.parse(localStorage.getItem("basketData")));
  // console.log(props.basketData);
  const test_basket_data = JSON.parse(localStorage.getItem("basketData"));
  // console.log(JSON.parse(localStorage.getItem("basketData")));
  const newTestBasketData = test_basket_data;
  // console.warn("newTestBasketData", newTestBasketData);

  const dispatch= useDispatch() 
  const basket = useSelector(state => state.basket.basket)
  console.log(basket)

  const GET_FROM_BASKET = (id) => {
    dispatch({type: 'GET_FROM_BASKET', payload: id})
  }

  return (
    <div className="BasketModalGeneral">
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="BasketModalContainer">
          {basket.length === 0 && modalThanks && (
            <div className="BasketModalEmpty">Thanks for purchase</div>
          )}
          {localStorage.getItem("basketData").length === 0 && !modalThanks ? (
            <div className="BasketModalEmpty">No products in cart</div>
          ) : localStorage.getItem("basketData") === null ? null : (
            <>
              {basket.map((prod) => {
                return (
                  <div className="BasketProdContainer" key={prod.id}>
                    <img src={prod.images[0]} alt="img"></img>
                    <span>{prod.title.slice(0, 15)}</span>
                    <h1>{prod.newPrice}</h1>
                    <BasketInput
                      onChange={(event) => changeInput(prod.id, event)}
                      number={prod.count}
                      {...searchaItemCount}
                      onClick={(event) =>
                        changeCost(prod.id, event, prod.count)
                      }
                    />
                    <div className="BasketProdContainerTotalPrice">
                      {/* {countPrice(prod.price, prod.id)} */}
                    </div>
                    <div
                      className="BaskedProdCancel"
                      // onClick={() => removeFromBasket(prod.id)}
                      onClick={() => GET_FROM_BASKET(prod.id)}
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
                  <Link to="/checkout" className="ContactUsInform">
                    <BasketButton
                      text={"Continue Purchase"}
                      onClick={toggleBasketModalViewIfPurchase}
                    />
                  </Link>
                </div>
              )}
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
