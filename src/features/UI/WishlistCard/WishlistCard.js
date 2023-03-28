import React from "react";

import { Button, Card } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

import {
  removeFromWishlist as RemoveFromWishlist,
  addToCart as AddToCart,
} from "../../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import styles from "./WishlistCard.module.css";

const WishlistCard = ({ mobileData }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(AddToCart(mobileData));
  };

  const removeFromWishlist = () => {
    dispatch(RemoveFromWishlist(mobileData));
  };

  const carted = useSelector((state) => {
    for (let item in state.cart.cart) {
      return state.cart.cart[item].id === mobileData.id;
    }
  });

  return (
    <Card
      sx={{ width: 310 }}
      className={styles.cardWrapper}
      data-aos="flip-left"
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
            onClick={addToCart}
            fullWidth
            className={styles.button}
            disabled={carted}
          >
            Cart
          </Button>
          <Button
            variant="outlined"
            startIcon={<ClearIcon sx={{ fontSize: "small" }} />}
            onClick={removeFromWishlist}
            fullWidth
            className={styles.button}
          >
            Wishlist
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default WishlistCard;
