import { create } from "zustand";
import { persist } from "zustand/middleware";
import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "next-auth/react";
import { apiClient } from "../api/client";
import { AuthUser, AuthTokens } from "@/auth";

export type AccountType = "DEVELOPER" | "BUSINESS";

export interface User extends AuthUser {
  accountType?: AccountType;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

interface AuthActions {
  // Authentication actions
  login: (email: string, password: string, callbackUrl?: string) => Promise<void>;
  logout: () => Promise<void>;
  
  // Registration actions
  registerDeveloper: (data: DeveloperSignupData) => Promise<User>;
  registerBusiness: (data: BusinessSignupData) => Promise<User>;
  
  // Verification actions
  verifyEmail: (userId: string, code: string) => Promise<void>;
  resendOTP: (userId: string) => Promise<void>;
  
  // Password actions
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  validateResetToken: (token: string) => Promise<boolean>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
  
  // Session actions
  setUser: (user: User | null) => void;
  clearError: () => void;
  updateTokens: (tokens: AuthTokens) => void;
}

export interface DeveloperSignupData {
  fullName: string;
  email: string;
  githubUsername?: string;
  experience?: string;
  password: string;
  confirmPassword?: string;
}

export interface BusinessSignupData {
  fullName: string;
  email: string;
  githubUsername: string;
  experience?: string;
  password: string;
  confirmPassword?: string;
  businessAddress?: string;
  companySize?: string;
  purpose?: string;
}

const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      isLoading: false,
      error: null,
      isAuthenticated: false,

