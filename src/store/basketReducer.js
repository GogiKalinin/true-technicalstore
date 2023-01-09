const defaultState = {
    basket: 5,
  };
  
  export const basketReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_basket":
        return { ...state, basket: state.basket + action.payload };
      case "GET_basket":
        return { ...state, basket: state.basket - action.payload };
      default:
        return state;
    }
  };
  