import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginSchema } from "../validations/auth.schema";
import { apiClient } from "../api/client";
import Zod from "zod";
import { developerSignupSchema } from "@/components/auth/DeveloperSignupForm";
import { businessProfileSignupSchema } from "@/components/auth/CompleteBusinessProfile";
import { UserSession } from "@/auth";
import { developerProfileSignupSchema } from "@/components/auth/CompleteDeveloperProfile";
import { AxiosError } from "axios";
import { deleteCookie, setCookie } from "cookies-next";
import { COOKIE_KEYS } from "../constant";
import { businessSignupSchema } from "@/components/auth/BusinessSignupForm";

export type User = {
  accountType: string;
  apiKey: string;
  apiKeyDuration: string;
  createdAt: string;
  email: string;
  firstName: string;
  id: string;
  isActive: boolean;
  isVerified: boolean;
  lastLogin?: string;
  lastName: string;
  oauthProvider_uuid: string;
  oauthprovider: string;
  passwordChangedAt?: string;
  profileImage?: string;
  registerdWithOauth: boolean;
  role: string;
  updatedAt: string;
  username?: string;
  purpose?: string;
};

type AuthState = {
  token: string | null;
  refreshToken: string | null;
  user: User | null;
  isLoading: boolean;
  error: string | null;
};

type AuthActions = {
  login: (email: string, password: string) => Promise<User | null>;
  oauthLogin: (
    email: string,
    provider_uuid: string,
    oAuthProvider: string
  ) => Promise<User | null>;
  developerSignup: (
    data: Zod.infer<typeof developerSignupSchema>
  ) => Promise<void>;
  businessSignup: (
    data: Zod.infer<typeof businessSignupSchema>
  ) => Promise<void>;
  businessProfileSignup: (
    data: Zod.infer<typeof businessProfileSignupSchema> & Partial<UserSession>
  ) => Promise<void>;
  developerProfileSignup: (
    data: Zod.infer<typeof developerProfileSignupSchema> & Partial<UserSession>
  ) => Promise<void>;
  verifyEmail: (code: string) => Promise<void>;
  resendOTP: () => Promise<void>;
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
  setUser: (value: User) => void;
};

