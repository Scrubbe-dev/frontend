"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import * as z from "zod";

// Define the form schema using zod
const businessSignupSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    businessEmail: z
      .string()
      .email({ message: "Please enter a valid email address" }),
    businessAddress: z
      .string()
      .min(1, { message: "Business address is required" }),
    companySize: z.string().min(1, { message: "Please select company size" }),
    purpose: z.string().min(1, { message: "Please select a purpose" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// TypeScript type based on the schema
type BusinessSignupFormData = z.infer<typeof businessSignupSchema>;

export default function BusinessSignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessSignupFormData>({
    resolver: zodResolver(businessSignupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      businessEmail: "",
      businessAddress: "",
      companySize: "",
      purpose: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: BusinessSignupFormData) => {
    try {
      // Set loading state
      setIsLoading(true);

      // Log form values
      console.log(data, " business registration");

      // Simulate a 5-second delay
      await new Promise((resolve) => setTimeout(resolve, 5000));

      // Show success toast after delay
      toast.success(`Account created successfully!`, {
        description: `${data.firstName} ${data.lastName}, you'll be redirected to sign in shortly.`,
        duration: 10000,
      });

      // In a real app, you would redirect here
      // router.push("/auth/signin");

      // Reset loading state
      setIsLoading(false);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed", {
        description:
          error instanceof Error ? error.message : "Something went wrong.",
      });
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Business Signup
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name and Last Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="firstName"
              className={`block mb-2 text-sm font-medium ${
                isLoading ? "text-gray-500" : "text-gray-700"
              }`}
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName")}
              placeholder="First Name"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isLoading
                  ? "border-gray-200 bg-gray-50 opacity-70 cursor-not-allowed"
                  : "border-gray-300"
              }`}
              disabled={isLoading}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="lastName"
              className={`block mb-2 text-sm font-medium ${
                isLoading ? "text-gray-500" : "text-gray-700"
              }`}
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName")}
              placeholder="Last Name"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isLoading
                  ? "border-gray-200 bg-gray-50 opacity-70 cursor-not-allowed"
                  : "border-gray-300"
              }`}
              disabled={isLoading}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Business Email and Business Address Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="businessEmail"
              className={`block mb-2 text-sm font-medium ${
                isLoading ? "text-gray-500" : "text-gray-700"
              }`}
            >
              Business Email
            </label>
            <input
              type="email"
              id="businessEmail"
              {...register("businessEmail")}
              placeholder="Enter Business Email"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isLoading
                  ? "border-gray-200 bg-gray-50 opacity-70 cursor-not-allowed"
                  : "border-gray-300"
              }`}
              disabled={isLoading}
            />
            {errors.businessEmail && (
              <p className="text-red-500 text-xs mt-1">
                {errors.businessEmail.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="businessAddress"
              className={`block mb-2 text-sm font-medium ${
                isLoading ? "text-gray-500" : "text-gray-700"
              }`}
            >
              Business Address
            </label>
            <input
              type="text"
              id="businessAddress"
              {...register("businessAddress")}
              placeholder="Enter Business Address"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isLoading
                  ? "border-gray-200 bg-gray-50 opacity-70 cursor-not-allowed"
                  : "border-gray-300"
              }`}
              disabled={isLoading}
            />
            {errors.businessAddress && (
              <p className="text-red-500 text-xs mt-1">
                {errors.businessAddress.message}
              </p>
            )}
          </div>
        </div>

        {/* Company Size and Purpose Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="companySize"
              className={`block mb-2 text-sm font-medium ${
                isLoading ? "text-gray-500" : "text-gray-700"
              }`}
            >
              Company&apos;s size
            </label>
            <select
              id="companySize"
              {...register("companySize")}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isLoading
                  ? "border-gray-200 bg-gray-50 opacity-70 cursor-not-allowed"
                  : "border-gray-300"
              }`}
              disabled={isLoading}
            >
              <option value="">Select Size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="500+">500+ employees</option>
            </select>
            {errors.companySize && (
              <p className="text-red-500 text-xs mt-1">
                {errors.companySize.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="purpose"
              className={`block mb-2 text-sm font-medium ${
                isLoading ? "text-gray-500" : "text-gray-700"
              }`}
            >
              What do you need scrubbe for?
            </label>
            <select
              id="purpose"
              {...register("purpose")}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isLoading
                  ? "border-gray-200 bg-gray-50 opacity-70 cursor-not-allowed"
                  : "border-gray-300"
              }`}
              disabled={isLoading}
            >
              <option value="">Select Purpose</option>
              <option value="code-review">Code Review</option>
              <option value="security-scanning">Security Scanning</option>
              <option value="quality-assurance">Quality Assurance</option>
              <option value="compliance">Compliance</option>
              <option value="other">Other</option>
            </select>
            {errors.purpose && (
              <p className="text-red-500 text-xs mt-1">
                {errors.purpose.message}
              </p>
            )}
          </div>
        </div>

        {/* Password Fields Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label
              htmlFor="password"
              className={`block mb-2 text-sm font-medium ${
                isLoading ? "text-gray-500" : "text-gray-700"
              }`}
            >
              Create Password
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
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
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
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.640 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
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
          <div>
            <label
              htmlFor="confirmPassword"
              className={`block mb-2 text-sm font-medium ${
                isLoading ? "text-gray-500" : "text-gray-700"
              }`}
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                {...register("confirmPassword")}
                placeholder="Confirm Password"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isLoading
                    ? "border-gray-200 bg-gray-50 opacity-70 cursor-not-allowed"
                    : "border-gray-300"
                }`}
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className={`absolute inset-y-0 right-0 flex items-center pr-3 ${
                  isLoading ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {showConfirmPassword ? (
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
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.640 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
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
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full text-white py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-6 ${
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
              Processing...
            </div>
          ) : (
            "Create Account"
          )}
        </button>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        {/* OAuth Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-6">
          <Link href="#" className="w-full">
            <button
              type="button"
              className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Image
                src="/icon-auth-github.svg"
                alt="GitHub"
                width={38}
                height={38}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700">GitHub</span>
            </button>
          </Link>

          <Link href="#" className="w-full">
            <button
              type="button"
              className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Image
                src="/icon-auth-gitlab.svg"
                alt="GitLab"
                width={38}
                height={38}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700">GitLab</span>
            </button>
          </Link>

          <Link href="#" className="w-full">
            <button
              type="button"
              className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Image
                src="/icon-auth-aws.svg"
                alt="AWS"
                width={38}
                height={38}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700">AWS</span>
            </button>
          </Link>

          <Link href="#" className="w-full">
            <button
              type="button"
              className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Image
                src="/icon-auth-azure.svg"
                alt="Azure"
                width={38}
                height={38}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700">Azure</span>
            </button>
          </Link>

          <Link href="#" className="w-full">
            <button
              type="button"
              className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Image
                src="/icon-auth-sso.svg"
                alt="SSO"
                width={38}
                height={38}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700">SSO</span>
            </button>
          </Link>
        </div>

        {/* Demo Page Link */}
        <div className="text-center">
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
