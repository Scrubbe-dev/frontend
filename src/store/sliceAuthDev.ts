import type { StateCreator } from "zustand";
import { api, localApi } from "@/lib/axios";
import { AxiosError } from "axios";

interface APIErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
  statusCode?: number;
}

export type DevUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isVerified: boolean;
  createdAt: string;
  lastLogin?: string;
};

export type DevAuthResponse = {
  user: DevUser;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};

export type SliceAuthDevType = {
  devUser: DevUser | null;
  devIsAuthenticated: boolean;
  devIsLoading: boolean;
  devError: string | null;
  devLogin: (email: string, password: string) => Promise<void>;
  devLogout: () => void;
  devRegister: (userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => Promise<void>;
  devClearError: () => void;
  devCheckAuthStatus: () => Promise<boolean>;
};

export const createAuthDevSlice: StateCreator<SliceAuthDevType> = (set) => ({
  devUser: null,
  devIsAuthenticated: false,
  devIsLoading: false,
  devError: null,

  devLogin: async (email, password) => {
    set({ devIsLoading: true, devError: null });
    try {
      const response = await api.post<DevAuthResponse>("/api/v1/login", {
        email,
        password,
      });

      const { user, tokens } = response.data;
      await localApi.post("/api/cookies/set", {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      });

      set({
        devUser: user,
        devIsAuthenticated: true,
        devIsLoading: false,
      });
    } catch (error) {
      const axiosError = error as AxiosError<APIErrorResponse>;
      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.message ||
        "Login failed";

      set({
        devError: errorMessage,
        devIsLoading: false,
      });
    }
  },

  devLogout: async () => {
    set({ devIsLoading: true });
    try {
      await localApi.post("/api/cookies/clear");
      set({
        devUser: null,
        devIsAuthenticated: false,
        devIsLoading: false,
      });
    } catch (err) {
      console.error("Error clearing cookies:", err);
      set({ devIsLoading: false });
    }
  },

  devRegister: async (userData) => {
    set({ devIsLoading: true, devError: null });

    try {
      const response = await api.post<DevAuthResponse>("/api/v1/register", {
        email: userData.email,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName,
      });

      const { user, tokens } = response.data;
      await localApi.post("/api/cookies/set", {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      });

      set({
        devUser: user,
        devIsAuthenticated: true,
        devIsLoading: false,
      });
    } catch (error) {
      const axiosError = error as AxiosError<APIErrorResponse>;
      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.message ||
        "Registration failed";

      set({
        devError: errorMessage,
        devIsLoading: false,
      });
    }
  },

  devClearError: () => set({ devError: null }),

  devCheckAuthStatus: async () => {
    set({ devIsLoading: true });
    try {
      const response = await api.get<{ user: DevUser }>("/api/v1/me");
      set({
        devUser: response.data.user,
        devIsAuthenticated: true,
        devIsLoading: false,
      });
      return true;
    } catch {
      set({
        devUser: null,
        devIsAuthenticated: false,
        devIsLoading: false,
      });
      return false;
    }
  },
});
