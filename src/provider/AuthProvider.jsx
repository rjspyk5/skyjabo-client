import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
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
        const { data: logedUser } = await axiosPublic.get("/authstate");
        const { userId, role } = logedUser;
        setuser({ userId, role });
      } catch (error) {
        if (error.status === 403) {
          return setuser(null);
        }
        console.log("Can't check authState");
        setuser(null);
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
    window.location.reload();
  };

  return (
    <AuthContext.Provider
      value={{ login, register, logout, user, loading, setuser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
