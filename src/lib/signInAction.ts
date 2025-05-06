"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

// Define a more specific type for the first parameter
export async function signInAction(_prevState: unknown, formData: FormData) {
  try {
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    });

    // If we get here, it means the sign-in was successful
    return null;
  } catch (error) {
    // Check if error is an instance of AuthError
    if (error instanceof AuthError) {
      // Use type assertion to access the type property
      const authError = error as { type?: string };

      // Now we can safely check the type property
      switch (authError.type) {
        case "CredentialsSignin":
          return "Invalid email or password";
        default:
          return "Something went wrong. Please try again.";
      }
    }

    return "An unexpected error occurred. Please try again.";
  }
}
