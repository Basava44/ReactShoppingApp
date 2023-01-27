import React from "react";

import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => {
    return state.cart.cart;
  });

  return (
    <div className={styles.cartWrapper}>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <>Items are there</>
      ) : (
        <>
          <h1 className={styles.center}>No Cart Items Found</h1>
          <NavLink className={styles.navlink} to="/dashboard">
            Go To Dashboard
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Cart;
