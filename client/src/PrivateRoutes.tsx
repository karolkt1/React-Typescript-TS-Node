import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const privateRouter = () => {
  // if (localStorage.getItem("authenticated") === "true") {
  if (localStorage.getItem("token")) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default privateRouter;
