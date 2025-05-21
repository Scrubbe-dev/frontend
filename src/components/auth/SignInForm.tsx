"use client";
import Link from "next/link";
import Image from "next/image";
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-self-center gap-2 w-full">
          <Link href="#" className="w-full">
            <button
              type="button"
              className="w-full flex items-center justify-center px-3 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Image
                src="/icon-auth-github.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700">GitHub</span>
            </button>
          </Link>

          <Link href="#" className="w-full">
            <button
              type="button"
              className="w-full flex items-center justify-center px-3 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Image
                src="/icon-auth-gitlab.svg"
                alt="GitLab"
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700">GitLab</span>
            </button>
          </Link>

          <Link href="#" className="w-full">
            <button
              type="button"
              className="w-full flex items-center justify-center px-3 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Image
                src="/icon-auth-aws.svg"
                alt="AWS"
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700">AWS</span>
            </button>
          </Link>

          <Link href="#" className="w-full">
            <button
              type="button"
              className="w-full flex items-center justify-center px-3 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Image
                src="/icon-auth-azure.svg"
                alt="Azure"
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700">Azure</span>
            </button>
          </Link>

          <Link href="#" className="w-full">
            <button
              type="button"
              className="w-full flex items-center justify-center px-3 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Image
                src="/icon-auth-sso.svg"
                alt="SSO"
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700">SSO</span>
            </button>
          </Link>
        </div>

        <div className="mt-6 text-center">
          <Link
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
          </Link>
        </div>
      </form>
    </div>
  );
}
