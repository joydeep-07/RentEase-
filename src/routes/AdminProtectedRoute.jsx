import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const isAdminAuthenticated = useSelector(
    (state) => state.admin.isAdminAuthenticated,
  );

  if (!isAdminAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
