export const ADD_TODO = "add/todo";
export const REMOVE_TODO = "remove/todo";
export const EDIT_TODO = "edit/todo";

const todoState = {
  id: 1,
  title: "hi three",
  done: false,
};

export default function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload.id);
    case EDIT_TODO:
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    default:
      return state;
  }
}


