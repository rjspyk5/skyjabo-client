import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

export const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <h1>Loading.........</h1>;
  }
  if (!loading && user?.role !== 0) {
    return <Navigate to="/login" />;
  }
  return children;
};