      // Login with NextAuth
      login: async (email: string, password: string, callbackUrl?: string) => {
        try {
          set({ isLoading: true, error: null });
          
          const result = await nextAuthSignIn("credentials", {
            email,
            password,
            redirect: false,
            callbackUrl: callbackUrl || "/dashboard",
          });

          if (result?.error) {
            throw new Error(result.error === "CredentialsSignin" 
              ? "Invalid email or password" 
              : result.error
            );
          }

          if (result?.ok) {
            set({ 
              isLoading: false, 
              isAuthenticated: true,
              error: null 
            });
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : "Login failed";
          set({ 
            error: errorMessage, 
            isLoading: false,
            isAuthenticated: false 
          });
          throw error;
        }
      },

      // Logout
      logout: async () => {
        try {
          set({ isLoading: true });
          
          // Call server logout if refresh token exists
          const { user } = get();
          if (user?.refreshToken) {
            try {
              await apiClient.post("/auth/logout", { 
                refreshToken: user.refreshToken 
              });
            } catch (error) {
              console.error("Server logout error:", error);
              // Continue with client logout even if server logout fails
            }
          }
          
          await nextAuthSignOut({ 
            redirect: true, 
            callbackUrl: "/auth/signin" 
          });
          
          set({ 
            user: null, 
            isLoading: false, 
            isAuthenticated: false,
            error: null 
          });
        } catch (error) {
          set({ 
            isLoading: false, 
            error: error instanceof Error ? error.message : "Logout failed" 
          });
          throw error;
        }
      },

      // Register Developer
      registerDeveloper: async (data: DeveloperSignupData) => {
        try {
          set({ isLoading: true, error: null });
          
          const nameParts = data.fullName.trim().split(/\s+/);
          const firstName = nameParts[0] || "";
          const lastName = nameParts.slice(1).join(" ") || "";
          
          const registrationData = {
            email: data.email,
            password: data.password,
            firstName,
            lastName,
            githubUsername: data.githubUsername,
            experienceLevel: data.experience,
          };

          const response = await apiClient.post("/auth/dev/register", registrationData);
          
          if (!response.data?.user || !response.data?.tokens) {
            throw new Error("Invalid response from server");
          }

          const user: User = {
            ...response.data.user,
            accessToken: response.data.tokens.accessToken,
            refreshToken: response.data.tokens.refreshToken,
          };

          set({ 
            user, 
            isLoading: false, 
            isAuthenticated: true,
            error: null 
          });

          return user;
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : "Registration failed";
          set({ 
            error: errorMessage, 
            isLoading: false 
          });
          throw error;
        }
      },

      // Register Business
      registerBusiness: async (data: BusinessSignupData) => {
        try {
          set({ isLoading: true, error: null });
          
          const nameParts = data.fullName.trim().split(/\s+/);
          const firstName = nameParts[0] || "";
          const lastName = nameParts.slice(1).join(" ") || "";
          
          const registrationData = {
            email: data.email,
            password: data.password,
            firstName,
            lastName,
            businessAddress: data.businessAddress,
            companySize: data.companySize,
            purpose: data.purpose,
          };

          const response = await apiClient.post("/auth/business/register", registrationData);
          
          if (!response.data?.user || !response.data?.tokens) {
            throw new Error("Invalid response from server");
          }

          const user: User = {
            ...response.data.user,
            accessToken: response.data.tokens.accessToken,
            refreshToken: response.data.tokens.refreshToken,
          };

          set({ 
            user, 
            isLoading: false, 
            isAuthenticated: true,
            error: null 
          });

          return user;
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : "Registration failed";
          set({ 
            error: errorMessage, 
            isLoading: false 
          });
          throw error;
        }
      },

      // Verify Email
      verifyEmail: async (userId: string, code: string) => {
        try {
          set({ isLoading: true, error: null });
          
          await apiClient.post("/auth/verify_email", { userId, code });
          
          // Update user verification status
          const { user } = get();
          if (user) {
            set({ 
              user: { ...user, isVerified: true },
              isLoading: false,
              error: null 
            });
          }
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : "Verification failed", 
            isLoading: false 
          });
          throw error;
        }
      },

      // Resend OTP
      resendOTP: async (userId: string) => {
        try {
          set({ isLoading: true, error: null });
          
          await apiClient.post("/auth/resend_otp", { userId });
          
          set({ isLoading: false, error: null });
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : "Failed to resend OTP", 
            isLoading: false 
          });
          throw error;
        }
      },

      // Forgot Password
      forgotPassword: async (email: string) => {
        try {
          set({ isLoading: true, error: null });
          
          await apiClient.post("/auth/forgot-password", { email });
          
          set({ isLoading: false, error: null });
        } catch (error) {
          // Don't expose whether email exists or not for security
          set({ isLoading: false, error: null });
        }
      },

      // Reset Password
      resetPassword: async (token: string, password: string) => {
        try {
          set({ isLoading: true, error: null });
          
          await apiClient.post("/auth/reset-password", { token, password });
          
          set({ isLoading: false, error: null });
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : "Password reset failed", 
            isLoading: false 
          });
          throw error;
        }
      },

      // Validate Reset Token
      validateResetToken: async (token: string) => {
        try {
          const response = await apiClient.post("/auth/validate-reset-token", { token });
          return response.data?.valid === true;
        } catch (error) {
          return false;
        }
      },

      // Change Password
      changePassword: async (currentPassword: string, newPassword: string) => {
        try {
          set({ isLoading: true, error: null });
          
          await apiClient.post("/auth/change-password", { 
            currentPassword, 
            newPassword 
          });
          
          set({ isLoading: false, error: null });
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : "Password change failed", 
            isLoading: false 
          });
          throw error;
        }
      },

      // Set user directly
      setUser: (user: User | null) => {
        set({ 
          user, 
          isAuthenticated: !!user,
          error: null 
        });
      },

      // Clear error
      clearError: () => set({ error: null }),

      // Update tokens
      updateTokens: (tokens: AuthTokens) => {
        const { user } = get();
        if (user) {
          set({ 
            user: { 
              ...user, 
              accessToken: tokens.accessToken, 
              refreshToken: tokens.refreshToken 
            } 
          });
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ 
        user: state.user,
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);

export default useAuthStore;
