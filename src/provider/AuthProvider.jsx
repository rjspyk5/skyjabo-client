import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useAxiosPublic } from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const authStateChanged = async () => {
      try {
        setloading(true);
        const { data: loggedInUser } = await axiosPublic.get("/authstate");
        const { userId, role } = loggedInUser;
        setuser({ userId, role });
      } catch (error) {
        if (error.response?.status === 403) {
          setuser(null);
        } else {
          setuser(null);
        }
      } finally {
        setloading(false);
      }
    };

    return () => {
      authStateChanged();
    };
  }, []);

  const login = () => {};
  const register = () => {};
  const logout = async () => {
    setloading(true);
    await axiosPublic.post("/logout", user);
    setuser(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{ login, register, logout, user, loading, setuser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
