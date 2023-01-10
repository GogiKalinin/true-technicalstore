const defaultState = {
    favoriteProducts: [],
  };

  const ADD_TO_FAVORITE_PRODUCTS = 'ADD_TO_FAVORITE_PRODUCTS'
  
  export const favoriteProductsReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITE_PRODUCTS':
        return { ...state, favoriteProducts: [...state.favoriteProducts, action.payload] }
      case "GET_FROM_favoriteProducts":
        return { ...state, favoriteProducts: state.favoriteProducts.filter(favoriteProducts => favoriteProducts.id !== action.payload)};
      default:
        return state;
    }
  };

  export const addProductToFavorites = (payload) => ({type: ADD_TO_FAVORITE_PRODUCTS, payload})
  