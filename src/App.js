//@ts-nocheck
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
import { Checkout } from "./pages/Checkout/Checkout";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteProducts } from "./pages/FavoriteProducts/FavoriteProducts";
import { calculatePrice } from "./tools/calculatePrice";

const App = () => {
  const [navigationItems, setNavigationItems] = useState([
    {
      id: 0,
      name: "smartphones",
      active: false,
    },
    {
      id: 1,
      name: "laptops",
      active: false,
    },
    {
      id: 2,
      name: "fragrances",
      active: false,
    },
    {
      id: 3,
      name: "skincare",
      active: false,
    },
    {
      id: 4,
      name: "groceries",
      active: false,
    },
    {
      id: 5,
      name: "home-decoration",
      active: false,
    },
  ]);
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const nowCategory = localStorage.getItem("nowCategory");
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
    fetch("https://dummyjson.com/products")
      // .then((res) => console.log(res.products))
      .then((res) => res.json())
      .then((res) => setData(res.products));
  }, []);

  const productArray = data;
  // console.log(productArray)
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
    if (oldCountItems.length === 0) {
      oldCountItems.push({ id, count: 1 });
      setCountItems(oldCountItems);
    } else {
      for (let i = 0; i < oldCountItems.length; i++) {
        if (oldCountItems[i].id === id) {
          oldCountItems[i].count = oldCountItems[i].count + 1;
        }
      }
      const elementsWithClickedId = oldCountItems.filter(
        (element) => element.id === id
      );
      if (elementsWithClickedId.length === 0) {
        oldCountItems.push({ id, count: 1 });
      }
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

  useEffect(() => {
    const nowCategory = localStorage.getItem("nowCategory");
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
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  }, []);

  const dispatch= useDispatch() 
  const basket = useSelector(state => state.basket.basket)
  const favoriteProducts = useSelector(state => state.favoriteProducts.favoriteProducts)
  console.log(productArray)
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
        ) : null}
        {showFavouriteProducts ? (
          <FavouriteProducts
            countItems={countItems}
            basketData={basketData}
            setBasketData={setBasketData}
            setShowFavouriteProducts={setShowFavouriteProducts}
            favouritesData={favouritesData}
            setFavouritesData={setFavouritesData}
          />
        ) : null}
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
                setShowBasketModal={setShowBasketModal}
                showBasketModal={showBasketModal}
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
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/favorite" element={<FavoriteProducts />} />
        </Routes>
        <Footer />
      </div>
      // <div className="App">
      //   <button>sercuk</button>
      // </div>
  );
};

export default App;


