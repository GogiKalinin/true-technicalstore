import React, { useState } from "react";
import "./Navbar.sass";
import { Logo } from "./Logo.jsx";
import { Basket } from "./Basket.jsx";
import { Search } from "./Search.jsx";
import { Cancel } from "./Cancel";
import "./Userpic.png";
import {
  TabletBasket,
  TabletBurger,
  TabletUser,
} from "../../TabletImages/TabletHeader/TabletNavbar";
import UniversalButton from "../UniversalButton/UniversalButton";
import UserCard from "../UserCard/UserCard";
import { Link } from "react-router-dom";
import { selectNavItem } from "../../tools/filterCategory";
import { useDispatch, useSelector } from "react-redux";
import { basketEllipse, favoriteProducts } from "../../Images/Header";
import { ModulInput } from "../atoms/ModulInput/ModulInput";

const Navbar = ({
  showBasketModal,
  setShowBasketModal,
  basketDataLength,
  productArray,
  allProducts,
  setAllProducts,
  navigationItems,
  setNavigationItems,
  setShowMainElements,
  showMainElements,
  showFavouriteProducts,
  setShowFavouriteProducts,
}) => {
  const [showNavbarModul, setShowNavbarModul] = useState(false);

  const [showUserCard, setShowUserCard] = useState(false);
  const toggleShowNavbarModul = () => {
    setShowNavbarModul(!showNavbarModul);
  };

  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);

  const toggleBasketModalView = () => {
    // if (basket.length !== 0) {
    if (!showBasketModal && !basketDataLength) {
      setShowBasketModal(true);
      setTimeout(() => {
        setShowBasketModal(false);
      }, 2000);
    } else {
      setShowBasketModal(!showBasketModal);
    }
    // }
  };

  const showAll = () => {
    const newNavigationItemsForShowAll = [];
    setAllProducts(productArray);
    setShowMainElements(true);
    for (let i = 0; i < navigationItems.length; i++) {
      if (navigationItems[i].active === true) {
        const newElement = { ...navigationItems[i], active: false };
        newNavigationItemsForShowAll.push(newElement);
      } else {
        newNavigationItemsForShowAll.push(navigationItems[i]);
      }
    }
    setNavigationItems(newNavigationItemsForShowAll);
    localStorage.removeItem("nowCategory");
  };

  return (
    <>
      <div className="Navbar">
        <div className="NavbarUniversal">
          <Link
            to={"/"}
          >
            <div
              className="NavbarLogo"
              onClick={() => {
                showAll();
              }}
            >
              <Logo />
            </div>
          </Link>
          <div
            className={showNavbarModul ? "NavbarMenuUnActive" : "Navbar__menu"}
          >
            {navigationItems.map((item) => (
              <Link to={"/"}>
                <div
                  className={
                    item.active
                      ? "Navbar__item Navbar-active__item"
                      : "Navbar__item"
                  }
                  key={item.id}
                  onClick={() =>
                    selectNavItem(
                      setShowMainElements,
                      productArray,
                      item.name,
                      setAllProducts,
                      navigationItems,
                      setNavigationItems
                    )
                  }
                  name={item.name}
                >
                  {item.name}
                </div>
              </Link>
            ))}
            <a href="google.com">
              <button className="Navbar__button">Our deals</button>
            </a>
          </div>
          <div
            className={
              showNavbarModul ? "InputModulIsActive" : "InputModuleIsUnactive"
            }
          >
            <ModulInput 
              setShowMainElements = {setShowMainElements}
              productArray = {productArray}
              setAllProducts = {setAllProducts}
              navigationItems = {navigationItems}
              setNavigationItems = {setNavigationItems}
            />
          </div>
        </div>

        <ul className="UserMenuList">
          <li className="MenuListItem">
            <div className="UserMenuSearch" onClick={toggleShowNavbarModul}>
              {showNavbarModul ? <Cancel /> : <Search />}
            </div>
          </li>

          <li className="MenuListItem">
            <div className="UserMenuBasket" onClick={toggleBasketModalView}>
              <div className="UserMenuBasketBasket">
                <Basket />
              </div>
              <div className="UserMenuBasketEllipse">
                {basketEllipse}
                <h3>{basket.length}</h3>
              </div>
            </div>
          </li>
          <div
            className="UserMenuFavoriteProducts"
            // onClick={()=>setShowUserCard(!showUserCard)}
            // onClick={toggleBasketModalView}
          >
            {/* {getPermissionToShowByArrayLength2(basket) && */}
            <Link to="/favorite">{favoriteProducts}</Link>
            {/* }  */}
          </div>
          <li className="MenuListItem">
            <img
              src={require("./Userpic.png")}
              alt="userpic"
              // onClick={userCardSwitch}
            ></img>
          </li>
        </ul>
        {showUserCard && (
          <UserCard
            showFavouriteProducts={showFavouriteProducts}
            setShowFavouriteProducts={setShowFavouriteProducts}
          />
        )}
      </div>
      <div className="TabletNavbar">
        <a className="TabletNavbarBurger" href="google.com">
          {TabletBurger}
        </a>
        <input
          className="TabletNavbarInput"
          placeholder={"Search here"}
          type={"text"}
        >
          {/* {InputImage} */}
        </input>
        <div className="TabletNavbarIcons">
          <div className="TabletNavbarBasket" onClick={toggleBasketModalView}>
            {TabletBasket}
          </div>
          <a className="TabletNavbarUser" href="google.com">
            {TabletUser}
          </a>
        </div>
      </div>
    </>
  );
};
export default Navbar;
