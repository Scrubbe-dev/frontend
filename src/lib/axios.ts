// lib/axios.ts
import axios from "axios";

// Create a configured Axios instance
const api = axios.create({
  baseURL:
     process.env.NEXT_PUBLIC_API_BASE_URL || "https://admin-rul9.onrender.com",
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
    // You can add other default headers here
  },
});

export default api;
