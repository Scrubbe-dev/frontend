"use client";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Suspense, useEffect, useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import * as z from "zod";
import Input from "../ui/input";
import Select from "../ui/select";
import CButton from "../ui/Cbutton";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import useAuthStore from "@/lib/stores/auth.store";
import CompleteBusinessProfile, {
  BusinessProfileSignupFormData,
} from "./CompleteBusinessProfile";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import OtpInput from "../ui/OtpInput";
import { PasswordInput } from "../ui/password-input";
import { AxiosError } from "axios";
import { getCookie } from "cookies-next";
import { COOKIE_KEYS } from "@/lib/constant";
import { BiCheck } from "react-icons/bi";

const IS_STANDALONE = process.env.NEXT_PUBLIC_IS_STANDALONE === "true";

// Define the form schema using zod
const businessSignupSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    businessEmail: z
      .string()
      .email({ message: "Please enter a valid email address" })
      .refine(
        (email) => {
          // List of common public email domains
          const publicDomains = [
            "gmail.com",
            "yahoo.com",
            "hotmail.com",
            "outlook.com",
            "aol.com",
            "icloud.com",
            "mail.com",
            "gmx.com",
            "protonmail.com",
            "zoho.com",
            "yandex.com",
            "msn.com",
            "live.com",
            "ymail.com",
            "inbox.com",
            "me.com",
          ];
          const domain = email.split("@")[1]?.toLowerCase();
          return domain && !publicDomains.includes(domain);
        },
        {
          message:
            "Please use your business email address (not a public provider)",
        }
      ),
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

// Success Page Component Props Type
interface SuccessPageProps {
  firstName: string;
  lastName: string;
}

