import { ADD_FAVORITE } from "./addFavoriteReducer";
import { ADD_TODO, EDIT_TODO } from "./todoReducer";
import { WISHLIST_ADD, WISHLIST_REMOVE } from "./wishListReducer";

export const ADD_CART = "cart/addItem";
export const REMOVE_CART = "cart/removeItem";
export const INCREASE_QUNATITY = "cart/increaseItem";
export const DECREASE_QUNATITY = "cart/decreaseItem";

// Actions
export function addToCart(productData) {
  return {
    type: ADD_CART,
    payload: productData,
  };
}

export function removeCartItem(productId) {
  return {
    type: REMOVE_CART,
    payload: { productId },
  };
}
export function inrecreaseQuantity(productId) {
  return {
    type: INCREASE_QUNATITY,
    payload: { productId },
  };
}

export function drecreaseQuantity(productId) {
  return {
    type: DECREASE_QUNATITY,
    payload: { productId },
  };
}
export function addwishList(productId) {
  return {
    type: WISHLIST_ADD,
    payload: { productId },
  };
}

export function removewishList(productId) {
  return {
    type: WISHLIST_REMOVE,
    payload: { productId },
  };
}

export function addFavorite(productId) {
  return {
    type: ADD_FAVORITE,
    payload: { productId },
  };
}

export function removeFavorite(productId) {
  return {
    type: ADD_FAVORITE,
    payload: { productId },
  };
}

export function addTodo(productId, title, done) {
  return {
    type: ADD_TODO,
    payload: { id: productId, title, done },
  };
}

export function removeTodo(productId) {
  return {
    type: ADD_TODO,
    payload: { id: productId },
  };
}

export function updateTodo(productId, title, done) {
  return {
    type: EDIT_TODO,
    payload: { id: productId, title, done },
  };
}

//Reducer
export function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_CART:
      const existingItem = state.find(
        (cartItem) => cartItem.productId === action.payload.productId
      );
      if (existingItem) {
        return state.map((cartItem) =>
          cartItem.productId === existingItem.productId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case REMOVE_CART:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );

    case INCREASE_QUNATITY:
      return state.map((item) => {
        if (item.productId === action.payload.productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

    case DECREASE_QUNATITY:
      return state
        .map((item) => {
          if (item.productId === action.payload.productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);

    default:
      return state;
  }
}
