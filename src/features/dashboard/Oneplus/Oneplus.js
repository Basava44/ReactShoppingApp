import React from "react";
import { useSelector } from "react-redux";

import MobileCard from "../../UI/Card/MobileCard";

import styles from "../categories.module.css";

const Oneplus = () => {
  const oneplusItems = useSelector((state) => {
    return state.dashboard.data.Oneplus;
  });

  return (
    <div className={styles.mainWrapper}>
      {oneplusItems.map((item) => {
        return <MobileCard data={item} key={item.id} />;
      })}
    </div>
  );
};

export default Oneplus;
