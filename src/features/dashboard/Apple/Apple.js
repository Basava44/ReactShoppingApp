import React from "react";
import { useSelector } from "react-redux";

import MobileCard from "../../UI/Card/MobileCard";

import styles from "../categories.module.css";

const Apple = () => {
  const appleItems = useSelector((state) => {
    return state.dashboard.data.Apple;
  });

  return (
    <div className={styles.mainWrapper}>
      {appleItems.map((item) => {
        return <MobileCard data={item} key={item.id} />;
      })}
    </div>
  );
};

export default Apple;
