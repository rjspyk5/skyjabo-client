import React, { createContext, useEffect, useState } from "react";

import { useAxiosPublic } from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const authStateChanged = async () => {
      try {
        setloading(true);
        const { data } = await axiosPublic.get("/authstate");
        if (data?.isLogin === 1) {
          setuser(null);
          setloading(false);
        } else {
          const { userId, role } = data;
          setuser({ userId, role });
          setloading(false);
        }
      } catch (error) {
        setuser(null);
      } finally {
        setloading(false);
      }
    };

    authStateChanged();
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
