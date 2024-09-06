import React from "react";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  drecreaseQuantity,
  inrecreaseQuantity,
} from "../store/slices/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, currItem) => acc + currItem.quantity * currItem.price,
    0
  );

  function increaseItem(productId) {
    drecreaseQuantity(productId);
  }
  function decreaseItem(productId) {
    inrecreaseQuantity(productId);
  }

  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map(
              ({ productId, title, rating, price, imageUrl, quantity }) => (
                <CartItem
                  key={productId}
                  title={title}
                  productId={productId}
                  price={price}
                  quantity={quantity}
                  imageUrl={imageUrl}
                  rating={rating}
                  inrecreaseQuantity={increaseItem}
                  decreaseQuantity={decreaseItem}
                />
              )
            )}
            <div className="cart-header cart-item-container">
              <div></div>
              <div></div>
              <div></div>
              <div className="total">${totalPrice}</div>
            </div>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              height: "100%",
              padding: 100,
              textAlign: "center",
            }}
          >
            <div>
              <button onClick={() => navigate("/")}>Add Item</button>
              <p>No item available! please add to cart</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
