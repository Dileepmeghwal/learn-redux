import { combineReducers, createStore } from "redux";
import { todoReducer } from "./todoReducer";

const reducer = combineReducers({ todoReducer });

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


console.log(store);
