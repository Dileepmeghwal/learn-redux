import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import { Provider } from "react-redux";
 
import Home from "./pages/Home.js";
import Cart from "./pages/Cart.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
