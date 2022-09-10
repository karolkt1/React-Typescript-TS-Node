import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const privateRouter = () => {
//   const authenticated = localStorage.getItem("authenticated");
  if (localStorage.getItem("authenticated") === "true") {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default privateRouter;
