import MyBannerSlider from "../../Components/MyBannerSlider/MyBannerSlider";
import NewProducts from "../../Components/NewProducts/NewProducts";
import PreFooter from "../../Components/PreFooter/PreFooter";
import Product from "../../Components/Product/Product";
import Quote from "../../Components/Quote/Quote";

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
  changePage,
  setChangePage,
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
      <Product
        basketData={basketData}
        setBasketData={addNewToBusket}
        allProducts={allProducts}
        changePage={changePage}
        setChangePage={setChangePage}
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
