import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex((item) => item.productId === action.payload.productId);

const slice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addtoWishList(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    inrecreaseWishQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity += 1;
    },
    drecreaseWishQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state[existingItemIndex].quantity -= 1;
      if (state[existingItemIndex].quantity === 0)
        state.splice(existingItemIndex, 1);
    },
  },
});

export const { addtoWishList, inrecreaseWishQuantity, drecreaseWishQuantity } =
  slice.actions;
export default slice.reducer;
