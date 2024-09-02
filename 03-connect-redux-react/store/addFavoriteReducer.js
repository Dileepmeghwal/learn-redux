export const ADD_FAVORITE = "favorite/addItem";
export const REMOVE_FAVORITE = "favorite/removeItem";
export function addFavoriteReducer(state = [], action) {

  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];

    case REMOVE_FAVORITE:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    default:
      return state;
  }
}
