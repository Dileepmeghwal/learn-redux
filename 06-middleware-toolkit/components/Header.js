import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useSelector } from "react-redux";
import WishList from "./WishList";

export default function Header() {
  const [show, setShow] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const totalProduct = cartItems.reduce(
    (acc, currItem) => acc + currItem.quantity,
    0
  );
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

        {show && <WishList/>}
      </div>
    </header>
  );
}
