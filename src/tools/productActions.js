export const getProductBasketStatus = (basket, id) => {
  for (let i = 0; i < basket.length; i++) {
    if (id === basket[i].id) {
      return true;
    }
  }
};

export const getProductChosenListStatus = (favoriteProducts, id) => {
  for (let i = 0; i < favoriteProducts.length; i++) {
    if (id === favoriteProducts[i].id) {
      return true;
    }
  }
}

