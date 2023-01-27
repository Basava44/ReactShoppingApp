import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Wishlist.module.css";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => {
    return state.cart.wishlist;
  });

  return (
    <div className={styles.wishlistWrapper}>
      <h1>Your Cart</h1>
      {wishlistItems.length > 0 ? (
        <>Items are there</>
      ) : (
        <>
          <h1 className={styles.center}>No Wishlist Found</h1>
          <NavLink className={styles.navlink} to="/dashboard">
            Go To Dashboard
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Wishlist;
