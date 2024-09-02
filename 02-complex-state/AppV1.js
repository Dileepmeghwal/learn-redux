import { createStore } from "redux";
import { productList } from "./products";

const initalState = {
  products: productList,
  cartItems: [],
  wishList: [],
  favorite: [],
};

const ADD_CART = "cart/addItem";
const REMOVE_CART = "cart/removeItem";
const INCREASE_QUNATITY = "cart/increaseItem";
const DECREASE_QUNATITY = "cart/decreaseItem";

const WISHLIST_ADD = "wishlist/addItem";
const WISHLIST_REMOVE = "wishlist/removeItem";
const ADD_FAVORITE = "favorite/addItem";
const reducer = (state = initalState, action) => {
  // console.log(state.cartItems);

  switch (action.type) {
    case ADD_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case REMOVE_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };
    case INCREASE_QUNATITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.productId === action.payload.productId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case DECREASE_QUNATITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.productId === action.payload.productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };

    case WISHLIST_ADD:
      return { ...state, wishList: [...state.wishList, action.payload] };
    case WISHLIST_REMOVE:
      return {
        ...state,
        wishList: state.wishList.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    default:
      return state;
  }
};

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

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});
