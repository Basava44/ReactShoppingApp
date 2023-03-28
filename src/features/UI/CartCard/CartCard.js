import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Card } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

import {
  addToWishlist as AddToWishlist,
  removeFromCart as RemoveFromCart,
} from "../../cart/cartSlice";

import styles from "./CartCard.module.css";

const CartCard = ({ mobileData }) => {
  const dispatch = useDispatch();

  const wishlisted = useSelector((state) => {
    for (let item in state.cart.wishlist) {
      return state.cart.wishlist[item].id === mobileData.id;
    }
  });

  const addToWishlist = () => {
    dispatch(AddToWishlist(mobileData));
  };

  const removeFromCart = () => {
    dispatch(RemoveFromCart(mobileData));
  };

  return (
    <Card
      sx={{ width: 310 }}
      className={styles.cardWrapper}
      data-aos="flip-right"
      data-aos-duration="1000"
    >
      <img
        src={mobileData.imageUrl}
        alt={mobileData.id}
        className={styles.image}
      />
      <div className={styles.details}>
        <div className={styles.title}>
          Model: {mobileData.model.toUpperCase()}
        </div>
        <div className={styles.price}>
          Price: ₹
          {mobileData.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}{" "}
        </div>
        <div className="buttons">
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={addToWishlist}
            fullWidth
            className={styles.button}
            disabled={wishlisted}
          >
            Wishlist
          </Button>
          <Button
            variant="outlined"
            startIcon={<ClearIcon sx={{ fontSize: "small" }} />}
            onClick={removeFromCart}
            fullWidth
            className={styles.button}
          >
            Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CartCard;
