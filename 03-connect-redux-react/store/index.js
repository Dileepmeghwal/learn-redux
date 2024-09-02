import { combineReducers, createStore } from "redux";

import { productReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { wishListReducer } from "./wishListReducer";
import { addFavoriteReducer } from "./addFavoriteReducer";
import { todoReducer } from "./todoReducer";

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  wishList: wishListReducer,
  favorite: addFavoriteReducer,
  todo: todoReducer,
});
 
export const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__());
console.log(store);
