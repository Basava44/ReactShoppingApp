import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";

import {
  addToCart as AddToCart,
  addToWishlist as AddToWishlist,
} from "../../cart/cartSlice";

import styles from "./MobileDetails.module.css";
import { useNavigate } from "react-router-dom";

const MobileDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => {
    return state.user.loggedIn;
  });

  const mobileData = useSelector((state) => {
    return state.dashboard.selectedDevice;
  });

  const carted = useSelector((state) => {
    for (let item in state.cart.cart) {
      return state.cart.cart[item].id === mobileData.id;
    }
  });

  const wishlisted = useSelector((state) => {
    for (let item in state.cart.wishlist) {
      return state.cart.wishlist[item].id === mobileData.id;
    }
  });

  const addToCart = () => {
    if (isLoggedIn) {
      dispatch(AddToCart(mobileData));
    } else {
      alert("Please LogIn/Register");
    }
  };
  const addToWishlist = () => {
    if (isLoggedIn) {
      dispatch(AddToWishlist(mobileData));
    } else {
      alert("Please LogIn/Register");
    }
  };

  const goToWishlist = () => {
    navigate("/wishlist");
  };
  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <div className={styles.detailsWrapper}>
        <div className={styles.detailsLeft}>
          <div className={styles.image}>
            <img src={mobileData.imageUrl} alt={mobileData.model} />
          </div>
        </div>
        <div className={styles.detailsRight}>
          <div className={styles.mobileName}>
            {mobileData.model.toUpperCase()}
          </div>
          <div className={styles.color}>
            <span style={{ fontWeight: "bold" }}>Color:</span>{" "}
            {mobileData.color}
          </div>
          <div className={styles.rating}>
            <span style={{ fontWeight: "bold" }}>Rating: </span>
            {mobileData.ratings}
            <StarIcon sx={{ fontSize: "small" }} />
          </div>
          <div className={styles.price}>
            ₹ {mobileData.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </div>
          <div className={styles.features}>
            <div className={styles.featuresTitle}>Features of the Device:</div>
            <ul>
              <li>Camera: {mobileData.camera}</li>
              <li>Processor: {mobileData.processor}</li>
              <li>{mobileData.ram}</li>
              <li>{mobileData.rom}</li>
              <li>{mobileData.battery}</li>
              <li>Screensize: {mobileData.screenSize}</li>
              <li>SimType: {mobileData.simType}</li>
              <li>OTG Compatible: {mobileData.otg_Compatible}</li>
            </ul>
          </div>
          <div className={styles.buttons}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              fullWidth
              onClick={wishlisted ? goToWishlist : addToWishlist}
              className={styles.button}
            >
              {wishlisted ? "Go To Wishlist" : "Wishlist"}
            </Button>
            <Button
              variant="contained"
              endIcon={<AddIcon />}
              fullWidth
              onClick={carted ? goToCart : addToCart}
              className={styles.button}
            >
              {carted ? "Go to cart" : "Cart"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDetails;
