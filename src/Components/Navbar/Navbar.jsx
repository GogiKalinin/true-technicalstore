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

  const toggleBasketModalView = () => {
    if (!showBasketModal && !basketDataLength) {
      setShowBasketModal(true);
      setTimeout(() => {
        setShowBasketModal(false);
      }, 2000);
    } else {
      setShowBasketModal(!showBasketModal);
    }
  };

  const selectNavItem = (name) => {
    setShowMainElements(false);
    const selectedCategoryElem = [];
    for (let i = 0; i < productArray.length; i++) {
      if (name === productArray[i].category) {
        selectedCategoryElem.push(productArray[i]);
      }
    }
    setAllProducts(selectedCategoryElem);

    const updatedNavigationItems = [];
    for (let i = 0; i < navigationItems.length; i++) {
      const newNavigationItem = navigationItems[i];
      if (navigationItems[i].name === name) {
        newNavigationItem.active = true;
      } else {
        newNavigationItem.active = false;
      }
      updatedNavigationItems.push(newNavigationItem);
    }
    setNavigationItems(updatedNavigationItems);
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
  };

  const userCardSwitch = () => {
    setShowUserCard(!showUserCard);
  };

  return (
    <>
      <div className="Navbar">
        <div className="NavbarUniversal">
          <Link
            to={"/"}
            className="NavbarLogo"
            // onClick={showAll}
            onClick={() => {
              showAll();
            }}
          >
            <Logo />
          </Link>
          <div
            className={showNavbarModul ? "NavbarMenuUnActive" : "Navbar__menu"}
          >
            {navigationItems.map((item) => (
              <div
                className={
                  item.active
                    ? "Navbar__item Navbar-active__item"
                    : "Navbar__item"
                }
                key={item.id}
                onClick={() => selectNavItem(item.name)}
                name={item.name}
              >
                {item.name}
              </div>
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
            <form>
              <input
                className="ModulInput"
                type={"text"}
                placeholder={"Search entiere store here..."}
              ></input>
            </form>
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
              <Basket />
            </div>
          </li>
          <li className="MenuListItem">
            <img
              src={require("./Userpic.png")}
              alt="userpic"
              onClick={userCardSwitch}
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
