"use client";
import { useState, useRef, useEffect } from "react";
import type React from "react";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Input from "../ui/input";
import CButton from "../ui/Cbutton";
import OtpInput from "../ui/OtpInput";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export default function ForgotPassword() {
  const [stage, setStage] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string[]>(
    Array(6).fill("")
  );
  const [resendTimer, setResendTimer] = useState<number>(51);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  // Add zod schema for password reset
  const passwordSchema = z
    .object({
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

  type PasswordFormData = z.infer<typeof passwordSchema>;

  const {
    control: passwordControl,
    handleSubmit: handlePasswordFormSubmit,
    formState: { errors: passwordErrors },
    reset: resetPasswordForm,
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  // Handle timer for resend code
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (stage === 2 && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }

    if (resendTimer === 0) {
      setIsResendDisabled(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [stage, resendTimer]);

  // Handle email submission
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStage(2);
    }
  };

  // Handle verification code input

  // Handle verification code submission
  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode.every((code) => code !== "")) {
      setStage(3);
    }
  };

  // Handle password creation
  const handlePasswordSubmit = () => {
    setStage(4);
    resetPasswordForm();
  };

  // Handle resend code
  const handleResendCode = () => {
    if (!isResendDisabled) return;

    // Reset verification code
    setVerificationCode(Array(6).fill(""));
    // Reset timer
    setResendTimer(51);
    setIsResendDisabled(true);
    // Focus first input
    inputRefs.current[0]?.focus();
  };

  // Render different stages
  const renderStage = () => {
    switch (stage) {
      case 1:
        return (
          <div className="w-full mx-auto">
            <div
              className=" flex gap-2 items-center mb-3 opacity-60 hover:opacity-100 cursor-pointer dark:text-white"
              onClick={() => router.back()}
            >
              <ChevronLeft />
              <p>back</p>
            </div>
            <h1 className="text-2xl font-semibold mb-2 dark:text-white">
              Forgot Password?
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Put your email address to get started
            </p>

            <form onSubmit={handleEmailSubmit}>
              <Input
                label="Email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <CButton type="submit" disabled={!email}>
                Send Code
              </CButton>
            </form>
          </div>
        );

      case 2:
        return (
          <div className="w-full  mx-auto">
            <div
              className=" flex gap-2 items-center mb-3 opacity-60 hover:opacity-100 cursor-pointer dark:text-white"
              onClick={() => setStage(1)}
            >
              <ChevronLeft />
              <p>back</p>
            </div>
            <h1 className="text-2xl font-semibold mb-2 dark:text-white">
              Email Verification
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We have sent a code to your email address to confirm it&rsquo;s
              yours
            </p>

            <p className="text-blue-600 mb-6 font-bold">{email}</p>

            <form onSubmit={handleVerificationSubmit}>
              <div className="flex gap-2 mb-6">
                <OtpInput
                  value={verificationCode}
                  onChange={setVerificationCode}
                  disabled={false}
                />
              </div>

              <CButton type="submit">Continue</CButton>

              <div className="text-center mt-2">
                <button
                  type="button"
                  onClick={handleResendCode}
                  disabled={isResendDisabled}
                  className={`text-sm ${
                    isResendDisabled
                      ? "text-gray-400"
                      : "text-blue-600 hover:underline"
                  }`}
                >
                  Resend code {isResendDisabled && `${resendTimer}s`}
                </button>
              </div>
            </form>
          </div>
        );

      case 3:
        return (
          <div className="w-full  mx-auto">
            <h1 className="text-2xl font-semibold mb-2 dark:text-white">
              Create New Password
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Enter a password you will remember
            </p>

            <form onSubmit={handlePasswordFormSubmit(handlePasswordSubmit)}>
              <Controller
                name="password"
                control={passwordControl}
                render={({ field }) => (
                  <Input
                    label="New Password"
                    id="password"
                    placeholder="Enter password"
                    type="password"
                    error={passwordErrors.password?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="confirmPassword"
                control={passwordControl}
                render={({ field }) => (
                  <Input
                    label="Confirm Password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    error={passwordErrors.confirmPassword?.message}
                    {...field}
                  />
                )}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Create Password
              </button>
            </form>
          </div>
        );

      case 4:
        return (
          <div className="w-full  mx-auto flex flex-col items-center justify-center">
            <div className="mb-8">
              <div className="relative flex items-center justify-center scale-85">
                <div className="size-[110px] bg-blue-300 rounded-full absolute z-10" />
                <div className="size-[120px] bg-blue-200/70 rounded-full absolute z-10" />
                <div className="size-[130px] bg-blue-100/50 rounded-full absolute z-10" />
                <div className="size-[140px] bg-blue-100/30 rounded-full absolute z-10" />
                <div className="flex items-center size-[100px] rounded-full justify-center bg-blue-700 z-20">
                  <img src={"/check.svg"} alt="" />
                </div>
              </div>
            </div>

            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Successful
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
              Your password has been reseted successfully
            </p>

            <Link
              href="/auth/signin"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center"
            >
              Back to log in
            </Link>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="w-full  mx-auto p-6">{renderStage()}</div>;
}
