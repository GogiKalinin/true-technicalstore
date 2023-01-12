import { BasketPopUp } from "../../Components/molecules/BasketPopUp/BasketPopUp";
import MyBannerSlider from "../../Components/MyBannerSlider/MyBannerSlider";
import NewProducts from "../../Components/NewProducts/NewProducts";
import PreFooter from "../../Components/PreFooter/PreFooter";
import Product from "../../Components/Product/Product";
import Quote from "../../Components/Quote/Quote";
import "./index.sass";

export const Home = ({
  showMainElements,
  navigationItems,
  setAllProducts,
  productArray,
  setShowMainElements,
  setNavigationItems,
  basketData,
  addNewToBusket,
  allProducts,
  setMoreAboutData,
  moreAboutData,
  favouritesData,
  setFavouritesData,
  addNewToFavourites,
}) => {
  return (
    <div className="Main">
      {showMainElements ? (
        <>
          <MyBannerSlider />
        </>
      ) : null}
      <NewProducts
        navigationItems={navigationItems}
        setAllProducts={setAllProducts}
        productArray={productArray}
        setShowMainElements={setShowMainElements}
        setNavigationItems={setNavigationItems}
      />
        <BasketPopUp />
      <Product
        basketData={basketData}
        setBasketData={addNewToBusket}
        //
        setFavouritesData={addNewToFavourites}
        //
        allProducts={allProducts}
        moreAboutData={moreAboutData}
        setMoreAboutData={setMoreAboutData}
        favouritesData={favouritesData}
        // setFavouritesData={setFavouritesData}
      />
      {showMainElements ? (
        <>
          <Quote />
          <PreFooter />
        </>
      ) : null}
    </div>
  );
};
