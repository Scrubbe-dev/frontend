import axios from "axios";
import { setupInterceptors } from "./interceptors";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api/v1";

if (!baseURL) {
  throw new Error("Missing NEXT_PUBLIC_API_BASE_URL environment variable");
}

export const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000, // 30 seconds timeout
});

setupInterceptors(apiClient);

export default apiClient;
