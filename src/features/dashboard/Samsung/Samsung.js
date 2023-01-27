import React from "react";

import styles from "../categories.module.css";
import { useSelector } from "react-redux";
import MobileCard from "../../UI/Card/MobileCard";

const Samsung = () => {
  const samsungItems = useSelector((state) => {
    return state.dashboard.data.Samsung;
  });

  return (
    <div className={styles.mainWrapper}>
      {samsungItems.map((item) => {
        return <MobileCard data={item} key={item.id} />;
      })}
    </div>
  );
};

export default Samsung;
