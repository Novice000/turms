import axios, { AxiosInstance } from "axios";

export const authCall: AxiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
    },
    baseURL: "http://localhost:8000/",
});

export const unAuthCall: AxiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: "http://localhost:8000/",
});

export const login: AxiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: "http://localhost:8000/auth/jwt/create/",
});

export const refresh: AxiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    baseURL: "http://localhost:8000/auth/jwt/refresh/",
});


