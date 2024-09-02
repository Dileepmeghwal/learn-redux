// let state = { count: 0, name: "Ram", age: 24 };

// let prevState = state;

// function increment() {
//   // Mutate state
//   // state.count = state.count + 1;

//   // non-mutaing state
//   // state = { count: state.count + 1 };
//   state = { ...state, count: state.count + 1 };
// }

// console.log(state);
// increment();
// console.log(state);
// increment();
// console.log(state);
// increment();
// console.log(state);
// increment();
// console.log(state);

// introduce reducer

let reduxState = {
  count: 0,
  name: "sff",
  age: 23,
};

function reducer(state, action) {
  if (action.type === "post/increment") {
    return { ...state, count: state.count + 1 };
  } else if (action.type === "post/decrement") {
    return { ...state, count: state.count - action.payload };
  } else if (action.type === "post/incrementby") {
    return { ...state, count: state.count + action.payload };
  }
  return state;
}

reduxState = reducer(reduxState, { type: "post/increment" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/increment" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/decrement", payload: 20 });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/incrementby", payload: 220 });
console.log(reduxState);
