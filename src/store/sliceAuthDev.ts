import type { StateCreator } from "zustand";
import api from "@/lib/axios";
import Cookies from "js-cookie";
import { AxiosError } from "axios";

// Define interface for API error responses
interface APIErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
  statusCode?: number;
}

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isVerified: boolean;
  createdAt: string;
};

export type AuthResponse = {
  user: User;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};

export type SliceAuthDevType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => Promise<void>;
  clearError: () => void;
};

export const createAuthDevSlice: StateCreator<SliceAuthDevType> = (set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.post<AuthResponse>("/api/v1/login", {
        email,
        password,
      });

      const { user, tokens } = response.data;

      // Store tokens in cookies
      Cookies.set("accessToken", tokens.accessToken, {
        secure: true,
        sameSite: "strict",
      });
      Cookies.set("refreshToken", tokens.refreshToken, {
        secure: true,
        sameSite: "strict",
      });

      set({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      // Handle axios error with proper typing
      const axiosError = error as AxiosError<APIErrorResponse>;
      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.message ||
        "Login failed";

      set({
        error: errorMessage,
        isLoading: false,
      });
    }
  },

  logout: () => {
    // Remove cookies
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");

    set({
      user: null,
      isAuthenticated: false,
    });
  },

  register: async (userData) => {
    set({ isLoading: true, error: null });

     console.log("Registration attempt with:", {
       email: userData.email,
       password: userData.password,
       firstName: userData.firstName,
       lastName: userData.lastName,
     });
     
    try {
      const response = await api.post<AuthResponse>("/api/v1/register", {
        email: userData.email,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName,
      });

      const { user, tokens } = response.data;

      // Store tokens in cookies
      Cookies.set("accessToken", tokens.accessToken, {
        secure: true,
        sameSite: "strict",
      });
      Cookies.set("refreshToken", tokens.refreshToken, {
        secure: true,
        sameSite: "strict",
      });

      set({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      // Handle axios error with proper typing
      const axiosError = error as AxiosError<APIErrorResponse>;
      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.message ||
        "Registration failed";

      set({
        error: errorMessage,
        isLoading: false,
      });
    }
  },

  clearError: () => set({ error: null }),
});
