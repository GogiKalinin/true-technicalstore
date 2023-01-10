import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { basketReducer } from "./basketReducer";
import { cashReducer } from "./cashReducer";
import { favoriteProductsReducer } from "./favoriteProductsReducer";
// const rootReducer = combineReducers({
//     cash: cashReducer,
//     customers: customerReducer,
//     products: productsReducer,
// })
// export const store = basketReducer
export const rootReducer = combineReducers({ 
    basket: basketReducer,
    cash: cashReducer,
    favoriteProducts: favoriteProductsReducer,
})
// export const combinedStore = createStore(rootReducer)
export const combinedStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
// const rootReducer = combineReducers({
//     cash: cashReducer,
//     customers: customerReducer,
//     products: productsReducer,
// })
// export const combinedStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))