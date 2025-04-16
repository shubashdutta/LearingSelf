import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouter = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedRouter;
