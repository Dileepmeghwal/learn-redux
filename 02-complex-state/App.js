import { combineReducers, createStore } from "redux";
import { productList } from "./products";
import { productReducer } from "./productsReducer";
import {
  ADD_CART,
  addFavorite,
  addTodo,
  addwishList,
  cartReducer,
  createItem,
  DECREASE_QUNATITY,
  drecreaseQuantity,
  inrecreaseQuantity,
  REMOVE_CART,
  removeCartItem,
  updateTodo,
} from "./cartReducer";
import {
  WISHLIST_ADD,
  WISHLIST_REMOVE,
  wishListReducer,
} from "./wishListReducer";
import {
  ADD_FAVORITE,
  addFavoriteReducer,
  REMOVE_FAVORITE,
} from "./addFavoriteReducer";
import { ADD_TODO, EDIT_TODO, REMOVE_TODO, todoReducer } from "./todoReducer";

const reducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  wishList: wishListReducer,
  favorite: addFavoriteReducer,
  todo: todoReducer,
});

// console.log('combined', reducer);

const store = createStore(reducer, __REDUX_DEVTOOLS_EXTENSION__());
// console.log(store);

store.dispatch(createItem(1, 3));
store.dispatch(createItem(2, 4));

store.dispatch(createItem(3, 2));

store.dispatch(removeCartItem(3));
store.dispatch(addwishList(2));
store.dispatch(addwishList(1));
store.dispatch(addFavorite(1));
store.dispatch(addTodo(1, "How to run node js ?", true));
store.dispatch(addTodo(1, "How to run React js ?", false));
store.dispatch(updateTodo(1, "How to run android js ?", true));
store.dispatch(drecreaseQuantity(2))
console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});
