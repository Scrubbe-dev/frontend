"use client";
import Link from "next/link";
//import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as z from "zod";

// Define the form schema using zod
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

// TypeScript type based on the schema
type LoginFormData = z.infer<typeof loginSchema>;

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Keep the form handling structure closer to the original
  // even though we're simplifying functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Set loading state
      setIsLoading(true);

      // Log form values
      console.log(data);

      // Simulate a 7-second delay
      await new Promise((resolve) => setTimeout(resolve, 7000));

      // Show success toast after delay
      toast.success(`Successfully signed in!`, {
        description: `${data.email}, you are being redirected...`,
        duration: 5000,
      });

      // In a real app, you would redirect here
      // router.push("/");

      // Reset loading state
      setIsLoading(false);
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Sign in failed", {
        description:
          error instanceof Error ? error.message : "An error occurred",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Sign in to Scrubbe
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className={`block mb-2 text-sm font-medium ${
              isLoading ? "text-gray-500" : "text-gray-700"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Enter email"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isLoading
                ? "border-gray-200 bg-gray-50 opacity-70 cursor-not-allowed"
                : "border-gray-300"
            }`}
            disabled={isLoading}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className={`block mb-2 text-sm font-medium ${
              isLoading ? "text-gray-500" : "text-gray-700"
            }`}
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password")}
              placeholder="Enter password"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isLoading
                  ? "border-gray-200 bg-gray-50 opacity-70 cursor-not-allowed"
                  : "border-gray-300"
              }`}
              disabled={isLoading}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute inset-y-0 right-0 flex items-center pr-3 ${
                isLoading ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
                isLoading ? "opacity-80 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>
          <Link
            href="/auth/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full text-white py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isLoading
              ? "bg-blue-400 hover:bg-blue-400"
              : "bg-blue-600 hover:bg-blue-800"
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Signing in...
            </div>
          ) : (
            "Sign in"
          )}
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2">
          <button
            type="button"
            className="flex justify-center items-center p-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </button>
          <button
            type="button"
            className="flex justify-center items-center p-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <svg className="h-6 w-6" viewBox="0 0 36 36" fill="#FC6D26">
              <path d="M2,12.915l2.227,6.879L18,32.569l13.773-12.775L34,12.915Z" />
              <path d="M18,32.569l6.409-19.716H11.591Z" fill="#E24329" />
              <path d="M18,32.569,11.591,12.853H2Z" fill="#FC6D26" />
              <path
                d="M2,12.853l-1.8,2.615a1.208,1.208,0,0,0,.437,1.5L18,32.569Z"
                fill="#FCA326"
              />
            </svg>
          </button>
          <button
            type="button"
            className="flex justify-center items-center p-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#232F3E">
              <path d="M18.75 11.25h-4.5a.75.75 0 0 1-.75-.75V1.5a1.5 1.5 0 0 0-3 0v9a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 0-.53 1.28l6.75 6.75a.75.75 0 0 0 1.06 0l6.75-6.75a.75.75 0 0 0-.53-1.28z" />
            </svg>
          </button>
          <button
            type="button"
            className="flex justify-center items-center p-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#0078D4">
              <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" />
            </svg>
          </button>
          <button
            type="button"
            className="flex justify-center items-center p-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path
                d="M10 8v6l4.7-3-4.7-3zm11.3-1.9l-1.2-1.3c-.5-.5-1.1-.8-1.8-.8h-3.3v-2c0-1.1-.9-2-2-2h-10c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6.6c0-.4-.2-.8-.4-1.1z"
                fill="#737373"
              />
            </svg>
          </button>
        </div>

        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-blue-600 hover:underline inline-flex items-center"
          >
            Looking for our demo page?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </form>
    </div>
  );
}