export default function BusinessSignupForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] =
    useState<Partial<BusinessSignupFormData> | null>(null);
  const router = useRouter();
  const [profileComplete, setProfileComplete] = useState(false);
  const [isOTP, setIsOTP] = useState(false);
  const {
    businessSignup,
    businessProfileSignup,
    isLoading,
    verifyEmail,
    resendOTP,
    error,
  } = useAuthStore();
  const [refreshing, setRefreshing] = useState(false);
  const searchParams = useSearchParams();
  const path = searchParams.get("to");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    watch,
    setValue,
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
    mode: "onChange",
  });
  const session = useSession();

  const onSubmit = async (data: BusinessSignupFormData) => {
    try {
      // Set loading state
      // Log form values
      // Simulate a 5-second delay
      await businessSignup(data);

      // Store form data and show success page
      setFormData(data);
      setIsOTP(true);

      // Reset loading state
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed", {
        description:
          error instanceof AxiosError
            ? error.response?.data?.message
            : "Signup failed",
      });
    }
  };

  const onProfileSubmit = async (data: BusinessProfileSignupFormData) => {
    try {
      const details = {
        ...data,
        ...session.data?.user,
      };
      await businessProfileSignup(details);

      // Store form data and show success page
      setFormData({ ...data, ...session.data?.user });
      setShowSuccess(true);

      // Reset loading state
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed", {
        description:
          error instanceof AxiosError
            ? error.response?.data?.message
            : "Signup failed",
      });
    }
  };

  // Check if email from oauth is not a business mail
  useEffect(() => {
    const publicDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "aol.com",
      "icloud.com",
      "mail.com",
      "gmx.com",
      "protonmail.com",
      "zoho.com",
      "yandex.com",
      "msn.com",
      "live.com",
      "ymail.com",
      "inbox.com",
      "me.com",
    ];

    if (
      session.status == "authenticated" &&
      session.data.user &&
      !profileComplete
    ) {
      const domain = session?.data?.user.email?.split("@")[1]?.toLowerCase();
      if (domain && !publicDomains.includes(domain)) {
        setProfileComplete(true);
        return;
      }
      toast.error(
        "Please use your business email address (not a public provider)"
      );

      const interval = setTimeout(() => {
        signOut();
      }, 4000);

      return () => {
        clearTimeout(interval);
      };
    }
  }, [session, profileComplete]);

  useEffect(() => {
    if (showSuccess) {
      const timeout = setTimeout(() => {
        if (IS_STANDALONE) {
          if (path === "payment") {
            router.replace("/get-started?to=payment");
            return;
          }
          router.replace("/get-started");
          return;
        }
        if (formData?.purpose === "IMS") {
          const token = getCookie(COOKIE_KEYS.TOKEN);
          if (typeof window !== "undefined") {
            return (window.location.href =
              (process.env.NEXT_PUBLIC_INCIDENT_URL ??
                "https://incidents.scrubbe.com") +
              `/get-started?token=${token}`);
          }
        }
        if (path) {
          return router.push(`/auth/account-setup?to=${path}`);
        } else {
          return router.push(`/auth/account-setup`);
        }
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showSuccess, router]);

  const SuccessPage = ({ firstName, lastName }: SuccessPageProps) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full p-6 flex flex-col items-center justify-center min-h-96">
          <div className="mb-8">
            {/* Enhanced Success Icon with concentric circles */}
            <div className="relative flex items-center justify-center translate-y-[-50px]">
              <div className=" size-[150px] rounded-full bg-emerald-100 absolute animate-ping" />
              <div className=" size-[130px] rounded-full bg-emerald-200 absolute" />
              <div className=" size-[110px] rounded-full bg-emerald-300 absolute" />
              <div className=" size-[90px] rounded-full bg-emerald-500 absolute" />
              <BiCheck className=" absolute text-white" size={40} />
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
      </Suspense>
    );
  };

  const handleVerifyOTP = async (code: string) => {
    try {
      if (code.length != 6) {
        toast.error("Incorrect OTP code");
        return;
      }
      setRefreshing(true);
      await verifyEmail(code);
      setRefreshing(false);
      toast.success("Email verified successfully");
      setShowSuccess(true);
    } catch (_) {
      console.log(_);
      toast.error(JSON.stringify(error));
    }
  };

  const handleResendOTP = async () => {
    try {
      setRefreshing(true);
      await resendOTP();
      setRefreshing(false);
      toast.success("OTP sent successfully");
    } catch (_) {
      console.log(_);
      toast.error(JSON.stringify(error));
    }
  };
  const VerifyAccount = async () => {
    return (
      <div>
        <OtpInput
          email={formData?.businessEmail ?? ""}
          handleResend={handleResendOTP}
          onSubmit={handleVerifyOTP}
          isLoading={refreshing}
        />
      </div>
    );
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full p-6">
        {session.status == "loading" && (
          <div className=" absolute inset-0 bg-black/20 z-[1000] flex justify-center pt-[20%] ">
            <Loader2 className=" animate-spin text-primary-500" size={30} />
          </div>
        )}
        {showSuccess && formData && (
          <SuccessPage
            firstName={formData.firstName || ""}
            lastName={formData.lastName || ""}
          />
        )}

        <>
          {profileComplete && !showSuccess && (
            <>
              <h1 className="text-xl md:text-2xl dark:text-white font-semibold mb-2 ">
                Complete Your Profile
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Just a few more details to get started
              </p>

              <CompleteBusinessProfile
                onSubmit={onProfileSubmit}
                isLoading={isLoading}
              />
            </>
          )}
        </>

        {!profileComplete && !showSuccess && (
          <>
            {isOTP ? (
              <VerifyAccount />
            ) : (
              <>
                <h1 className="text-xl md:text-2xl dark:text-white font-semibold mb-6 ">
                  Business Signup
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
                          {...field}
                          error={errors.firstName?.message}
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
                          {...field}
                          error={errors.lastName?.message}
                        />
                      )}
                    />
                  </div>

                  {/* Business Email and Business Address Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Controller
                      name="businessEmail"
                      control={control}
                      render={({ field }) => (
                        <Input
                          label="Business Email"
                          placeholder="Enter Business Email"
                          {...field}
                          error={errors.businessEmail?.message}
                        />
                      )}
                    />
                    <Controller
                      name="businessAddress"
                      control={control}
                      render={({ field }) => (
                        <Input
                          label="Business Address"
                          placeholder="Enter Business Address"
                          {...field}
                          error={errors.businessAddress?.message}
                        />
                      )}
                    />
                  </div>

                  {/* Company Size and Purpose Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <Controller
                      name="companySize"
                      control={control}
                      render={({ field }) => (
                        <Select
                          label="Company's size"
                          options={[
                            { value: "", label: "Select Size" },
                            { value: "1-10", label: "1-10 employees" },
                            { value: "11-50", label: "11-50 employees" },
                            { value: "51-200", label: "51-200 employees" },
                            { value: "201-500", label: "201-500 employees" },
                            { value: "500+", label: "500+ employees" },
                          ]}
                          error={errors.companySize?.message}
                          isLoading={isLoading}
                          {...field}
                        />
                      )}
                    />
                    <Controller
                      name="purpose"
                      control={control}
                      render={({ field }) => (
                        <Select
                          label="What do you need scrubbe for?"
                          options={[
                            { value: "", label: "Select Purpose" },
                            {
                              value: "IMS",
                              label: "Incident Management System (IMS)",
                            },
                            {
                              value: "FRAUD_MANAGEMENT_IMS",
                              label: "Fraud Management + Incident Management",
                            },
                          ]}
                          error={errors.purpose?.message}
                          isLoading={isLoading}
                          {...field}
                        />
                      )}
                    />
                  </div>

                  {/* Password Fields Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <PasswordInput
                      label="Password"
                      // {...field}
                      value={watch("password")}
                      onValueChange={(value) => setValue("password", value)}
                      onValidationChange={setIsPasswordValid}
                      error={!isPasswordValid ? "complete all requirement" : ""}
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
                    disabled={isLoading || !isValid || !isPasswordValid}
                    isLoading={isLoading}
                  >
                    {isLoading ? "Processing..." : "Create Account"}
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
                      className="w-full flex gap-3 items-center justify-center px-3 py-1 border border-gray-300 rounded-md  transition-colors"
                      onClick={() => signIn("google")}
                    >
                      <div>
                        <FcGoogle size={33} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-white">
                        Google
                      </span>
                    </button>
                    <button
                      type="button"
                      className="w-full gap-3 group flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md   transition-colors"
                      onClick={() =>
                        signIn("github", {
                          // callbackUrl: "/auth/account-setup",
                        })
                      }
                    >
                      <div>
                        <FaGithub size={33} className=" dark:text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-white">
                        GitHub
                      </span>
                    </button>

                    <button
                      type="button"
                      className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md  transition-colors"
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
                      className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md  transition-colors"
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
                      className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md  transition-colors"
                      onClick={() =>
                        signIn("microsoft-entra-id", {
                          // callbackUrl: "/auth/account-setup",
                        })
                      }
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
                  </div>

                  {/* Demo Page Link */}
                  <div className="text-center">
                    Already have an account?{" "}
                    <Link
                      href="/auth/signin"
                      className={`${
                        IS_STANDALONE ? "text-IMSLightGreen" : "text-blue-600"
                      } underline hover:underline inline-flex items-center`}
                    >
                      Sign in
                    </Link>
                  </div>
                </form>
              </>
            )}
          </>
        )}
      </div>
    </Suspense>
  );
}
