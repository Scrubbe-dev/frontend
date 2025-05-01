import axios from "axios";

// Create a configured Axios instance for external API
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
    // You can add other default headers here
  },
});

// Create a separate axios instance for local Next.js API routes
const localApi = axios.create({
  baseURL: "", // Empty base URL to use relative paths
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

export { api, localApi };
export default api; // Keep default export for backward compatibility
