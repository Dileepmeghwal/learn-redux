import { combineReducers, createStore } from "redux";
import { productList } from "./products";
import { productReducer } from "./productsReducer";
import {
  ADD_CART,
  cartReducer,
  DECREASE_QUNATITY,
  REMOVE_CART,
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

store.dispatch({
  type: ADD_CART,
  payload: { productId: 1, quantity: 1 },
});

store.dispatch({
  type: ADD_CART,
  payload: { productId: 3, quantity: 2 },
});

store.dispatch({
  type: ADD_CART,
  payload: { productId: 33, quantity: 3 },
});

store.dispatch({
  type: REMOVE_CART,
  payload: { productId: 3 },
});

// store.dispatch({
//   type: INCREASE_QUNATITY,
//   payload: { productId: 33 },
// });
// store.dispatch({
//   type: INCREASE_QUNATITY,
//   payload: { productId: 33 },
// });
// store.dispatch({
//   type: INCREASE_QUNATITY,
//   payload: { productId: 33 },
// });

store.dispatch({
  type: DECREASE_QUNATITY,
  payload: { productId: 33 },
});

store.dispatch({
  type: WISHLIST_ADD,
  payload: { productId: 18 },
});
store.dispatch({
  type: WISHLIST_ADD,
  payload: { productId: 11 },
});
store.dispatch({
  type: WISHLIST_ADD,
  payload: { productId: 1 },
});

store.dispatch({
  type: WISHLIST_REMOVE,
  payload: { productId: 1 },
});

store.dispatch({
  type: ADD_FAVORITE,
  payload: { productId: 1 },
});

store.dispatch({
  type: ADD_FAVORITE,
  payload: { productId: 33 },
});

store.dispatch({
  type: REMOVE_FAVORITE,
  payload: { productId: 33 },
});

store.dispatch({
  type: ADD_TODO,
  payload: { id: 0, title: "ram", done: false },
});
store.dispatch({
  type: ADD_TODO,
  payload: { id: 2, title: "jai mata di", done: false },
});
store.dispatch({
  type: ADD_TODO,
  payload: { id: 3, title: "jai shree kirshna", done: true },
});

store.dispatch({
  type: REMOVE_TODO,
  payload: { id: 3, title: "jai shree kirshna", done: true },
});
store.dispatch({
  type: EDIT_TODO,
  payload: { id: 2, title: "jai shree RAM", done: true },
});


console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});
