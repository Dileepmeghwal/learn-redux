import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  drecreaseQuantity,
  inrecreaseQuantity,
  removeCartItem,
} from "../store/slices/cartSlice";
import {
  drecreaseWishQuantity,
  inrecreaseWishQuantity,
} from "../store/slices/wishListSlice";

export default function CartItem({
  productId,
  title,
  rating,
  price,
  imageUrl,
  quantity,
  inrecreaseQuantity,
  decreaseQuantity,
}) {
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wishList);

  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button onClick={() => dispatch(decreaseQuantity({ productId }))}>
          -{" "}
        </button>
        <span> {quantity} </span>
        <button onClick={() => dispatch(inrecreaseQuantity({ productId }))}>
          +
        </button>
        {!wishListItems && (
          <button onClick={() => dispatch(removeCartItem(productId))}>
            Remove
          </button>
        )}
      </div>
      {!wishListItems && <div className="item-total">${quantity * price}</div>}
    </div>
  );
}
