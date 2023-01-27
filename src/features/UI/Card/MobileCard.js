import React from "react";

import styles from "./MobileCard.module.css";
import { Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectDevice } from "../../dashboard/dashboardSlice";

const MobileCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const viewDetails = (id) => {
    dispatch(selectDevice(data));
    navigate(`${id}`);
  };

  return (
    <Card sx={{ width: 310 }} className={styles.mobileCard}>
      <img className={styles.image} src={data.imageUrl} alt={data.model} />
      <div className={styles.details}>
        <p className={styles.name}>{data.model.toUpperCase()}</p>
        <p className={styles.color}>
          <span style={{ fontWeight: "bold" }}>Color:</span> {data.color}
        </p>
        <p className={styles.modelNumber}>
          <span style={{ fontWeight: "bold" }}>Model Number: </span>
          {data.modelNumber}
        </p>
        <p className={styles.price}>
          Price: ₹{data.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
        </p>
        <Button
          variant="outlined"
          fullWidth
          className={styles.button}
          onClick={() => {
            viewDetails(data.id);
          }}
        >
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default MobileCard;
