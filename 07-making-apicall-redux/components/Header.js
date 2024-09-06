import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import WishList from "./WishList";
import {
  errorProduct,
  fetchProducts,
  updateAllProducts,
} from "../store/slices/productsSlice";

import {
  errorCart,
  loadCartitems,
  lodingItem,
} from "../store/slices/cartSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state?.products);
  const cartItems = useSelector((state) => state.cart.list);
  console.log("cartItems", cartItems);
  const totalProduct = cartItems.reduce(
    (acc, currItem) => acc + currItem?.quantity,
    0
  );

  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());

    fetch(`https://fakestoreapi.com/products`)
      .then((data) => data.json())
      .then((res) => {
        // console.log(res);
        dispatch(updateAllProducts(res));
      })
      .catch((err) => {
        console.log(err);
        dispatch(errorProduct(error));
      });

    dispatch(lodingItem());
    fetch("https://fakestoreapi.com/carts/5")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        dispatch(loadCartitems(data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(errorCart());
      });
  }, []);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>

        <div className="cart-icon">
          <button role="button" onClick={() => setShow(!show)}>
            ❤️
          </button>
          <Link to="/cart">
            <img src={CartIcon} alt="cart-icon" />
            <span className="cart-items-count">{totalProduct}</span>
          </Link>
        </div>

        {show && <WishList />}
      </div>
    </header>
  );
}
