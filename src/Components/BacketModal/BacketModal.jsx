import React from "react";
import "./BacketModal.sass";

const BacketModal = () => {
  return (
    <div className="BasketModalContainer">
      <h1>Serduck</h1>
    </div>
  );
};

export default BacketModal;

// Крок 1.
//     Додати клікнутий товар у basketData.
// Крок 1.1.
//     В функції selectProduct створити пустий масив.
// Крок 1.2.
//      У цей масив помістити актуальне значення backetData
//
//  Крок 1.3
//      Додати до цього (щойно створеного) метедом push
//    вибраний продукт (приходить як prod).
//
//  Крок 2.
//      Передати за допомогою props basketData до BasketModal
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
