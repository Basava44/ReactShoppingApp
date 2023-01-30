import React, { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./features/dashboard/Dashboard";

import SignIn from "./features/login/SignIn";
import SignUp from "./features/login/SignUp";
import Navbar from "./features/UI/Navbar_Top/Navbar_Top";
import PageNotFound from "./features/UI/PageNotFound/PageNotFound";
import Apple from "./features/dashboard/Apple/Apple";
import Samsung from "./features/dashboard/Samsung/Samsung";
import Oneplus from "./features/dashboard/Oneplus/Oneplus";
import BottomNavbar from "./features/UI/Navbar_Bottom/Navbar_Bottom";
import MobileDetails from "./features/UI/MobileDetails/MobileDetails";
import RequireData from "./features/UI/RequireData/RequireData";

import "./App.css";
import Cart from "./features/cart/Cart";
import Wishlist from "./features/cart/Wishlist";
import { useDispatch } from "react-redux";
import { signIn } from "./features/login/userSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    if (loginData) {
      dispatch(signIn(loginData.email, loginData.password));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <BottomNavbar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="samsung" element={<Samsung />}></Route>
          <Route path="apple" element={<Apple />}></Route>
          <Route path="oneplus" element={<Oneplus />}></Route>
        </Route>
        <Route
          path="/dashboard/oneplus/:id"
          element={
            <RequireData>
              <MobileDetails />
            </RequireData>
          }
        />
        <Route
          path="/dashboard/apple/:id"
          element={
            <RequireData>
              <MobileDetails />
            </RequireData>
          }
        />
        <Route
          path="/dashboard/samsung/:id"
          element={
            <RequireData>
              <MobileDetails />
            </RequireData>
          }
        />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
