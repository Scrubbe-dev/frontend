// src/lib/axios.ts
import axios from "axios";

// Determine which base URL to use
const getBaseUrl = () => {
  // In development, use the proxy to avoid CORS issues
  if (process.env.NODE_ENV === "development") {
    return "/api/proxy";
  }
  // In production, use the direct API URL
  return "https://admin-rul9.onrender.com/api/v1";
};

// Create a configured Axios instance for API calls
const api = axios.create({
  baseURL: getBaseUrl(),
  timeout: 10000, // 10 seconds
  withCredentials: true, // Crucial for cross-origin cookie handling
  headers: {
    "Content-Type": "application/json",
  },
});

export default api; // Keep default export for backward compatibility
