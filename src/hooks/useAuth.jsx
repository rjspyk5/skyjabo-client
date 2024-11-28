import React, { useContext } from "react";
import { AuthContext } from "../provider/authProvider";

export const useAuth = () => {
  const user = useContext(AuthContext);
  return user;
};
