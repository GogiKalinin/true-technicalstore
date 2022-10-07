import React, { useState } from "react";
import "./Product.sass";
import PlanshetImage from "../../Images/ProductImages/Planshet.png";
import ProcImage from "../../Images/ProductImages/Proc.png";
import ProcImage1 from "../../Images/ProductImages/Proc1.png";
import Stars from "./Stars/Stars";
import StarsNew from "../StarsNew/StarsNew";
// import image1 from "../../Images/ProductImages/Proc.png";
// import "../../Images/ProductImages/Proc1.png";
// import "../../Images/ProductImages/Planshet.png";
// import Stars from "./Stars/Stars";

const Product = (props) => {
  const productArray = [
    {
      id: 0,
      image: ProcImage,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$499.00",
      newPrice: "$499.00",
    },
    {
      id: 1,
      image: ProcImage1,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$799.00",
      newPrice: "$799.00",
    },
    {
      id: 2,
      image: PlanshetImage,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
    },
    {
      id: 3,
      image: PlanshetImage,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
    },
    {
      id: 4,
      image: PlanshetImage,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
    },
    {
      id: 5,
      image: PlanshetImage,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
    },
    {
      id: 6,
      image: PlanshetImage,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
    },
    {
      id: 7,
      image: PlanshetImage,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
    },
    {
      id: 8,
      image: PlanshetImage,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
    },
    {
      id: 9,
      image: PlanshetImage,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      oldPrice: "$999.00",
      newPrice: "$999.00",
    },
  ];
  // console.log("basketData", props.basketData);

  // const setClickedProduct = (prod) => {
  //   const clickedProduct = [];
  //   clickedProduct.push(prod);
  //   console.log("clickedProduct", clickedProduct);
  // };

  return (
    <div className="ProductContainer">
      {/* <div className="ProductTitle">
        <h1 className="ProductTitle-Title">New Products</h1>
        <a className="ProductTitle-SeeAll" href="google.com">
          See All New Products
        </a>
      </div> */}
      {productArray.map((prod) => {
        return (
          <div
            className={prod.active ? "Product Product-active" : "Product"}
            key={prod.id}
            // onClick={props.basketData.push(prod)}
            // onClick={() => setClickedProduct(prod)}
            onClick={() => props.setBasketData(prod)}
          >
            <div className="ProductImageContainer">
              <img className="ProductImage" src={prod.image} alt="img"></img>
            </div>
            <div className="ProductRating">
              <StarsNew />
            </div>
            <div className="ProductDescription">
              <p>{prod.title}</p>
            </div>
            <div className="ProductPrice">
              <h3 className="OldPrice">{prod.oldPrice}</h3>
              <h3 className="NewPrice">{prod.newPrice}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;

//  Крок 1.
//    При кліці на товар має викликатись функція selectProduct.
//  Крок 2.
//    У цю функцію параметром має передаватися об'єкт клікнутого товару.
//  Крок 3.
//    Використовцючи консоль лог в цій функції превірити правильність вибору товару.
//  Крок 4.
//    Використовуючи setSelectedProductItem (setState) записати це значення в selectedProductItem.

// Доробити зірочки.
