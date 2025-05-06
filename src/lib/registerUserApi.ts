// src/lib/api.ts
import api from "@/lib/axios";
import axios, { AxiosError } from "axios";

interface RegisterUserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface RegisterResponse {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

interface ApiErrorResponse {
  message: string;
  [key: string]: unknown;
}

type RegistrationResult =
  | { success: true; data: RegisterResponse }
  | { success: false; error: string };

export async function registerUser(
  userData: RegisterUserData
): Promise<RegistrationResult> {
  try {
    // Direct API call to register endpoint, completely separate from Auth.js
    const response = await api.post<RegisterResponse>("/register", userData);

    return {
      success: true,
      data: response.data,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      return {
        success: false,
        error:
          axiosError.response?.data?.message ||
          axiosError.message ||
          "Registration failed",
      };
    }

    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}
