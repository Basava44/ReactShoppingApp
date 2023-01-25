import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../../login/userSlice";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();

  let isLoggedIn = useSelector((state) => {
    return state.user.loggedIn;
  });

  const logout = () => {
    dispatch(signOut());
  };

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
          {isLoggedIn ? <div>Cart Details</div> : ""}
          {isLoggedIn ? (
            <div className={styles.logout} onClick={logout}>
              Logout
            </div>
          ) : (
            <>
              <div className={styles.login}>
                <NavLink to="/signIn" className={styles.navLink}>
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
