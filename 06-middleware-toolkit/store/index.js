import productReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import addFavoriteReducer from "./slices/addFavoriteSlice";
import todoReducer from "./slices/todoSlice";
import { configureStore, Tuple } from "@reduxjs/toolkit";
import { logger } from "../middleware/logger";

// currying

// const carrying = (par1) => (par2) => (par3) => {
//   return par1 + par2 + par3;
// };
// console.log("curr", carrying(2)(4)(6));

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    favorite: addFavoriteReducer,
    todo: todoReducer,
  },
  middleware: () => [logger],
});
