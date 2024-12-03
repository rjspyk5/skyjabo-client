import axios from "axios";

export const useAxiosPublic = () => {
  const axiosPubilc = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
  });
  return axiosPubilc;
};
