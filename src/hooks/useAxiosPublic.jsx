import axios from "axios";

export const useAxiosPublic = () => {
  const axiosPubilc = axios.create({ baseURL: "http://localhost:5000" });
  return axiosPubilc;
};
