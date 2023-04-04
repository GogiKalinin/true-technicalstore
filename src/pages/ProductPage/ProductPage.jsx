import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketInput from "../../Components/BasketInput/BasketInput";
import ChoseColor from "../../Components/ChoseColor/ChoseColor";
import MyBannerSlider from "../../Components/MyBannerSlider/MyBannerSlider";
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
  const [changeParagraph, setChangeParagraph] = useState("About Product");

  const [activeParagraphSwitch, setActiveParagraphSwitch] =
    useState("About Product");

  const [choseColor, setChoseColor] = useState();

  const ChangeParagraphAboutProduct = () => {
    setChangeParagraph("About Product");
    setActiveParagraphSwitch("About Product");
  };
  const ChangeParagraphDetails = () => {
    setChangeParagraph("Details");
    setActiveParagraphSwitch("Details");
  };
  const ChangeParagraphSpecs = () => {
    setChangeParagraph("Specs");
    setActiveParagraphSwitch("Specs");
  };

  localStorage.setItem(
    "favourityProducts",
    JSON.stringify(props.moreAboutData)
  );

  localStorage.setItem(
    "choseColor",
    JSON.stringify(props.moreAboutData.colors)
  );

  const test_more_about_data = JSON.parse(localStorage.getItem('moreAboutData'))

  const addBasketFromProductPage = () => {
    props.setShowBasketModal(true);
  }
  const dispatch= useDispatch() 
  const basket = useSelector(state => state.basket.basket)
  console.log(basket.length)
  const addProductToBasket = (prod) => {
    const product = {
      prod,
      id: Date.now()
    }
    console.log(product)
    
      if (basket.length === 0) {
        dispatch({type: 'ADD_TO_BASKET', payload: prod})
      }
      if (basket.length > 0) {
        for (let i = 0; i < basket.length; i++) {
          if (prod.id !== basket[i].id) {
            console.log(prod.title)
            console.log('sercuck')
            dispatch({type: 'ADD_TO_BASKET', payload: prod})
          }
      }
    }
    // }
  }

  return (
    <div className="ProductPage">
      {[test_more_about_data].map((prod) => {
        return (
          <>
            <div className="ProductPageNavigation" key={prod.id}>
              <div className="ProductPageNavigationAbout">
                <span className="ProductPageNavigationAboutItems">
                  <p
                    onClick={ChangeParagraphAboutProduct}
                    className={
                      activeParagraphSwitch === "About Product"
                        ? "SwitchItemActive"
                        : "SwitchItem"
                    }
                  >
                    About Product
                  </p>
                  <p
                    onClick={ChangeParagraphDetails}
                    className={
                      activeParagraphSwitch === "Details"
                        ? "SwitchItemActive"
                        : "SwitchItem"
                    }
                  >
                    Details
                  </p>
                  <p
                    onClick={ChangeParagraphSpecs}
                    className={
                      activeParagraphSwitch === "Specs"
                        ? "SwitchItemActive"
                        : "SwitchItem"
                    }
                  >
                    Specs
                  </p>
                </span>
              </div>
              <div className="ProductPageNavigationPurchase">
                <p className="ProductPrice">
                  On Sale from {props.moreAboutData.newPrice}
                </p>
                <BasketInput />
                <UniversalButton
                  text="Add to Cart"
                  onClick={()=>addProductToBasket(prod)}
                />
              </div>
            </div>
            <div className="ProductPageInformation">
              <div className="ProductPageAboutProduct">
                <div className="ProductPageAboutProductMain">
                  <p className="ProductPageAboutProductMainWay">
                    Home › {prod.category} › {prod.name}
                  </p>
                  <p className="ProductPageAboutProductMainProductName">
                    {prod.name}
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
                      {prod.title}
                    </p>
                    <div className="ProductPageAboutProductMainProductMoreAbout">
                      <div className="ProductPageAboutProductMainProductMoreAboutColors">
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      changeParagraph === "Details"
                        ? "ProductPageDetails"
                        : "Nothing"
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
                  >
                    <div className="SpecsChart">
                      <div className="SpecsChartItem">
                        <div className="SpecsChartItemLeft">CPU</div>
                        <div className="SpecsChartItemRight">N/A</div>
                      </div>
                      <div className="SpecsChartItem">
                        <div className="SpecsChartItemLeft">Featured</div>
                        <div className="SpecsChartItemRight">N/A</div>
                      </div>
                      <div className="SpecsChartItem">
                        <div className="SpecsChartItemLeft">I/O Ports</div>
                        <div className="SpecsChartItemRight">N/A</div>
                      </div>
                    </div>
                  </div>
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
                   <MyBannerSlider bannerImages = {prod.images}/>
                </div>
                <div className="ProductPageViualBottom">
                  {Zip}
                  <p>
                    own it now, up to 6 months interest free{" "}
                    <span>learn more</span>
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
