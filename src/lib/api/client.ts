import axios from "axios";
import { setupInterceptors } from "./interceptors";
import { getCookie } from "cookies-next";
import { COOKIE_KEYS } from "../constant";

const baseURL = "https://admin-rul9.onrender.com/api/v1";

if (!baseURL) {
  throw new Error("Missing NEXT_PUBLIC_API_BASE_URL environment variable");
}

const token = getCookie(COOKIE_KEYS.TOKEN);
export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

setupInterceptors(apiClient);
