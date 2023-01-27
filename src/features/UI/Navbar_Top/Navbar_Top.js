import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../../login/userSlice";

import styles from "./Navbar_Top.module.css";

const Navbar = () => {
  const dispatch = useDispatch();

  let isLoggedIn = useSelector((state) => {
    return state.user.loggedIn;
  });

  const logout = () => {
    dispatch(signOut());
  };

  let price = 0;

  const CartItems = useSelector((state) => {
    price = 0;
    for (let i in state.cart.cart) {
      price += state.cart.cart[i].price;
    }
    return state.cart.cart.length;
  });

  const wishListItems = useSelector((state) => {
    return state.cart.wishlist.length;
  });

  return (
    <>
      <nav className={styles.navTop}>
        <div className={styles.navTop__left}>
          <li>Support</li>
          <li>Delivery</li>
          <li>Legal</li>
          <li>About Us</li>
        </div>
        <div className={styles.navTop__right}>
          {isLoggedIn ? (
            <>
              <NavLink className={styles.cartNavlink} to="/cart">
                {CartItems} Cart Items | ₹{" "}
                {price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </NavLink>
              <NavLink className={styles.cartNavlink} to="/wishlist">
                {wishListItems} Wishlist Items
              </NavLink>
            </>
          ) : (
            ""
          )}
          {isLoggedIn ? (
            <div className={styles.logout} onClick={logout}>
              Logout
            </div>
          ) : (
            <>
              <div className={styles.login}>
                <NavLink
                  to="/signIn"
                  className={`${styles.navLink} ${styles.login}`}
                >
                  Login
                </NavLink>
              </div>
              <div className={styles.register}>
                <NavLink
                  to="/signUp"
                  className={`${styles.navLink} ${styles.register}`}
                >
                  Register
                </NavLink>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
