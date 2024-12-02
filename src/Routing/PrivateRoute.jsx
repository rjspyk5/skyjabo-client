import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import { Loading } from "../component/Loading/Loading";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <Loading />;
  }
  if (!loading && user) {
    return children;
  }
  return <Navigate to="/login" />;
};
