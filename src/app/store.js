import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/login/userSlice";
import cartReducer from "../features/cart/cartSlice";
import dashboardReducer from "../features/dashboard/dashboardSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    dashboard: dashboardReducer,
  },
});
