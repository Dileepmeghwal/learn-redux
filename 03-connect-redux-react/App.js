import React from "react";
import { productList } from "./store/products";
import Product from "./components/Product";
import { store } from "./store/index.js";
import { useSelector } from "react-redux";
import Header from "./components/Header.js";
import { Outlet } from "react-router-dom";

const App = () => {
  

  return (
    <>
    <Header />
    <Outlet />
    </>
  );
};

export default App;
