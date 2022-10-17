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
import Planshet from "./assets/ProductImages/Planshet.png";
import Proc from "./assets/ProductImages/Proc.png";
import Proc1 from "./assets/ProductImages/Proc1.png";
import Laptop1 from "./assets/ProductImages/laptop1.png";
import Laptop2 from "./assets/ProductImages/laptop2.png";
import Laptop3 from "./assets/ProductImages/laptop3.png";

const App = () => {
  const [navigationItems, setNavigationItems] = useState([
    {
      id: 0,
      name: "Laptops",
      active: false,
    },
    {
      id: 1,
      name: "Desktop PCs",
      active: false,
    },
    {
      id: 2,
      name: "Networking Devices",
      active: false,
    },
    {
      id: 3,
      name: "Printers & Scanners",
      active: false,
    },
    {
      id: 4,
      name: "PC Parts",
      active: false,
    },
    {
      id: 5,
      name: "All Other Products",
      active: false,
    },
    {
      id: 6,
      name: "Repairs",
      active: false,
    },
  ]);

  const productArray = [
    {
      id: 0,
      image: Planshet,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$499.00",
      newPrice: "$499.00",
      category: "All Other Products",
    },
    {
      id: 1,
      image: Proc,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$799.00",
      newPrice: "$799.00",
      category: "Desktop PCs",
    },
    {
      id: 2,
      image: Proc1,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "Networking Devices",
    },
    {
      id: 3,
      image: Laptop1,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "Laptops",
    },
    {
      id: 4,
      image: Laptop2,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "Laptops",
    },
    {
      id: 5,
      image: Laptop3,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "Laptops",
    },
    {
      id: 6,
      image: Proc,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "Repairs",
    },
    {
      id: 7,
      image: Planshet,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "All Other Products",
    },
    {
      id: 8,
      image: Proc,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "Desktop PCs",
    },
    {
      id: 9,
      image: Planshet,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "All Other Products",
    },
  ];
  const [allProducts, setAllProducts] = useState(productArray);

  const [showBasketModal, setShowBasketModal] = useState(false);

  const [showNavbarModul, setShowNavbarModul] = useState(false);

  const [basketData, setBasketData] = useState([]);

  const [countItems, setCountItems] = useState([]);

  const [showMainElements, setShowMainElements] = useState(true);

  if (allProducts !== productArray) {
    // setShowMainElements(false);
  } else {
    // setShowMainElements(true);
  }

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
        productArray={productArray}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        setShowBasketModal={setShowBasketModal}
        showBasketModal={showBasketModal}
        setShowNavbarModul={setShowNavbarModul}
        showNavbarModul={showNavbarModul}
        basketDataLength={basketData.length ? true : false}
        navigationItems={navigationItems}
        setNavigationItems={setNavigationItems}
        setShowMainElements={setShowMainElements}
        showMainElements={showMainElements}
      />
      <div className="Main">
        {showMainElements ? (
          <>
            <MyBannerSlider />
          </>
        ) : null}
        <NewProducts />
        <Product
          basketData={basketData}
          setBasketData={addNewToBusket}
          allProducts={allProducts}
        />
        {showMainElements ? (
          <>
            <Quote />
            <PreFooter />
          </>
        ) : null}
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

// 3.4. Добавить редактор количества товара (инпут + кнопки)
//  Щоб прочитати значення з інпута ти маєш вказати атрибут onChange={(event)=>changeInput(event, id)}
// Значення інпуту зберігаються в event.target.value

//const changeInput = (event, id) => {
//  const currentValue = event.target.value
//}

// 4.3. Добавить компонент кнопки "Continue shopping", при клике закрыть модальное окно

// 5.2. Добавить кнопку "Clear Shopping Cart" при клике очистить массив корзины и закрывает модальное окно

// 6.1. Добавить кнопку "Purchase" при клике очищает массив и вместо выбранных товаров большим шрифтом

// "Thanks for sale" на 3 секунды и закрывает модальное окно

// 7. Если корзина товаров пуста крупным шрифтом "No products in cart" на 2 сек и закрывает модальное окно DONE

// 8. If any category chosed you shouldn't show banner slider, all products, quote, and prefooter.

// 9. IF you click on logo you should show all products

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

// баг? При нажатии на рейтинговые звезды товара этот товар зачисляется в массив корзины 