const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set, get) => ({
      token: null,
      refreshToken: null,
      user: null,
      isLoading: false,
      error: null,
      setUser: (value) => {
        set({ user: value });
      },
      login: async (email, password) => {
        try {
          set({ isLoading: true, error: null });
          const validatedData = loginSchema.parse({ email, password });

          const { data } = await apiClient.post("/auth/login", validatedData);

          set({
            token: data.tokens.accessToken,
            refreshToken: data.tokens.refreshToken,
            user: data.user,
            isLoading: false,
          });

          setCookie(COOKIE_KEYS.TOKEN, data.tokens.accessToken);
          setCookie(COOKIE_KEYS.REFRESH_TOKEN, data.tokens.refreshToken);
          return data.user;
        } catch (error) {
          set({
            error:
              error instanceof AxiosError
                ? error.response?.data?.message
                : "Login failed",
            isLoading: false,
          });
          throw error;
        }
      },
      oauthLogin: async (email, provider_uuid, oAuthProvider) => {
        try {
          set({ isLoading: true, error: null });

          const validatedData = {
            email,
            provider_uuid,
            oAuthProvider,
          };

          const { data } = await apiClient.post(
            "/auth/oauth/login",
            validatedData
          );

          set({
            token: data.tokens.accessToken,
            refreshToken: data.tokens.refreshToken,
            user: data.user,
            isLoading: false,
          });
          setCookie(COOKIE_KEYS.TOKEN, data.tokens.accessToken);
          setCookie(COOKIE_KEYS.REFRESH_TOKEN, data.tokens.refreshToken);

          return data.user;
        } catch (error) {
          set({
            error:
              error instanceof AxiosError
                ? error.response?.data?.message
                : "Login failed",
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
          const validatedData = developerSignupSchema.parse(signupData);
          const firstName = validatedData.firstName;
          const lastName = validatedData.lastName;
          const devData = {
            email: validatedData.email,
            password: validatedData.password,
            firstName,
            lastName,
            githubUsername: validatedData.githubUsername,
            experienceLevel: validatedData.experience,
          };
          const { data } = await apiClient.post("/auth/dev/register", devData);
          console.log(devData, data);
          set({
            token: data.tokens.accessToken,
            refreshToken: data.tokens.refreshToken,
            user: data.user,
            isLoading: false,
          });
          setCookie(COOKIE_KEYS.TOKEN, data.tokens.accessToken);
          setCookie(COOKIE_KEYS.REFRESH_TOKEN, data.tokens.refreshToken);
        } catch (error) {
          set({
            error:
              error instanceof AxiosError
                ? error.response?.data?.message
                : "Signup failed",
            isLoading: false,
          });
          throw error;
        }
      },

      // Register Business
      registerBusiness: async (data: BusinessSignupData) => {
        try {
          set({ isLoading: true, error: null });
          const validatedData = businessSignupSchema.parse(signupData);

          const fullName = validatedData.fullName || "";
          const businessName = validatedData.businessName || "";
          const newBusinessData = {
            email: validatedData.businessEmail,
            password: validatedData.password,
            fullName,
            businessName,
            // companySize: validatedData.companySize,
            businessAddress: validatedData.businessAddress,
            //  add other fields
          };

          const { data } = await apiClient.post(
            "/auth/business/register",
            newBusinessData
          );
          set({
            token: data.tokens.accessToken,
            refreshToken: data.tokens.refreshToken,
            user: data.user,
            isLoading: false,
          });
          setCookie(COOKIE_KEYS.TOKEN, data.tokens.accessToken);
          setCookie(COOKIE_KEYS.REFRESH_TOKEN, data.tokens.refreshToken);
        } catch (error) {
          set({
            error:
              error instanceof AxiosError
                ? error.response?.data?.message
                : "Signup failed",
            isLoading: false,
          });
          throw error;
        }
      },
      async verifyEmail(code) {
        try {
          const userId = get().user?.id;
          if (!userId) return;
          const value = {
            code,
            userId,
          };
          set({ isLoading: true, error: null });
          await apiClient.post("/auth/verify_email", { ...value });
          set({ isLoading: false });
        } catch (error) {
          set({
            error:
              error instanceof AxiosError
                ? error.response?.data?.message
                : "Signup failed",
            isLoading: false,
          });
        }
      },
      async resendOTP() {
        try {
          const userId = get().user?.id;
          if (!userId) return;
          const value = {
            userId,
          };
          set({ isLoading: true, error: null });
          await apiClient.post("/auth/resend_otp", { ...value });
          set({ isLoading: false });
        } catch (error) {
          set({
            error:
              error instanceof AxiosError
                ? error.response?.data?.message
                : "Signup failed",
            isLoading: false,
          });
        }
      },
      businessProfileSignup: async (signupData) => {
        try {
          set({ isLoading: true, error: null });
          //TODO: use the service provider endpoint
          const newBusinessData = {
            firstName: signupData.firstName,
            lastName: signupData.lastName,
            id: signupData.id,
            oAuthProvider: signupData.oAuthProvider,
            email: signupData.email,
            isVerified: signupData.isVerified,
            image: signupData.image,
            businessAddress: signupData.businessAddress,
            companySize: signupData.companySize,
          };
          const { data } = await apiClient.post(
            "/auth/oauth/business/register",
            newBusinessData
          );
          set({
            token: data.tokens.accessToken,
            refreshToken: data.tokens.refreshToken,
            user: data.user,
            isLoading: false,
          });
          setCookie(COOKIE_KEYS.TOKEN, data.tokens.accessToken);
          setCookie(COOKIE_KEYS.REFRESH_TOKEN, data.tokens.refreshToken);
          return data?.user;
        } catch (error) {
          set({
            error:
              error instanceof AxiosError
                ? error.response?.data?.message
                : "Signup failed",
            isLoading: false,
          });
          throw error;
        }
      },
      developerProfileSignup: async (signupData) => {
        try {
          console.log(signupData);
          set({ isLoading: true, error: null });
          const newDevData = {
            firstName: signupData.firstName,
            lastName: signupData.lastName,
            id: signupData.id,
            oAuthProvider: signupData.oAuthProvider,
            email: signupData.email,
            isVerified: signupData.isVerified,
            image: signupData.image,
            experienceLevel: signupData.experience,
            githubUsername: signupData.githubUsername,
          };
          const { data } = await apiClient.post(
            "/auth/oauth/dev/register",
            newDevData
          );
          set({
            token: data.tokens.accessToken,
            refreshToken: data.tokens.refreshToken,
            user: data.user,
            isLoading: false,
          });
          setCookie(COOKIE_KEYS.TOKEN, data.tokens.accessToken);
          setCookie(COOKIE_KEYS.REFRESH_TOKEN, data.tokens.refreshToken);
        } catch (error) {
          set({
            error:
              error instanceof AxiosError
                ? error.response?.data?.message
                : "Signup failed",
            isLoading: false,
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
          set({ isLoading: true });
          deleteCookie(COOKIE_KEYS.TOKEN);
          deleteCookie(COOKIE_KEYS.REFRESH_TOKEN);
          set({
            token: null,
            refreshToken: null,
            user: null,
            isLoading: false,
          });
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
        token: state.token,
        refreshToken: state.refreshToken,
      }),
    }
  )
);

export default useAuthStore;

