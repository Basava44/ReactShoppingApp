import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  wishlist: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, addToWishlist, removeFromWishlist } =
  cartSlice.actions;
