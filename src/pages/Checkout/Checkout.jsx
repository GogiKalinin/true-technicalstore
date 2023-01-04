import React from "react";
import { useState } from "react";
import DigitalButton from "../../Components/atoms/DigitalButton/DigitalButton";
import { DigitalInput } from "../../Components/atoms/DigitalInput/DigitalInput";
import { DigitalRadio } from "../../Components/atoms/DigitalRadio/DigitalRadio";
import { MiniBasket } from "../../Components/molecules/MiniBasket/MiniBasket";
import {
  activeRadio,
  unactiveRadio,
} from "../../Images/atomsImages/DigitalRadio";
import "./Checkout.sass";

export const Checkout = () => {
  const userCheckoutInitials = {
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    streetAdress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    number: "",
    receiving: ''
  };

  const userCheckoutNew = JSON.parse(localStorage.getItem("emailValue"));
  console.log(userCheckoutNew);
  const [currentUserData, setCurrentUserData] = useState(userCheckoutInitials);
  const listArray = [
    {
      // id: 0,
      id: "email",
      title: "Email Address",
      name: "email",
      type: "text",
      dropdown: false,
      dropdownType: "none",
    },
    {
      // id: 1,
      id: "firstName",
      title: "First Name",
      name: "code",
      type: "text",
      dropdown: false,
      dropdownType: "none",
    },
    {
      id: "lastName",
      title: "Last Name",
      name: "password",
      type: "text",
      dropdown: false,
      dropdownType: "none",
    },
    {
      id: "company",
      title: "Company",
      name: "password_confirm",
      type: "text",
      dropdown: false,
      dropdownType: "none",
    },
    {
      id: "streetAdress",
      title: "Street Address",
      name: "password_confirm",
      type: "text",
      dropdown: false,
      dropdownType: "none",
    },
    {
      id: "city",
      title: "City",
      name: "password_confirm",
      type: "text",
      dropdown: false,
      dropdownType: "none",
    },
    {
      id: "state",
      title: "State/Province",
      name: "password_confirm",
      type: "text",
      dropdown: false,
      dropdownType: "states",

      states: [
        {
          state: "Scotland",
          id: 1,
        },
        {
          state: "Texas",
          id: 2,
        },
        {
          state: "Tibet",
          id: 3,
        },
      ],
    },
    {
      id: "postalCode",
      title: "Zip/Postal Code",
      name: "password_confirm",
      type: "text",
      dropdown: false,
      dropdownType: "none",
    },
    {
      id: "country",
      title: "Country",
      name: "password_confirm",
      type: "text",
      dropdown: false,
      dropdownType: "countries",
      countries: [
        {
          country: "england",
          id: 1,
        },
        {
          country: "usa",
          id: 2,
        },
        {
          country: "china",
          id: 3,
        },
      ],
    },
    {
      id: "number",
      title: "Phone Number",
      name: "password_confirm",
      type: "text",
      dropdown: false,
      dropdownType: "none",
    },
  ];
  const [forward, setForward] = useState(false);
  // console.log(forward)
  // console.warn(currentUserData)
  console.log(userCheckoutInitials.name);
  console.log(listArray[8].countries);

  // console.log(document.getElementById('email').id)
  // console.log(document.getElementById('email').id)
  // console.log(userCheckoutInitials[0])
  const getInputValue = () => {
    userCheckoutInitials.email = document.getElementById("email").value;
    userCheckoutInitials.firstName = document.getElementById("firstName").value;
    userCheckoutInitials.lastName = document.getElementById("lastName").value;
    userCheckoutInitials.company = document.getElementById("company").value;
    userCheckoutInitials.streetAdress =
      document.getElementById("streetAdress").value;
    userCheckoutInitials.city = document.getElementById("city").value;
    userCheckoutInitials.state = document.getElementById("state").value;
    userCheckoutInitials.postalCode =
      document.getElementById("postalCode").value;
    userCheckoutInitials.country = document.getElementById("country").value;
    userCheckoutInitials.number = document.getElementById("number").value;
    if (document.getElementById("email").value !== null) {
      localStorage.setItem("emailValue", JSON.stringify(userCheckoutInitials));
      }
    };

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
            {listArray.map((arr) => {
              return (
                <div>
                <DigitalInput
                  title={arr.title}
                  dropdown={arr.dropdown}
                  type={arr.type}
                  id={arr.id}
                  onChange={getInputValue}
                  value={userCheckoutNew[arr.id]}
                  dropdownCountries={listArray[8].countries}
                  dropdownStates={listArray[6].states}
                  dropdownType={arr.dropdownType}
                />
              </div>
              );
            })}
          </div>
          <DigitalRadio
            title="Standard Rate"
            image={activeRadio}
            conditions="Price may vary depending on the item/destination. Shop Staff will contact you. $21.00"
            price="$21.00"
          />
          <DigitalRadio
            title="Pickup from store"
            image={unactiveRadio}
            conditions="1234 Street Adress City Address, 1234"
            price="$0.00"
          />
          <div className="CheckoutLeftGoToNext">
            <DigitalButton
              text="Next"
              background="#0156FF"
              color="white"
              onClick={() => setForward(!forward)}
            />
          </div>
        </div>
        <div className="CheckoutRight">
          <MiniBasket />
        </div>
      </div>
    </div>
  );
};
