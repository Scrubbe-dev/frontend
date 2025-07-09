import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginSchema, businessSignupSchema } from "../validations/auth.schema";
import { apiClient } from "../api/client";
import Zod from "zod";
import { developerSignupSchema } from "@/components/auth/DeveloperSignupForm";

type User = {
  id: string;
  email: string;
  name: string;
  role: "developer" | "business";
};

type AuthState = {
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
  logout: () => Promise<void>;
  clearError: () => void;
};

const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      error: null,
      login: async (email, password) => {
        try {
          set({ isLoading: true, error: null });
          const validatedData = loginSchema.parse({ email, password });

          const { data } = await apiClient.post("/login", validatedData);

          set({ user: data.user, isLoading: false });
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

          set({ user: data.user, isLoading: false });
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
            //  add other fields
          };

          const { data } = await apiClient.post("/register", newBusinessData);
          console.log(newBusinessData, data);
          set({ user: data.user, isLoading: false });
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
          set({ user: null, isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },
      clearError: () => set({ error: null }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user }),
    }
  )
);

export default useAuthStore;
