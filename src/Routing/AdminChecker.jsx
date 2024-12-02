import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import { Loading } from "../component/Loading/Loading";

export const AdminChecker = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <Loading />;
  }
  if (!loading && user?.role === 0) {
    return <Navigate to="/admin" />;
  }
  return children;
};
