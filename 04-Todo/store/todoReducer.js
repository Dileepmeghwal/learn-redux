const todoState = {
  id: 1,
  title: "hi three",
  done: false,
};

// actions

export const INITIALIZED_TODO = "INITIALIZED_TODO";
export const ADD_TODO = "ADD/TODO";
export const REMOVE_TODO = "REMOVE/TODO";
export const EDIT_TODO = "EDIT_TODO/TODO";
export const UPDATE_TODO = "UPDATE/TODO";
export const DONE_TODO = "DONE_TODO/TODO";

// actions

export const initializedTodos = (todo) => {
  return { type: INITIALIZED_TODO, payload: todo };
};

export const addTodo = (todo) => {
  return { type: ADD_TODO, payload: todo };
};

export const removeTodo = (id) => {
  return { type: REMOVE_TODO, payload: id };
};
export const editTodo = (id, todo) => {
  return { type: EDIT_TODO, payload: { id, ...todo } };
};

export const updateTodo = (id, todo) => {
  return { type: UPDATE_TODO, payload: { id, todo } };
};
export const isDoneTodo = (id) => {
  return { type: DONE_TODO, payload: id };
};

export function todoReducer(state = [], action) {
  let newTodo;
  switch (action.type) {
    case ADD_TODO:
      newTodo = [...state, action.payload];
      saveTodoList(newTodo);
      return newTodo;

    case REMOVE_TODO:
      newTodo = state.filter((item) => item.id !== action.payload);
      saveTodoList(newTodo);
      return newTodo;

    case EDIT_TODO:
      return state.map((item) =>
        item.id === payload.todo.id ? { ...item, ...action.payload } : item
      );

    case UPDATE_TODO:
      newTodo = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, ...action.payload.todo }
          : item
      );
      saveTodoList(newTodo);
      return newTodo;

    case DONE_TODO:
      newTodo = state.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
      saveTodoList(newTodo);
      return newTodo;
    case INITIALIZED_TODO:
      return action.payload;

    default:
      return state;
  }
}

export function saveTodoList(todoList) {
  try {
    localStorage.setItem("reduxList", JSON.stringify(todoList));
  } catch (error) {
    console.log("ERR", error);
  }
}

export function removeTodoList(id) {
  try {
    localStorage.setItem("reduxList", JSON.stringify(id));
  } catch (error) {
    console.log("ERR", error);
  }
}
