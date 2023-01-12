const defaultState = {
  basket:
    JSON.parse(localStorage.getItem("basket")) !== null
      ? JSON.parse(localStorage.getItem("basket"))
      : [],
};

const ADD_TO_BASKET = "ADD_TO_BASKET";

export const basketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };
    case "GET_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((basket) => basket.id !== action.payload),
      };
    case "ADD_SEVERAL_PRODUCTS_TO_BASKET":
      return { ...state, basket: [...state.basket, ...action.payload] };
    default:
      return state;
  }
};

export const addProductToBasket = (payload) => ({
  type: ADD_TO_BASKET,
  payload,
});
