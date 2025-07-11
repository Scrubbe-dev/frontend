"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import * as z from "zod";
import Input from "../ui/input";
import { Controller } from "react-hook-form";
import CButton from "../ui/Cbutton";
import Select from "../ui/select";
import useAuthStore from "@/lib/stores/auth.store";
import { signIn, useSession } from "next-auth/react";
import CompleteDeveloperProfile, {
  DeveloperProfileSignupFormData,
} from "./CompleteDeveloperProfile";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

// Define the form schema using zod
export const developerSignupSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    githubUsername: z.string().optional(),
    experience: z
      .string()
      .min(1, { message: "Please select experience level" }),
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
type DeveloperSignupFormData = z.infer<typeof developerSignupSchema>;

// Success Page Component Props Type
interface SuccessPageProps {
  firstName: string;
  lastName: string;
}

export default function DeveloperSignupForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] =
    useState<Partial<DeveloperSignupFormData> | null>(null);
  const { developerSignup, isLoading, developerProfileSignup } = useAuthStore();
  const session = useSession();
  const [profileComplete, setProfileComplete] = useState(false);
  const searchParams = useSearchParams();
  const path = searchParams.get("to");
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<DeveloperSignupFormData>({
    resolver: zodResolver(developerSignupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
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
      // Log form values
      console.log(data, " developer registration");

      // Simulate a 5-second delay
      await developerSignup(data);
      // Store form data and show success page
      setFormData(data);
      setShowSuccess(true);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed", {
        description:
          error instanceof Error ? error.message : "Something went wrong.",
      });
    }
  };

  const onProfileSubmit = async (data: DeveloperProfileSignupFormData) => {
    try {
      // Set loading state

      // Log form values
      console.log(data, " business registration");

      // Simulate a 5-second delay
      const details = {
        ...data,
        ...session.data?.user,
      };
      await developerProfileSignup(details);

      // Store form data and show success page
      setFormData({ ...data, ...session.data?.user });
      setShowSuccess(true);

      // Reset loading state
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed", {
        description:
          error instanceof Error ? error.message : "Something went wrong.",
      });
    }
  };

  useEffect(() => {
    if (session.status == "authenticated" && !profileComplete) {
      setProfileComplete(true);
    }
  }, [session.status, profileComplete]);

  useEffect(() => {
    if (showSuccess) {
      const timeout = setTimeout(() => {
        if (path) {
          router.push(`/auth/account-setup?=${path}`);
        } else {
          router.push(`/auth/account-setup`);
        }
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showSuccess, router, path]);
  // Success Page Component
  const SuccessPage = ({ firstName, lastName }: SuccessPageProps) => {
    return (
      <div className="w-full p-6 flex flex-col items-center justify-center min-h-96">
        {session.status == "loading" && (
          <div className=" absolute inset-0 bg-black/20 z-50 flex justify-center pt-[20%]">
            <Loader2 className=" animate-spin text-primary-500" size={30} />
          </div>
        )}
        <div className="mb-8">
          {/* Enhanced Success Icon with concentric circles */}
          <div className="relative flex items-center justify-center">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outermost light blue circle */}
              <circle cx="100" cy="100" r="95" fill="#E6F3FF" opacity="0.4" />
              {/* Second light blue circle */}
              <circle cx="100" cy="100" r="75" fill="#CCE7FF" opacity="0.6" />
              {/* Third medium blue circle */}
              <circle cx="100" cy="100" r="55" fill="#99D6FF" opacity="0.8" />
              {/* Inner dark blue circle */}
              <circle cx="100" cy="100" r="35" fill="#2563EB" />
              {/* Checkmark */}
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

        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          Successful
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-center">
          Welcome {firstName} {lastName}! You have successfully created an
          account.
        </p>
      </div>
    );
  };

  return (
    <div className="w-full p-6">
      {showSuccess && formData ? (
        <SuccessPage
          firstName={formData.firstName ?? ""}
          lastName={formData.lastName ?? ""}
        />
      ) : (
        <>
          {profileComplete ? (
            <>
              <h1 className="text-xl md:text-2xl dark:text-white font-semibold mb-2 ">
                Complete Your Profile
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Just a few more details to get started
              </p>

              <CompleteDeveloperProfile
                onSubmit={onProfileSubmit}
                isLoading={isLoading}
              />
            </>
          ) : (
            <>
              <h1 className=" text-xl md:text-2xl font-semibold mb-6 dark:text-white">
                Developer Signup
              </h1>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* First Name and Last Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <Input
                        label="First Name"
                        placeholder="First Name"
                        error={errors.firstName?.message}
                        isLoading={isLoading}
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <Input
                        label="Last Name"
                        placeholder="Last Name"
                        error={errors.lastName?.message}
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

                {/* Experience Level Full Row */}
                <div className="mb-4">
                  <Controller
                    name="experience"
                    control={control}
                    render={({ field }) => (
                      <Select
                        label="Experience Level"
                        {...field}
                        id="experience"
                        options={[
                          { label: "Beginner", value: "beginner" },
                          { label: "Intermediate", value: "intermediate" },
                          { label: "Advanced", value: "advanced" },
                          { label: "Expert", value: "expert" },
                        ]}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          isLoading
                            ? "border-gray-200 bg-gray-50 opacity-70 cursor-not-allowed"
                            : "border-gray-300"
                        }`}
                        disabled={isLoading}
                      />
                    )}
                  />
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
                  {isLoading ? "  Processing..." : "Create Account"}
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
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-6 ">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      signIn("github", {
                        // callbackUrl: "/auth/account-setup",
                      })
                    }
                  >
                    <Image
                      src="/icon-auth-github.svg"
                      alt="GitHub"
                      width={38}
                      height={38}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-white">
                      GitHub
                    </span>
                  </button>

                  <button
                    type="button"
                    className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      signIn("gitlab", {
                        // callbackUrl: "/auth/account-setup",
                      })
                    }
                  >
                    <Image
                      src="/icon-auth-gitlab.svg"
                      alt="GitLab"
                      width={38}
                      height={38}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-white">
                      GitLab
                    </span>
                  </button>

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
                    <span className="text-sm font-medium text-gray-700 dark:text-white">
                      AWS
                    </span>
                  </button>

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
                    <span className="text-sm font-medium text-gray-700 dark:text-white">
                      Azure
                    </span>
                  </button>

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
                    <span className="text-sm font-medium text-gray-700 dark:text-white">
                      SSO
                    </span>
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
        </>
      )}
    </div>
  );
}
