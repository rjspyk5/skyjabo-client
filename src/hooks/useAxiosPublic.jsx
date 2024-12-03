import axios from "axios";

export const useAxiosPublic = () => {
  const axiosPubilc = axios.create({
    baseURL: "https://sky-jabo-server.vercel.app",
    withCredentials: true,
  });
  return axiosPubilc;
};
