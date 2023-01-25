import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";

import SignIn from "./features/login/SignIn";
import SignUp from "./features/login/SignUp";
import Navbar from "./features/UI/Navbar/Navbar";
import PageNotFound from "./features/UI/PageNotFound/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
