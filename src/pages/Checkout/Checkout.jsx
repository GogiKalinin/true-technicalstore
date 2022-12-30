import React from "react";
import DigitalButton from "../../Components/atoms/DigitalButton/DigitalButton";
import { DigitalInput } from "../../Components/atoms/DigitalInput/DigitalInput";
import { DigitalRadio } from "../../Components/atoms/DigitalRadio/DigitalRadio";
import { MiniBasket } from "../../Components/molecules/MiniBasket/MiniBasket";
import { activeRadio, unactiveRadio } from "../../Images/atomsImages/DigitalRadio";
import "./Checkout.sass";

export const Checkout = () => {
  return (
    <div className="CheckoutContainer">
      <div className="CheckoutTop">
        <div className="CheckoutTopTitle">
          <h1>Checkout</h1>
          <DigitalButton text="Sign In" />
        </div>
        <div className="CheckoutTopAdress">
          <h1>Shipping Address</h1>
        </div>
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
          <DigitalRadio title='Standard Rate' image={activeRadio} conditions='Price may vary depending on the item/destination. Shop Staff will contact you. $21.00' price='$21.00'/>
          <DigitalRadio title='Pickup from store' image={unactiveRadio} conditions='1234 Street Adress City Address, 1234' price='$0.00'/>
          <div className="CheckoutLeftGoToNext">
            <DigitalButton text='Next' background='#0156FF' color='white'/>
          </div>
        </div>
        <div className="CheckoutRight">
          <MiniBasket />
        </div>
      </div>
    </div>
  );
};
