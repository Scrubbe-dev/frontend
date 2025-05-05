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
  devLogin: (email: string, password: string) => Promise<boolean>;
  devLogout: () => Promise<boolean>;
  devRegister: (userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => Promise<boolean>;
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
      // Use the api client which now points to the proxy in development
      const response = await api.post<DevAuthResponse>("/login", {
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
      return true; // Return success status
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
      return false; // Return failure status
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
      return true; // Return success status
    } catch (err) {
      console.error("Error clearing cookies:", err);
      set({ devIsLoading: false });
      return false; // Return failure status
    }
  },

  devRegister: async (userData) => {
    console.log("[devRegister] Starting registration process", {
      email: userData.email,
      firstName: userData.firstName,
    });
    set({ devIsLoading: true, devError: null });
    console.log("[devRegister] State updated: isLoading=true, error=null");

    try {
      console.log("[devRegister] Sending registration request to API...");
      // Use the api client which now points to the proxy in development
      const response = await api.post<DevAuthResponse>("/register", {
        email: userData.email,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName,
      });
      console.log(
        "[devRegister] Registration successful! User created with ID:",
        response.data.user.id
      );

      const { user, tokens } = response.data;
      console.log("[devRegister] Setting cookies with tokens...");
      await localApi.post("/api/cookies/set", {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      });
      console.log("[devRegister] Cookies set successfully");

      console.log("[devRegister] Updating state with authenticated user");
      set({
        devUser: user,
        devIsAuthenticated: true,
        devIsLoading: false,
      });
      console.log("[devRegister] Process completed successfully");
      return true; // Return success status
    } catch (error) {
      console.error("[devRegister] Error occurred during registration:", error);
      const axiosError = error as AxiosError<APIErrorResponse>;
      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.message ||
        "Registration failed";

      console.log("[devRegister] Setting error state:", errorMessage);
      set({
        devError: errorMessage,
        devIsLoading: false,
      });
      return false; // Return failure status
    }
  },

  devClearError: () => set({ devError: null }),

  devCheckAuthStatus: async () => {
    set({ devIsLoading: true });
    try {
      const response = await api.get<{ user: DevUser }>("/me");
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
