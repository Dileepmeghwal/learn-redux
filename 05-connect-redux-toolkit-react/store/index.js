import { combineReducers, rootReducer } from "redux";

import productReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import addFavoriteReducer from "./slices/addFavoriteSlice";
import todoReducer from "./slices/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    favorite: addFavoriteReducer,
    todo: todoReducer,
  },
});
console.log(store);
