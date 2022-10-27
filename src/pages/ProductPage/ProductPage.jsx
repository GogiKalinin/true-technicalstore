import { useState } from "react";
import BasketInput from "../../Components/BasketInput/BasketInput";
import ChoseColor from "../../Components/ChoseColor/ChoseColor";
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

  const viewChosenColor = () => {};

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

  const ChosenProduct = [props.moreAboutData];
  console.log("ChosenProduct", ChosenProduct);

  // const addBasketFromProductPage = () => {
  //   for (let i = 0; i < props.allProducts.length; i++) {
  //     if (props.moreAboutData.id === props.allProducts[i].id) {
  //       props.setBasketData(props.allProducts[i]);
  //     }
  //   }
  // };

  // const addBasketFromProductPage = () => {
  //   props.setBasketData([...props.basketData, props.moreAboutData]);
  // };

  const productColors = props.moreAboutData.colors;
  console.log("colors", productColors);

  console.log("ChosenProduct.colors", props.moreAboutData.colors);

  const [getImage, setGetImage] = useState(productColors[0].image);

  const changeImage = (id) => {
    for (let i = 0; i < productColors.length; i++) {
      if (id === productColors[i].id) {
        setGetImage(productColors[i].image);
      }
    }
  };

  return (
    <div className="ProductPage">
      {ChosenProduct.map((prod) => {
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
                  // onClick={addBasketFromProductPage}
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
                        {productColors.map((color) => {
                          return (
                            <>
                              <ChoseColor
                                onClick={() => changeImage(color.id)}
                                background={color.color}
                                key={color.id}
                              />
                            </>
                          );
                        })}
                      </div>
                      {/* <div className="ColorsChooseColor" alt="choose color">
                          {Braun}
                        </div>
                        <div className="ColorsChooseColor" alt="choose color">
                          {Bezh}
                        </div>
                        <div className="ColorsChooseColor" alt="choose color">
                          {Gray}
                        </div> */}
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
                  <img
                    className="ProductPageProductVisualImage"
                    src={getImage}
                    alt={props.moreAboutData.name}
                  ></img>
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
