import { useEffect, useState } from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { LiaTrashSolid } from "react-icons/lia";
import { CiEdit } from "react-icons/ci";
import {
  addTodo,
  initializedTodos,
  isDoneTodo,
  removeTodo,
  updateTodo,
} from "../store/todoReducer";
import Input from "./component/Input";
import { IoSaveOutline } from "react-icons/io5";

function App() {
  const todo = useSelector((state) => state.todoReducer);

  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [editTask, setEditTask] = useState("");

  const handleTask = (task) => {
    setTask(task);
  };
  const handleEditTask = (item) => {
    setEditId(item.id);
    setEditTask(item.title);
  };
  const todos = {
    id: Date.now(),
    title: task,
    done: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    dispatch(addTodo(todos));
    // saveTodo(todo);
    // localStorage.setItem("reduxList", JSON.stringify(todolist));
    setTask("");
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("reduxList"));
    if (data) {
      dispatch(initializedTodos(data));
    }
  }, [dispatch]);

  return (
    <>
      <h2>Redux</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", alignItems: "center", gap: 10 }}
      >
        <Input value={task} handleChange={handleTask} />
        <button type="submit">Add</button>
      </form>

      <div>
        <ul className="todo-container">
          {todo?.length > 0 ? (
            <>
              {todo?.map((item) => (
                <li key={item?.id} className="todo-items">
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={() => dispatch(isDoneTodo(item.id))}
                  />
                  {editId === item.id ? (
                    <input
                      style={{
                        borderRadius: 5,
                        border: 0,
                        padding: "5px 10px",
                      }}
                      value={editTask}
                      onChange={(e) => setEditTask(e.target.value)}
                    />
                  ) : (
                    <span
                      style={{
                        textDecoration: item.done ? "line-through " : "",
                      }}
                    >
                      {item.title}
                    </span>
                  )}
                  <div className="controls">
                    {editId === item.id ? (
                      <IoSaveOutline
                        onClick={() => {
                          dispatch(updateTodo(item.id, { title: editTask }));
                          setEditId(null);
                        }}
                      />
                    ) : (
                      <CiEdit
                        className="edit-btn"
                        onClick={() => handleEditTask(item)}
                      />
                    )}
                    <LiaTrashSolid
                      className="delete-btn"
                      onClick={() => dispatch(removeTodo(item.id))}
                    />
                  </div>
                </li>
              ))}
            </>
          ) : (
            <p>Add Task</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
