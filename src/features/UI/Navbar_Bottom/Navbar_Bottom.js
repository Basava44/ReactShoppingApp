import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Navbar_Bottom.module.css";

const BottomNavbar = () => {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate("/dashboard/apple");
  };

  return (
    <nav className={styles.navBottom}>
      <div className={styles.navBottom__left}>
        <h2
          className={styles.navBottom__left__logoName}
          onClick={navigateToDashboard}
        >
          Buy<span style={{ color: "rgb(248, 87, 114)" }}>Mobile</span>
        </h2>
      </div>
    </nav>
  );
};

export default BottomNavbar;
