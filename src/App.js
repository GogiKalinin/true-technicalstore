import { useState } from "react";
import "./App.sass";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import PreFooter from "./Components/PreFooter/PreFooter";
import Footer from "./Components/Footer/Footer";
import BannerSlider from "./Components/BannerSlider/BannerSlider";
import BasketModal from "./Components/BasketModal/BasketModal";
import NewProducts from "./Components/NewProducts/NewProducts";
import Quote from "./Components/Quote/Quote";
import MyBannerSlider from "./Components/MyBannerSlider/MyBannerSlider";
import BasketInput from "./Components/BasketInput/BasketInput";

const App = () => {
  // const array = [
  //   { name: "serduck", gender: "boy" },
  //   { name: "dimochka", gender: "gay" },
  //   { name: "dianOchka", gender: "lesbian" },
  //   { name: "zhenia", gender: "boy" },
  // ];
  // array.filter((element) => console.log("element", element));

  const [showBasketModal, setShowBasketModal] = useState(false);

  const [showNavbarModul, setShowNavbarModul] = useState(false);

  // console.log("app search", showNavbarModul);
  // console.log("app search", setShowNavbarModul);
  // console.log("app search", useState);
  const [basketData, setBasketData] = useState([]);
  console.log("basketData", basketData);
  const [countItems, setCountItems] = useState([]);
  // {
  //  id: someProductId,
  //  count: count product with this id,
  // }
  const getCounerNumber = (new_prod) => {
    const id = new_prod.id;
    let oldCountItems = [...countItems];
    // Перевіряємо чи масив пустий
    if (oldCountItems.length === 0) {
      //Якщо так, то додаємо туди об'єкт з полями id(клікнутого елемента) та стандартним значенням count 1
      oldCountItems.push({ id, count: 1 });
      //Тут ми оновлюємо глобальний countItems додаючи до нього наш новозмінений масив
      setCountItems(oldCountItems);
      //інакше (якщо масив не порожній)
    } else {
      //Тут ми перевіряємо чи наш елемент є в таблиці
      for (let i = 0; i < oldCountItems.length; i++) {
        //Якщо є, то доаємо count на один
        if (oldCountItems[i].id === id) {
          oldCountItems[i].count = oldCountItems[i].count + 1;
        }
      }
      //Тут ми також перевіряємо чи є наш елемент у таблиці
      const elementsWithClickedId = oldCountItems.filter(
        (element) => element.id === id
      );
      //Якщо немає
      if (elementsWithClickedId.length === 0) {
        //Додаємо цей елемент
        oldCountItems.push({ id, count: 1 });
      }
      // console.log("elementsWithClickedId", elementsWithClickedId);
      //Тут ми оновлюємо глобальний countItems додаючи до нього наш новозмінений масив
      setCountItems(oldCountItems);
    }
  };
  // console.log("count items", countItems);
  // console.log("basketData", basketData);
  const addNewToBusket = (new_prod) => {
    const old_busket_data = [...basketData];
    const prodFilter = old_busket_data.filter(
      (prodCheck) => prodCheck.id === new_prod.id
    );
    if (prodFilter.length === 0) {
      old_busket_data.push(new_prod);
      setBasketData(old_busket_data);
    }
    // console.log("old_busket_data", old_busket_data);
    getCounerNumber(new_prod);
    // console.log("old_busket_data", old_busket_data);
    // console.log("addNewToBusket", new_prod);
  };
  return (
    <div className="App">
      <Header
        setShowBasketModal={setShowBasketModal}
        showBasketModal={showBasketModal}
        setShowNavbarModul={setShowNavbarModul}
        showNavbarModul={showNavbarModul}
        basketDataLength={basketData.length ? true : false}
      />
      <div className="Main">
        {/* <BannerSlider /> */}
        <MyBannerSlider />
        <NewProducts />
        <Product basketData={basketData} setBasketData={addNewToBusket} />
        <Quote />
        <PreFooter />
      </div>
      <Footer />
      {showBasketModal ? (
        <BasketModal
          countItems={countItems}
          basketData={basketData}
          setBasketData={setBasketData}
          setShowBasketModal={setShowBasketModal}
        />
      ) : null}{" "}
    </div>
  );
};

export default App;

// 1. Добавить кнопку удаления для КАЖДОГО товара модального окна DONE

// 2. Добавить логику удаления товара из корзины при нажатии на соответствующую кнопку DONE

// 3. Добавить редактор количества товара (инпут + кнопки) DONE

// 4. Добавить компонент кнопки "Continue shopping", при клике закрыть модальное окно

// 5 .Добавить кнопку "Clear Shopping Cart" при клике очистить массив корзины и закрывает модальное окно

// 6 .Добавить кнопку "Purchase" при клике очищает массив и вместо выбранных товаров большим шрифтом

// "Thanks for sale" на 3 секунды и закрывает модальное окно 

// 7 .Если корзина товаров пуста крупным шрифтом "No products in cart" на 2 сек и закрывает модальное окно DONE

// src={require("./Userpic.png")}
// onClick={() => changeStarState(item.id)}
//.slice(0,10)
//.filter
//.replace
//.split
//onClick={() => removeFromBasket(prod.id)}

// УНИВЕРСАЛЬНОЕ ПОСОБИЕ ПО ПУШУ НА ГИТ [ХАБ]

// git add .
// Замість "." ти можеш додати файли які змінив і хочеш додати у ГІТ (git add App.jsx App.sass) (git add ./src/Components/SomeFolder)

// git commit -m "опис змін тих файлів які додаєш у ГІТ"

// git push
// "Пуш" на ГІТ
