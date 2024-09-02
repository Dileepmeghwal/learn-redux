export function myCreateStore(reducer) {
  let state;
  const listners = [];
  const store = {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      listners.forEach((listners) => {
        listners();
      });
    },
    subscribe(listner) {
      listners.push(listner);
    },
  };
  return store;
}
