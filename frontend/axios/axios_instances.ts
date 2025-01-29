import axios, { AxiosInstance } from "axios";

const BASE_URL = "http://localhost:8000/";

export const authCall: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/auth/`,
  headers: {
    "Content-Type": "application/json",
  },
});

authCall.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const unAuthCall: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/auth/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}jwt/create/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const refresh: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}jwt/refresh/`,
  headers: {
    "Content-Type": "application/json",
  },
});

