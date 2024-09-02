import { createStore } from "redux";
import { myCreateStore } from "./my-redux";
const postCountElement = document.querySelector(".post-count");
const btn = document.querySelector("#btn");
const btnDec = document.querySelector("#btndec");

// console.dir(createStore);

let initialState = {
  post: 0,
  name: "sff",
  age: 23,
};

const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const DECREMENT_BY = "post/decrementby";
const INCREMENT_BY = "post/incrementby";

// function reducer(state = initialState, action) {
//   if (action.type === INCREMENT) {
//     return { ...state, post: state.post + 1 };
//   } else if (action.type === DECREMENT) {
//     return { ...state, post: state.post - 1 };
//   } else if (action.type === DECREMENT_BY) {
//     return { ...state, post: state.post - action.payload };
//   } else if (action.type === INCREMENT_BY) {
//     return { ...state, post: state.post + action.payload };
//   }
//   return state;
// }

// using switch case

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        post: state.post + 1,
      };

    case DECREMENT:
      return { ...state, post: state.post - 1 };

    case INCREMENT_BY:
      return { ...state, post: state.post + action.payload };
    case DECREMENT_BY:
      return { ...state, post: state.post - action.payload };

    default:
      return state;
  }
}

// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);

const store = createStore(reducer);

// console.log(store.getState());
// console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({ type: "post/increment" });

// store.dispatch({ type: "post/increment" });

// store.dispatch({ type: "post/decrement" });
// store.dispatch({ type: "post/incrementby", payload: 10 });
// store.dispatch({ type: "post/decrementby", payload: 1 });

store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });

store.dispatch({ type: DECREMENT });

store.dispatch({ type: INCREMENT_BY, payload: 100 });
store.dispatch({ type: DECREMENT_BY, payload: 10 });
store.dispatch({ type: "DECREMENT_BY", payload: 10 });

// console.log(store);

let counterState = {
  count: 0,
  name: 1,
  age: 12,
};
console.log("====================================");
console.log("NEW COUNTER");
console.log("====================================");
function counterReducer(state = counterState, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "multiply":
      return { ...state, count: state.count * action.payload };

    default:
      return state;
  }
}
const store1 = createStore(counterReducer, __REDUX_DEVTOOLS_EXTENSION__());

const myStore = myCreateStore()
console.log('myStore',myStore)
myStore.subscribe(() => {
  console.log('ssd')
})


store1.subscribe(() => {
  console.log(store1.getState());
  // postCountElement.innerHTML = store.getState().post;
});

// console.log(postCountElement);
store1.dispatch({ type: "increment" });
store1.dispatch({ type: "increment" });

store1.dispatch({ type: "decrement" });
store1.dispatch({ type: "increment" });
store1.dispatch({ type: "increment" });
store1.dispatch({ type: "increment" });

store1.dispatch({ type: "multiply", payload: 20 });

btn.addEventListener("click", () => {
  store1.dispatch({ type: "increment" });
  postCountElement.innerHTML = store1.getState().count;
});
btnDec.addEventListener("click", () => {
  store1.dispatch({ type: "decrement" });
  postCountElement.innerHTML = store1.getState().count;
});

postCountElement.innerHTML = store1.getState().count;
