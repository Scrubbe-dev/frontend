import axios from "axios";
import { setupInterceptors } from "./interceptors";


export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL!!,
  headers: {
    "Content-Type": "application/json",
  },
});

setupInterceptors(apiClient);