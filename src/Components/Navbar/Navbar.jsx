import React, { useState } from "react";
import "./Navbar.sass";
import { Logo } from "./Logo.jsx";
import { Basket } from "./Basket.jsx";
import { Search } from "./Search.jsx";
import { Cancel } from "./Cancel";
import "./Userpic.png";
import {
  InputImage,
  TabletBasket,
  TabletBurger,
  TabletUser,
} from "../../TabletImages/TabletHeader/TabletNavbar";

const Navbar = ({ showBasketModal, setShowBasketModal }) => {
  
  const [showNavbarModul, setShowNavbarModul] = useState(false);

  const toggleShowNavbarModul = () => {
    setShowNavbarModul(!showNavbarModul);
  };

  const toggleBasketModalView = () => {
    setShowBasketModal(!showBasketModal);
  };

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

  const selectNavItem = (name) => {
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

  return (
    <>
      <div className="Navbar">
        <div className="NavbarUniversal">
          <a className="Navbar__logo" href="#">
            <Logo />
          </a>

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
            <a href="google.com">
              <img src={require("./Userpic.png")} alt="userpic"></img>
            </a>
          </li>
        </ul>
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
