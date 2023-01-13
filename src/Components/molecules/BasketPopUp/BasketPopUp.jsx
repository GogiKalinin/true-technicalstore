import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Mail } from "../../../Images/ProductPage/ProductPage";
import { prepareTitle } from "../../../tools/prepareTitle";
import { Logo } from "../../Navbar/Logo";
import "./BasketPopUp.sass";

export const BasketPopUp = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  return (
    <div className="BasketPopUpContainer">
      <div className="BasketPopUp">
        {basket.length > 0 && (
          <div className="slide-container">
            <div className="slide">
              <div className="slide-content">
                  {prepareTitle(basket)}
              </div>
              <div className="slide-header">{basket.length}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
