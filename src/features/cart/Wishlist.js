import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import WishlistCard from "../UI/WishlistCard/WishlistCard";

import styles from "./Wishlist.module.css";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => {
    return state.cart.wishlist;
  });

  const cartItems = useSelector((state) => {
    return state.cart.cart;
  });

  return (
    <div className={styles.wishlistWrapper}>
      <h1>Your Wishlist Items</h1>
      {wishlistItems.length > 0 ? (
        <div className={styles.wishlistItems}>
          {wishlistItems.map((item) => {
            return <WishlistCard mobileData={item} key={item.id} />;
          })}
        </div>
      ) : (
        <>
          <h1 className={styles.center}>No Wishlist Found</h1>
          <NavLink className={styles.navlink} to="/dashboard">
            Go To Dashboard
          </NavLink>
          {cartItems.length > 0 && (
            <NavLink className={styles.navlink} to="/cart">
              Go To Cart
            </NavLink>
          )}
        </>
      )}
    </div>
  );
};

export default Wishlist;
