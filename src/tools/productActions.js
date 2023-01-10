export const getProductBasketStatus = (basket, id) => {
  for (let i = 0; i < basket.length; i++) {
    if (id === basket[i].id) {
      return true;
    }
  }
};

export const getProductChosenListStatus = (chosenProducts, id) => {
  for (let i = 0; i < chosenProducts.length; i++) {
    if (id === chosenProducts[i].id) {
      return true;
    }
  }
}

