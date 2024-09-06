import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const WishList = () => {
  const wishListItems = useSelector((state) => state.wishList);
  console.log(wishListItems);

  return (
    <div className="whislist-container">
      <p>WishList</p>
      {wishListItems.length > 0 ? (
        <>
          {wishListItems.map((item) => (
            <div style={{ minWidth: "100%", height: "100%" }}>
              <CartItem
                productId={item.id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                quantity={item.quantity}
              />
            </div>
          ))}
        </>
      ) : (
        "No Items"
      )}
    </div>
  );
};

export default WishList;
