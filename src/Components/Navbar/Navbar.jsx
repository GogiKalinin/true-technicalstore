import React, { useState } from "react";
import "./Navbar.sass";
import { Logo } from "./Logo.jsx";
import { Basket } from "./Basket.jsx";
import { Search } from "./Search.jsx";
import "./Userpic.png";

const Navbar = (
  { showBasketModal, setShowBasketModal },
  { showSearchBar, setShowSearchBar }
) => {
  const toggleSearchBarView = () => {
    setShowBasketModal(!showBasketModal);
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
    <div className="Navbar">
      <ul className="Navbar__menu">
        <a className="Navbar__item-MainIcon" href="google.com">
          <a className="Navbar__logo" href="#">
            <Logo />
          </a>
        </a>
        {navigationItems.map((item) => (
          <li
            className={
              item.active ? "Navbar__item Navbar-active__item" : "Navbar__item"
            }
            key={item.id}
            onClick={() => selectNavItem(item.name)}
            name={item.name}
          >
            {item.name}
          </li>
        ))}

        <a href="google.com">
          <button className="Navbar__button">Our deals</button>
        </a>
      </ul>

      <ul className="UserMenuList">
        <li className="MenuListItem">
          <a href="google.com">
            <div className="UserMenuSearch" onClick={toggleSearchBarView}>
              <Search />
            </div>
          </a>
        </li>
        <li className="MenuListItem">
          <div className="UserMenuSearch" onClick={toggleSearchBarView}>
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
  );
};
export default Navbar;
