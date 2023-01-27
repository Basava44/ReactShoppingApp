import React from "react";

import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartCard from "../UI/CartCard/CartCard";

const Cart = () => {
  const cartItems = useSelector((state) => {
    return state.cart.cart;
  });

  const wishlistItems = useSelector((state) => {
    return state.cart.wishlist;
  });

  return (
    <div className={styles.cartWrapper}>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <div className={styles.cartItems}>
            {cartItems.map((item) => {
              return <CartCard mobileData={item} key={item.id} />;
            })}
          </div>
        </div>
      ) : (
        <>
          <h1 className={styles.center}>No Cart Items Found</h1>
          <NavLink className={styles.navlink} to="/dashboard">
            Go To Dashboard
          </NavLink>
          {wishlistItems.length > 0 && (
            <NavLink className={styles.navlink} to="/wishlist">
              Go To Wishlist
            </NavLink>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
