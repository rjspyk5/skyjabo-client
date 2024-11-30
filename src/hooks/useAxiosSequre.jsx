import axios from "axios";

export const useAxiosSequre = () => {
  const axiosPubilc = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
  });
  return axiosPubilc;
};
