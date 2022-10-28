import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import iMacBlue from "./assets/ProductImages/imacBlue.jpg";
import iMacPink from "./assets/ProductImages/imacPink.jpg";
import macBookGold from "./assets/ProductImages/macbookGold.jpg";
import macBookGrey from "./assets/ProductImages/macbookGrey.jpg";
import FavouriteProducts from "./Components/FavouriteProducts/FavouriteProducts";
import { selectNavItem } from "./tools/filterCategory";
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

  const productArray = [
    {
      id: 0,
      name: "ZX Spectrum",
      image: Planshet,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$499.00",
      newPrice: "$499.00",
      category: "Desktop PCs",
      PageImage: PageImage,
      colors: [
        { id: 0, color: "#afeeee", image: iMacBlue },
        { id: 1, color: "#ffc0cb", image: iMacPink },
      ],
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
      colors: [
        { id: 0, color: "#afeeee", image: iMacBlue },
        { id: 1, color: "#ffc0cb", image: iMacPink },
      ],
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
      colors: [
        { id: 0, color: "#afeeee", image: iMacBlue },
        { id: 1, color: "#ffc0cb", image: iMacPink },
      ],
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
      colors: [
        { id: 0, color: "#afeeee", image: iMacBlue },
        { id: 1, color: "#ffc0cb", image: iMacPink },
      ],
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
      colors: [
        { id: 0, color: "#afeeee", image: iMacBlue },
        { id: 1, color: "#ffc0cb", image: iMacPink },
      ],
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
      colors: [
        { id: 0, color: "#afeeee", image: iMacBlue },
        { id: 1, color: "#ffc0cb", image: iMacPink },
      ],
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
      colors: [
        { id: 0, color: "#afeeee", image: iMacBlue },
        { id: 1, color: "#ffc0cb", image: iMacPink },
      ],
    },
    {
      id: 7,
      name: "ZX Spectrum",
      image: Planshet,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
      category: "Repairs",
      PageImage: PageImage,
      colors: [
        { id: 0, color: "#afeeee", image: iMacBlue },
        { id: 1, color: "#ffc0cb", image: iMacPink },
      ],
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
      colors: [
        { id: 0, color: "#afeeee", image: iMacBlue },
        { id: 1, color: "#ffc0cb", image: iMacPink },
      ],
    },
    {
      id: 9,
      name: "Apple MacBook Air 13",
      image: macBookGold,
      title: "Apple MacBook Air 13 M1 256GB 2020 (MGN63) Space Gray",
      oldPrice: "$1149.00",
      newPrice: "$999.00",
      category: "Laptops",
      PageImage: PageImage,
      colors: [
        { id: 0, color: "#ffee90", image: macBookGold },
        { id: 1, color: "#c0c0c0", image: macBookGrey },
      ],
    },
    {
      id: 10,
      name: "Apple iMac M1",
      image: iMacBlue,
      title: "Apple iMac 24 Custom Purple (2021) M1 Chip Z130000N7",
      oldPrice: "$1800.00",
      newPrice: "$1600.00",
      category: "Desktop PCs",
      // colors: {
      //   black: {
      //     color: "#000",
      //     image: iMacBlue,
      //   },
      //   pink: {
      //     color: "#010",
      //     image: iMacPink,
      //   },
      // },
      colors: [
        { id: 0, color: "#afeeee", image: iMacBlue },
        { id: 1, color: "#ffc0cb", image: iMacPink },
      ],
    },
  ];

  const [allProducts, setAllProducts] = useState(productArray);

  const [showBasketModal, setShowBasketModal] = useState(false);

  const [showNavbarModul, setShowNavbarModul] = useState(false);

  const [moreAboutData, setMoreAboutData] = useState([]);

  const [basketData, setBasketData] = useState([]);

  const [favouritesData, setFavouritesData] = useState([]);

  const [countItems, setCountItems] = useState([]);

  const [showMainElements, setShowMainElements] = useState(true);

  const [showFavouriteProducts, setShowFavouriteProducts] = useState(false);

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
      //Тут ми оновлюємо глобальний countItems додаючи до нього наш новозмінений масив
      setCountItems(oldCountItems);
    }
  };
  const addNewToBusket = (new_prod) => {
    const old_busket_data = [...basketData];
    const prodFilter = old_busket_data.filter(
      (prodCheck) => prodCheck.id === new_prod.id
    );
    if (prodFilter.length === 0) {
      old_busket_data.push(new_prod);
      setBasketData(old_busket_data);
    }
    getCounerNumber(new_prod);
  };
  const addNewToFavourites = (new_prod) => {
    const old_favourites_data = [...favouritesData];
    const prodFilter = old_favourites_data.filter(
      (prodCheck) => prodCheck.id === new_prod.id
    );
    if (prodFilter.length === 0) {
      old_favourites_data.push(new_prod);
      setFavouritesData(old_favourites_data);
    }
    getCounerNumber(new_prod);
  };

  const location = useLocation();
  console.log("location", location);

  useEffect(() => {
    const nowCategory = localStorage.getItem("nowCategory");
    console.log("nowCategory", typeof nowCategory);
    if (nowCategory !== null) {
      selectNavItem(
        setShowMainElements,
        productArray,
        nowCategory,
        setAllProducts,
        navigationItems,
        setNavigationItems
      );
    }
  }, []);

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
        showFavouriteProducts={showFavouriteProducts}
        setShowFavouriteProducts={setShowFavouriteProducts}
      />
      {showBasketModal ? (
        <BasketModal
          countItems={countItems}
          basketData={basketData}
          setBasketData={setBasketData}
          setShowBasketModal={setShowBasketModal}
        />
      ) : null}{" "}
      {showFavouriteProducts ? (
        <FavouriteProducts
          countItems={countItems}
          basketData={basketData}
          setBasketData={setBasketData}
          setShowFavouriteProducts={setShowFavouriteProducts}
          favouritesData={favouritesData}
          setFavouritesData={setFavouritesData}
        />
      ) : null}{" "}
      <Routes>
        <Route
          path="/product"
          element={
            <ProductPage
              basketData={basketData}
              setBasketData={setBasketData}
              productArray={productArray}
              moreAboutData={moreAboutData}
              allProducts={allProducts}
            />
          }
        />
        <Route
          path="/"
          element={
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
              favouritesData={favouritesData}
              setFavouritesData={setFavouritesData}
              addNewToFavourites={addNewToFavourites}
            />
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
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
