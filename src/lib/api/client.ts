import axios from "axios";
import { setupInterceptors } from "./interceptors";

const baseURL =  "https://admin-rul9.onrender.com/api/v1";

if (!baseURL) {
  throw new Error("Missing NEXT_PUBLIC_API_BASE_URL environment variable");
}

export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

setupInterceptors(apiClient);
