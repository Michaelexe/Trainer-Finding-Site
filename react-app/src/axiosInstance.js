import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://www.mygymtrainer.in/api"
    : "http://localhost:5000/api";

export const axiosUser = axios.create({
  withCredentials: true,
  baseURL: baseURL,
});
