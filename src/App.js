import { useState } from "react";
import "./App.sass";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import PreFooter from "./Components/PreFooter/PreFooter";
import Footer from "./Components/Footer/Footer";
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
import PageImage from "./assets/ProductImages/ProductPageImage.png";
import { Home } from "./pages/home";
import { ProductPage } from "./pages/ProductPage/ProductPage";
// import { ProductPage } from "./pages/ProductPage";
// import { NavLink, Route, Router } from "react-router-dom";
// import { ProductPage } from "./pages/ProductPage";

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
      id: 6,
      name: "Repairs",
      active: false,
    },
  ]);

  console.log("navigationItems", navigationItems);

  const productArray = [
    {
      id: 0,
      name: "ZX Spectrum",
      image: Planshet,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$499.00",
      newPrice: "$499.00",
      category: "All Other Products",
      PageImage: PageImage,
    },
    {
      id: 1,
      name: "ZX Spectrum",
      image: Proc,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$799.00",
      newPrice: "$799.00",
      category: "Desktop PCs",
      PageImage: PageImage,
    },
    {
      id: 2,
      name: "ZX Spectrum",
      image: Proc1,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "Networking Devices",
      PageImage: PageImage,
    },
    {
      id: 3,
      name: "ZX Spectrum",
      image: Laptop1,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "Laptops",
      PageImage: PageImage,
    },
    {
      id: 4,
      name: "ZX Spectrum",
      image: Laptop2,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "Laptops",
      PageImage: PageImage,
    },
    {
      id: 5,
      name: "ZX Spectrum",
      image: Laptop3,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "Laptops",
      PageImage: PageImage,
    },
    {
      id: 6,
      name: "ZX Spectrum",
      image: Proc,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "Repairs",
      PageImage: PageImage,
    },
    {
      id: 7,
      name: "ZX Spectrum",
      image: Planshet,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "All Other Products",
      PageImage: PageImage,
    },
    {
      id: 8,
      name: "ZX Spectrum",
      image: Proc,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "Desktop PCs",
      PageImage: PageImage,
    },
    {
      id: 9,
      name: "ZX Spectrum",
      image: Planshet,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "All Other Products",
      PageImage: PageImage,
    },
  ];
  const [allProducts, setAllProducts] = useState(productArray);

  const [showBasketModal, setShowBasketModal] = useState(false);

  const [showNavbarModul, setShowNavbarModul] = useState(false);

  const [moreAboutData, setMoreAboutData] = useState([]);
  console.log("moreAboutData", moreAboutData);

  const [basketData, setBasketData] = useState([]);

  const [countItems, setCountItems] = useState([]);

  const [showMainElements, setShowMainElements] = useState(true);

  const [changePage, setChangePage] = useState("main");

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

  // const page = "main";
  const page = "ProductPage";

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
        setChangePage={setChangePage}
        changePage={changePage}
      />
      {/* {page === "main" && (
        <Home
          showMainElements={showMainElements}
          navigationItems={navigationItems}
          setAllProducts={setAllProducts}
          productArray={productArray}
          setShowMainElements={setShowMainElements}
          setNavigationItems={setNavigationItems}
          basketData={basketData}
          addNewToBusket={addNewToBusket}
          allProducts={allProducts}
        />
      )} */}
      {changePage === "main" && (
        <Home
          showMainElements={showMainElements}
          navigationItems={navigationItems}
          setAllProducts={setAllProducts}
          productArray={productArray}
          setShowMainElements={setShowMainElements}
          setNavigationItems={setNavigationItems}
          basketData={basketData}
          addNewToBusket={addNewToBusket}
          allProducts={allProducts}
          moreAboutData={moreAboutData}
          setMoreAboutData={setMoreAboutData}
        />
      )}
      {changePage === "ProductPage" && (
        <ProductPage
          setBasketData={setBasketData}
          productArray={productArray}
          moreAboutData={moreAboutData}
        />
      )}
      {changePage === "main" && <Footer />}
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
// newBasketData.push({ ...props.basketData[i], count: newCount });

// УНИВЕРСАЛЬНОЕ ПОСОБИЕ ПО ПУШУ НА ГИТ [ХАБ]

// git add .
// Замість "." ти можеш додати файли які змінив і хочеш додати у ГІТ (git add App.jsx App.sass) (git add ./src/Components/SomeFolder)

// git commit -m "опис змін тих файлів які додаєш у ГІТ"

// git push
// "Пуш" на ГІТ

// баг? При нажатии на рейтинговые звезды товара этот товар зачисляется в массив корзины

// Ликвидировать пункт other products (navbar и т д)
// Приколотить футер на место
// Страница продукта
// Поправить верстку баннер! все остальное!

// Логика отображения в странице продукта выбранного продукта

// телефон все
