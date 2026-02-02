"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Input from "../ui/input";
import CButton from "../ui/Cbutton";
import useAuthStore from "@/lib/stores/auth.store";
import { developerSignupSchema, type DeveloperSignupFormData } from "@/lib/validations/auth.schema";

export default function DeveloperSignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");
  const router = useRouter();
  
  const { registerDeveloper } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    reset,
  } = useForm<DeveloperSignupFormData>({
    resolver: zodResolver(developerSignupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      githubUsername: "",
      experience: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: DeveloperSignupFormData) => {
    try {
      setIsLoading(true);

      const user = await registerDeveloper(data);
      setRegisteredEmail(user.email);
      setShowSuccess(true);
      reset();

      toast.success("Account created successfully!", {
        description: "Please check your email to verify your account.",
        duration: 5000,
      });
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed", {
        description:
          error instanceof Error ? error.message : "Something went wrong.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleContinue = () => {
    // Redirect to email verification page or sign in
    router.push("/auth/verify-email?email=" + encodeURIComponent(registeredEmail));
  };

  // Success Page Component
  const SuccessPage = () => {
    return (
      <div className="w-full p-6 flex flex-col items-center justify-center min-h-96">
        <div className="mb-8">
          <div className="relative flex items-center justify-center">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="95" fill="#E6F3FF" opacity="0.4" />
              <circle cx="100" cy="100" r="75" fill="#CCE7FF" opacity="0.6" />
              <circle cx="100" cy="100" r="55" fill="#99D6FF" opacity="0.8" />
              <circle cx="100" cy="100" r="35" fill="#2563EB" />
              <path
                d="M85 100L95 110L115 90"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Account Created Successfully!
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Welcome! Your developer account has been created. Please verify your email address to continue.
        </p>

        <CButton onClick={handleContinue} type="button">
          Continue to Verification
        </CButton>

        <div className="mt-4 text-center">
          <Link
            href="/auth/signin"
            className="text-blue-600 hover:underline text-sm"
          >
            Already verified? Sign in
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full p-6">
      {showSuccess ? (
        <SuccessPage />
      ) : (
        <>
          <h1 className="text-xl md:text-2xl font-semibold mb-6">
            Developer Signup
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div className="mb-4">
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    error={errors.fullName?.message}
                    isLoading={isLoading}
                    {...field}
                  />
                )}
              />
            </div>

            {/* Email and GitHub Username Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    label="Email"
                    placeholder="Enter Email"
                    type="email"
                    error={errors.email?.message}
                    isLoading={isLoading}
                    {...field}
                  />
                )}
              />
              <Controller
                name="githubUsername"
                control={control}
                render={({ field }) => (
                  <Input
                    label="GitHub Username (Optional)"
                    placeholder="Enter username"
                    error={errors.githubUsername?.message}
                    isLoading={isLoading}
                    {...field}
                  />
                )}
              />
            </div>

            {/* Experience Level */}
            <div className="mb-4">
              <label
                htmlFor="experience"
                className={`block mb-2 text-sm font-medium ${
                  isLoading ? "text-gray-500" : "text-gray-700"
                }`}
              >
                Experience Level
              </label>
              <select
                id="experience"
                {...register("experience")}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isLoading
                    ? "border-gray-200 bg-gray-50 opacity-70 cursor-not-allowed"
                    : "border-gray-300"
                }`}
                disabled={isLoading}
              >
                <option value="">Select experience level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
              {errors.experience && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.experience.message}
                </p>
              )}
            </div>

            {/* Password Fields Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    label="Create Password"
                    placeholder="Enter password"
                    type="password"
                    error={errors.password?.message}
                    isLoading={isLoading}
                    {...field}
                  />
                )}
              />
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <Input
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    type="password"
                    error={errors.confirmPassword?.message}
                    isLoading={isLoading}
                    {...field}
                  />
                )}
              />
            </div>

            {/* Submit Button */}
            <CButton
              type="submit"
              disabled={isLoading || !isValid}
              isLoading={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </CButton>

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
              <button
                type="button"
                disabled={isLoading}
                className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <Image
                  src="/icon-auth-github.svg"
                  alt="GitHub"
                  width={38}
                  height={38}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">
                  GitHub
                </span>
              </button>

              <button
                type="button"
                disabled={isLoading}
                className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <Image
                  src="/icon-auth-gitlab.svg"
                  alt="GitLab"
                  width={38}
                  height={38}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">
                  GitLab
                </span>
              </button>

              <button
                type="button"
                disabled={isLoading}
                className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50"
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

              <button
                type="button"
                disabled={isLoading}
                className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <Image
                  src="/icon-auth-azure.svg"
                  alt="Azure"
                  width={38}
                  height={38}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">
                  Azure
                </span>
              </button>

              <button
                type="button"
                disabled={isLoading}
                className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50"
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
            </div>

            {/* Demo Page Link */}
            <div className="text-center">
              <Link
                href="/auth/demo-page"
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
        </>
      )}
    </div>
  );
}
