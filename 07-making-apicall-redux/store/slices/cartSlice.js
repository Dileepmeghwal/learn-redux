import { createSelector, createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );

const slice = createSlice({
  name: "cart",
  initialState: {
    list: [],
    loading: false,
    error: "",
  },
  reducers: {
    lodingItem(state) {
      state.loading = true;
    },
    loadCartitems(state, action) {
      state.loading = false;
      state.list = action.payload.products;
    },

    errorCart(state, action) {
      state.error = action.payload || "something wrong!";
      state.loading = false;
    },
    addToCart(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity += 1;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list.splice(existingItemIndex, 1);
    },
    inrecreaseQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list[existingItemIndex].quantity += 1;
    },
    drecreaseQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list[existingItemIndex].quantity -= 1;
      if (state.list[existingItemIndex].quantity === 0)
        state.list.splice(existingItemIndex, 1);
    },
  },
});

export const getAllCartItems = ({ products, cart }) => {
  return cart?.list
    .map(({ productId, quantity }) => {
      const cartProduct = products?.list.find(
        (product) => product.id === productId
      );
      return { ...cartProduct, quantity };
    })
    .filter(({ title }) => title);
};

export const getCartList = createSelector(getAllCartItems, (state) => state);
export const {
  addToCart,
  removeCartItem,
  inrecreaseQuantity,
  drecreaseQuantity,
  loadCartitems,
  lodingItem,
  errorCart,
} = slice.actions;

export default slice.reducer;
