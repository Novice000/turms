import {login, refresh} from "@/axios/axios_instances";
import { jwtDecode} from "jwt-decode";

export function accessIsExpired(): boolean{
    const token = localStorage.getItem("access_token");
    if (token){
        const decodedToken = jwtDecode(token);
        const expirationTime = decodedToken?.exp ? decodedToken.exp * 1000 : 0;
        const currentTime = new Date().getTime();
        if (expirationTime < currentTime){
            return true
        }
    }
    return false
}

export function refreshIsExpired(): boolean{
    const token = localStorage.getItem("refresh_token");
    if (token){
        const decodedToken = jwtDecode(token);
        const expirationTime = decodedToken?.exp ? decodedToken.exp * 1000 : 0;
        const currentTime = new Date().getTime();
        if (expirationTime < currentTime){
            return true
        }
    }
    return false
}

export async function getToken({email, password}: { email: string; password: string }) {
        const response = await login.post("/auth/jwt/create/", { email, password });
        if (response.status !== 201 || !response.data) {
            console.error("Failed to obtain token:", response.statusText);
            return null;
        }
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        return 201;
}

export async function getAccessToken() {
    const response = await refresh.get("/auth/jwt/refresh/");
    const accessToken: string = response.data.access;
    localStorage.setItem("access_token", accessToken);
}