import axios from "axios";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "https://sky-jabo-server.vercel.app",
  withCredentials: true,
});

export const useAxiosSequre = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        logout().then(() => navigate("/login"));
      }
    }
  );

  return axiosSecure;
};
