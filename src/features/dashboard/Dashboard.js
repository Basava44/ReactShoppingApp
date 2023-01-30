import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import styles from "./Dashboard.module.css";

const Dashboard = (props) => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
      color: isActive ? "brown" : "black",
    };
  };

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard/apple");
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className={styles.category}>
        <h2>Search By Brand:</h2>
        <NavLink
          to="/dashboard/apple"
          className={styles.navlink}
          style={navLinkStyles}
        >
          Apple
        </NavLink>
        <NavLink
          to="/dashboard/samsung"
          className={styles.navlink}
          style={navLinkStyles}
        >
          Samsung
        </NavLink>
        <NavLink
          to="/dashboard/oneplus"
          className={styles.navlink}
          style={navLinkStyles}
        >
          Oneplus
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
