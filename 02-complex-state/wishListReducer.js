export const WISHLIST_ADD = "wishlist/addItem";
export const WISHLIST_REMOVE = "wishlist/removeItem";

export function wishListReducer(state = [], action) {
  switch (action.type) {
    case WISHLIST_ADD:
      return [...state, action.payload];
    case WISHLIST_REMOVE:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );

    default:
      return state;
  }
}
