import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },
    inrecreaseQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity += 1;
    },
    drecreaseQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity -= 1;
      if (state[existingItemIndex].quantity === 0)
        state.splice(existingItemIndex, 1);
    },
  },   
});

export const {
  addToCart,
  removeCartItem,
  inrecreaseQuantity,
  drecreaseQuantity,
} = slice.actions;

export default slice.reducer;
