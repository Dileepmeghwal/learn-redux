import { createSelector, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    fetchProducts(state) {
      state.loading = true;
    },
    updateAllProducts(state, action) {
      state.loading = false;
      state.list = action.payload;
      state.error = "";
    },
    errorProduct(state, action) {
      state.loading = false;
      state.error = action.payload || "something went wrong!";
    },
  },
});
export const getAllProductList = (state) => state.products.list;
export const getloading = (state) => state.products.loading;
export const getError = (state) => state.products.error;
export const getProductList = createSelector(
  getAllProductList,
  (state) => state
);
export const { updateAllProducts, errorProduct, fetchProducts } = slice.actions;
export default slice.reducer;
