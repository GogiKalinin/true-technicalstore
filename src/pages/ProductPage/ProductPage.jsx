import { useState } from "react";
import BasketInput from "../../Components/BasketInput/BasketInput";
import UniversalButton from "../../Components/UniversalButton/UniversalButton";
import {
  Bezh,
  Braun,
  Gray,
  Like,
  Mail,
  Stat,
  Zip,
} from "../../Images/ProductPage/ProductPage";
import "./ProductPage.sass";

export const ProductPage = (props) => {
  const [changeParagraph, setChangeParagraph] = useState("Details");

  const ChangeParagraphAboutProduct = () => {
    setChangeParagraph("About Product");
  };
  const ChangeParagraphDetails = () => {
    setChangeParagraph("Details");
  };
  const ChangeParagraphSpecs = () => {
    setChangeParagraph("Specs");
  };

  return (
    <div className="ProductPage">
      <div className="ProductPageNavigation">
        <div className="ProductPageNavigationAbout">
          <span className="ProductPageNavigationAboutItems">
            <p onClick={ChangeParagraphAboutProduct}>About Product</p>
            <p onClick={ChangeParagraphDetails}>Details</p>
            <p onClick={ChangeParagraphSpecs}>Specs</p>
          </span>
        </div>
        <div className="ProductPageNavigationPurchase">
          <p className="ProductPrice">
            On Sale from {props.productArray[0].newPrice}
          </p>
          <BasketInput />
          <UniversalButton
            text="Add to Cart"
            onClick={() => props.setBasketData()}
          />
        </div>
      </div>
      <div className="ProductPageInformation">
        <div className="ProductPageAboutProduct">
          <div className="ProductPageAboutProductMain">
            <p className="ProductPageAboutProductMainWay">
              Home › Laptops › MSI WS Series
            </p>
            <p className="ProductPageAboutProductMainProductName">
              MSI MPG Trident 3
            </p>
            <p className="ProductPageAboutProductMainProductReview">
              Be the first to review this product
            </p>
            <div
              className={
                changeParagraph === "About Product"
                  ? "ProductPageAboutProduct"
                  : "Nothing"
              }
            >
              <p className="ProductPageAboutProductMainProductDescription">
                MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB
                RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and
                Mouse 3 Years Warranty Gaming Desktop
              </p>
              <div className="ProductPageAboutProductMainProductMoreAbout">
                <div className="ProductPageAboutProductMainProductMoreAboutColors">
                  <div className="ColorsChooseColor" alt="choose color">
                    {Braun}
                  </div>
                  <div className="ColorsChooseColor" alt="choose color">
                    {Bezh}
                  </div>
                  <div className="ColorsChooseColor" alt="choose color">
                    {Gray}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                changeParagraph === "Details" ? "ProductPageDetails" : "Nothing"
              }
            >
              <ul>
                <li>Intel Core i7-10700F</li>
                <li>Intel Core i7-10700F</li>
                <li>Intel Core i7-10700F</li>
                <li>Intel Core i7-10700F</li>
                <li>Intel Core i7-10700F</li>
                <li>Intel Core i7-10700F</li>
                <li>Intel Core i7-10700F</li>
                <li>Intel Core i7-10700F</li>
              </ul>
            </div>
            <div
              className={
                changeParagraph === "Specs"
                  ? "ProductPageAboutProductSpecs"
                  : "Nothing"
              }
            ></div>
            <div className="ProductPageAboutProductMainProductMoreContactUs">
              <p className="ContactUs">
                Have a Question? <span>Contact Us</span>
              </p>
              <p className="ProductCode">SKU D5515AI</p>
            </div>
          </div>

          <div className="ProductPageAboutProductMoreInfo">
            + More Information
          </div>
        </div>
        <div className="ProductPageProductVisual">
          <div className="ProductPageViualTop">
            <div className="ProductPageProductVisualForProduct">
              <div className="ProductPageProductVisualForProductLike">
                {Like}
              </div>
              <div className="ProductPageProductVisualForProductStat">
                {Stat}
              </div>
              <div className="ProductPageProductVisualForProductMail">
                {Mail}
              </div>
            </div>
            <img
              className="ProductPageProductVisualImage"
              src={props.productArray[0].PageImage}
              alt={props.productArray[0].name}
            ></img>
          </div>
          <div className="ProductPageViualBottom">
            {Zip}
            <p>
              own it now, up to 6 months interest free <a>learn more</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
