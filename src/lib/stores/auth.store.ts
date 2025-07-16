import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginSchema, businessSignupSchema } from "../validations/auth.schema";
import { apiClient } from "../api/client";
import Zod from "zod";
import { developerSignupSchema } from "@/components/auth/DeveloperSignupForm";
import { businessProfileSignupSchema } from "@/components/auth/CompleteBusinessProfile";
import { UserSession } from "@/auth";
import { developerProfileSignupSchema } from "@/components/auth/CompleteDeveloperProfile";

type User = {
  id: string;
  email: string;
  name: string;
  role: "developer" | "business";
};

type AuthState = {
  token: string | null;
  refreshToken: string | null;
  user: User | null;
  isLoading: boolean;
  error: string | null;
};

type AuthActions = {
  login: (email: string, password: string) => Promise<void>;
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
  logout: () => Promise<void>;
  clearError: () => void;
};

const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      token: null,
      refreshToken: null,
      user: null,
      isLoading: false,
      error: null,
      login: async (email, password) => {
        try {
          set({ isLoading: true, error: null });
          const validatedData = loginSchema.parse({ email, password });

          const { data } = await apiClient.post("/login", validatedData);

          set({
            token: data.tokens.accessToken,
            refreshToken: data.tokens.refreshToken,
            user: data.user,
            isLoading: false,
          });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Login failed",
            isLoading: false,
          });
          throw error;
        }
      },
      developerSignup: async (signupData) => {
        try {
          set({ isLoading: true, error: null });
          const validatedData = developerSignupSchema.parse(signupData);
          const firstName = validatedData.firstName;
          const lastName = validatedData.lastName;
          const newBusinessData = {
            email: validatedData.email,
            password: validatedData.password,
            firstName,
            lastName,
            username: validatedData.githubUsername,
            experience: validatedData.experience,
          };
          const { data } = await apiClient.post("/register", newBusinessData);
          console.log(newBusinessData, data);
          set({
            token: data.tokens.accessToken,
            refreshToken: data.tokens.refreshToken,
            user: data.user,
            isLoading: false,
          });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Signup failed",
            isLoading: false,
          });
          throw error;
        }
      },
      businessSignup: async (signupData) => {
        try {
          set({ isLoading: true, error: null });
          const validatedData = businessSignupSchema.parse(signupData);

          const firstName = validatedData.firstName || "";
          const lastName = validatedData.lastName || "";
          const newBusinessData = {
            email: validatedData.businessEmail,
            password: validatedData.password,
            firstName,
            lastName,
            companySize: validatedData.companySize,
            businessAddress: validatedData.businessAddress,
            purpose: validatedData.purpose,
            //  add other fields
          };

          const { data } = await apiClient.post("/register", newBusinessData);
          console.log(newBusinessData, data);
          set({
            token: data.tokens.accessToken,
            refreshToken: data.tokens.refreshToken,
            user: data.user,
            isLoading: false,
          });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Signup failed",
            isLoading: false,
          });
          throw error;
        }
      },
      businessProfileSignup: async (signupData) => {
        try {
          console.log(signupData);
          set({ isLoading: true, error: null });
          const validatedData = businessProfileSignupSchema.parse(signupData);
          console.log(validatedData);
          //TODO: use the service provider endpoint

          // const { data } = await apiClient.post("/register", newBusinessData);
          // console.log(newBusinessData, data);
          // set({
          //   token: data.tokens.accessToken,
          //   refreshToken: data.tokens.refreshToken,
          //   user: data.user,
          //   isLoading: false,
          // });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Signup failed",
            isLoading: false,
          });
          throw error;
        }
      },
      developerProfileSignup: async (signupData) => {
        try {
          console.log(signupData);
          set({ isLoading: true, error: null });
          const validatedData = developerProfileSignupSchema.parse(signupData);
          console.log(validatedData);
          //TODO: use the service provider endpoint

          // const { data } = await apiClient.post("/register", newBusinessData);
          // console.log(newBusinessData, data);
          // set({
          //   token: data.tokens.accessToken,
          //   refreshToken: data.tokens.refreshToken,
          //   user: data.user,
          //   isLoading: false,
          // });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Signup failed",
            isLoading: false,
          });
          throw error;
        }
      },
      logout: async () => {
        try {
          set({ isLoading: true });
          await apiClient.post("/logout");
          set({
            token: null,
            refreshToken: null,
            user: null,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },
      clearError: () => set({ error: null }),
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
