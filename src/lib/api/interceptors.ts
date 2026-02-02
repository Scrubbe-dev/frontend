import { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from "axios";
import { getSession, signOut } from "next-auth/react";
import { apiClient } from "./client";

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const onTokenRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

const addRefreshSubscriber = (callback: (token: string) => void) => {
  refreshSubscribers.push(callback);
};

export const setupInterceptors = (instance: AxiosInstance) => {
  // Request interceptor
  instance.interceptors.request.use(
    async (config: CustomAxiosRequestConfig) => {
      try {
        const session = await getSession();
        
        if (session?.user?.accessToken) {
          config.headers.Authorization = `Bearer ${session.user.accessToken}`;
        }
        
        return config;
      } catch (error) {
        console.error("Error in request interceptor:", error);
        return config;
      }
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  instance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as CustomAxiosRequestConfig;

      if (!originalRequest) {
        return Promise.reject(error);
      }

      // Handle 401 errors
      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          // Wait for token refresh
          return new Promise((resolve) => {
            addRefreshSubscriber((token: string) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              resolve(instance(originalRequest));
            });
          });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const session = await getSession();
          const refreshToken = session?.user?.refreshToken;

          if (!refreshToken) {
            throw new Error("No refresh token available");
          }

          // Attempt to refresh the token
          const response = await apiClient.post("/auth/refresh-token", {
            refreshToken,
          });

          const { accessToken } = response.data;

          // Update session with new token
          // Note: In a real implementation, you might need to update the session
          // This is a simplified version
          
          onTokenRefreshed(accessToken);
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          
          isRefreshing = false;
          return instance(originalRequest);
        } catch (refreshError) {
          isRefreshing = false;
          
          // Token refresh failed, sign out user
          await signOut({ 
            redirect: true, 
            callbackUrl: "/auth/signin?error=SessionExpired" 
          });
          
          return Promise.reject(refreshError);
        }
      }

      // Handle other errors
      if (error.response?.status === 403) {
        console.error("Forbidden access:", error.response.data);
      }

      if (error.response?.status === 500) {
        console.error("Server error:", error.response.data);
      }

      return Promise.reject(error);
    }
  );
};
