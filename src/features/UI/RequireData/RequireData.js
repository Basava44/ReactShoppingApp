import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireData = ({ children }) => {
  const mobileData = useSelector((state) => {
    return state.dashboard.selectedDevice;
  });

  if (Object.keys(mobileData).length === 0) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default RequireData;
