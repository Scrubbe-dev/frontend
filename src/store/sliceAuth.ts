import type { StateCreator } from "zustand";

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  avatar?: string;
  lastLogin?: string;
};

export type SliceAuthType = {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (
    userData: Omit<User, "id" | "role" | "lastLogin">
  ) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUser: (userData: Partial<User>) => void;
  clearError: () => void;
};

export const createAuthSlice: StateCreator<SliceAuthType> = (set, get) => ({
  user: null,
  accessToken: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      // This would be replaced with your actual API call
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      set({
        user: data.user,
        accessToken: data.accessToken,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Login failed",
        isLoading: false,
      });
    }
  },

  logout: () => {
    // Optional: Make API call to invalidate token on server
    set({
      user: null,
      accessToken: null,
      isAuthenticated: false,
    });
  },

  register: async (userData) => {
    set({ isLoading: true, error: null });
    try {
      // This would be replaced with your actual API call
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      set({
        user: data.user,
        accessToken: data.accessToken,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Registration failed",
        isLoading: false,
      });
    }
  },

  resetPassword: async (email) => {
    set({ isLoading: true, error: null });
    try {
      // This would be replaced with your actual API call
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Password reset request failed");
      }

      set({ isLoading: false });
      return;
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Password reset failed",
        isLoading: false,
      });
    }
  },

  updateUser: (userData) => {
    const currentUser = get().user;
    if (!currentUser) return;

    set({
      user: { ...currentUser, ...userData },
    });

    // You could also add an API call here to update the user on the server
  },

  clearError: () => set({ error: null }),
});
