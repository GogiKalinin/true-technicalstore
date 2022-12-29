import React from "react";
import DigitalButton from "../../Components/atoms/DigitalButton/DigitalButton";
import { DigitalInput } from "../../Components/atoms/DigitalInput/DigitalInput";
import { DigitalRadio } from "../../Components/atoms/DigitalRadio/DigitalRadio";
import { MiniBasket } from "../../Components/molecules/MiniBasket/MiniBasket";
import "./Checkout.sass";

export const Checkout = () => {
  return (
    <div className="CheckoutContainer">
      <div className="CheckoutTop">
        <h1>Checkout</h1>
        <DigitalButton text="Sign In" />
      </div>
      <div className="CheckoutMain">
        <div className="CheckoutLeft">
          <div className="CheckoutLeftInputsContainer">
            <DigitalInput text="Email Address" />
            <DigitalInput text="First Name" />
            <DigitalInput text="Last Name" />
            <DigitalInput text="Company" />
            <DigitalInput text="Street Address" />
            <DigitalInput text="City" />
            <DigitalInput text="State/Province" />
            <DigitalInput text="Zip/Postal Code" />
            <DigitalInput text="Country" />
            <DigitalInput text="Phone Number" />
          </div>
          <DigitalRadio />
        </div>
        <div className="CheckoutRight">
          <MiniBasket />
        </div>
      </div>
    </div>
  );
};
