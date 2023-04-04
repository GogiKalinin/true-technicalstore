import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { Cancel } from "../../Images/Product/ProductImages";
import BasketButton from "../BasketButton/BasketButton";
import "./FavouriteProducts.sass";

const FavouriteProducts = (props) => {
  const handleClickAway = () => {
    props.setShowFavouriteProducts(false);
  };

  const removeFromFavourites = (id) => {
    const favouritesNew = [];
    for (let i = 0; i < props.favouritesData.length; i++) {
      if (id !== props.favouritesData[i].id) {
        favouritesNew.push(props.favouritesData[i]);
      }
    }
    props.setFavouritesData(favouritesNew);
  };

  const [modalThanks, setModalThanks] = useState(false);

  const toggleBasketModalViewIfPurchase = () => {
    setModalThanks(true);
    props.setFavouritesData([]);
    setTimeout(() => {
      props.setShowFavouriteProducts(false);
    }, 3000);
  };

  const toggleFavouriteProductsViewCleanCart = () => {
    props.setFavouritesData([]);
    props.setShowFavouriteProducts(false);
  };

  const toggleFavouriteProductsViewContinue = () => {
    props.setShowFavouriteProducts(false);
  };

  const Favourites = props.favouritesData;

  return (
    <div className="FavouriteProductsGeneral">
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="FavouriteProductsContainer">
          {props.favouritesData.length === 0 && modalThanks && (
            <div className="FavouriteProductsEmpty">Thanks for purchase</div>
          )}
          {props.favouritesData.length === 0 && !modalThanks ? (
            <div className="FavouriteProductsEmpty">
              No favourite products :(
            </div>
          ) : (
            <>
              {Favourites.map((prod) => {
                return (
                  <div className="FavouriteProductsContainer" key={prod.id}>
                    <img src={prod.image} alt="img"></img>
                    <span>{prod.title.slice(0, 15)}</span>
                    <h1>{prod.newPrice}</h1>
                    <div
                      className="FavouriteProductsCancel"
                      onClick={() => removeFromFavourites(prod.id)}
                    >
                      {Cancel}
                    </div>
                  </div>
                );
              })}
              {!modalThanks && (
                <div className="FavouriteProductsButtonsBlock">
                  <div>
                    <BasketButton
                      onClick={toggleFavouriteProductsViewContinue}
                      text="Continue Searching"
                      background={"white"}
                      color={"gray"}
                      border={"2px solid gray"}
                      margin={"0 7px 0 0"}
                    />
                    <BasketButton
                      text={"Delete all favourites"}
                      onClick={toggleFavouriteProductsViewCleanCart}
                    />
                  </div>
                  <BasketButton
                    text={"Purchase"}
                    onClick={toggleBasketModalViewIfPurchase}
                  />
                </div>
              )}
            </>
          )}{" "}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default FavouriteProducts;
