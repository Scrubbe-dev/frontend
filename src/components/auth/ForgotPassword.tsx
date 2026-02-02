"use client";

import { useState } from "react";
import type React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Input from "../ui/input";
import CButton from "../ui/Cbutton";
import OtpInput from "../ui/OtpInput";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuthStore from "@/lib/stores/auth.store";
import { 
  forgotPasswordSchema, 
  resetPasswordSchema, 
  type ForgotPasswordFormData,
  type ResetPasswordFormData 
} from "@/lib/validations/auth.schema";

export default function ForgotPassword() {
  const [stage, setStage] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [resetToken, setResetToken] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string[]>(Array(6).fill(""));
  const [resendTimer, setResendTimer] = useState<number>(60);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const { forgotPassword, resetPassword, validateResetToken } = useAuthStore();

  const {
    control: passwordControl,
    handleSubmit: handlePasswordFormSubmit,
    formState: { errors: passwordErrors, isValid: isPasswordValid },
    reset: resetPasswordForm,
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { token: "", password: "" },
    mode: "onChange",
  });

  // Handle email submission
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setIsLoading(true);
      await forgotPassword(email);
      
      toast.success("Reset link sent!", {
        description: "If your email is registered, you will receive a password reset link.",
      });
      
      setStage(2);
      // Start resend timer
      setResendTimer(60);
      setIsResendDisabled(true);
    } catch (error) {
      toast.error("Failed to send reset link", {
        description: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle verification code submission
  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = verificationCode.join("");
    
    if (code.length !== 6) {
      toast.error("Invalid code", {
        description: "Please enter the complete 6-digit code.",
      });
      return;
    }

    try {
      setIsLoading(true);
      
      // Validate the reset token/code
      const isValid = await validateResetToken(code);
      
      if (isValid) {
        setResetToken(code);
        setStage(3);
        resetPasswordForm({ token: code, password: "" });
      } else {
        toast.error("Invalid code", {
          description: "The code you entered is invalid or has expired.",
        });
      }
    } catch (error) {
      toast.error("Validation failed", {
        description: "Unable to validate the code. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle password creation
  const handlePasswordSubmit = async (data: ResetPasswordFormData) => {
    try {
      setIsLoading(true);
      
      await resetPassword(resetToken, data.password);
      
      toast.success("Password reset successful!", {
        description: "You can now sign in with your new password.",
      });
      
      setStage(4);
    } catch (error) {
      toast.error("Password reset failed", {
        description: error instanceof Error ? error.message : "Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle resend code
  const handleResendCode = async () => {
    if (isResendDisabled) return;

    try {
      setIsLoading(true);
      await forgotPassword(email);
      
      // Reset verification code
      setVerificationCode(Array(6).fill(""));
      // Reset timer
      setResendTimer(60);
      setIsResendDisabled(true);
      
      toast.success("Code resent!", {
        description: "A new reset link has been sent to your email.",
      });
    } catch (error) {
      toast.error("Failed to resend code", {
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle timer countdown
  const handleResendTimer = () => {
    if (resendTimer > 0) {
      setResendTimer(prev => prev - 1);
    } else {
      setIsResendDisabled(false);
    }
  };

  // Render different stages
  const renderStage = () => {
    switch (stage) {
      case 1:
        return (
          <div className="w-full mx-auto">
            <div
              className="flex gap-2 items-center mb-3 opacity-60 hover:opacity-100 cursor-pointer"
              onClick={() => router.back()}
            >
              <ChevronLeft />
              <p>back</p>
            </div>
            <h1 className="text-2xl font-semibold mb-2">Forgot Password?</h1>
            <p className="text-gray-600 mb-6">
              Enter your email address to receive a password reset link
            </p>

            <form onSubmit={handleEmailSubmit}>
              <Input
                label="Email"
                placeholder="Enter email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />

              <CButton type="submit" disabled={!email || isLoading} isLoading={isLoading}>
                Send Reset Link
              </CButton>
            </form>
          </div>
        );

      case 2:
        return (
          <div className="w-full mx-auto">
            <div
              className="flex gap-2 items-center mb-3 opacity-60 hover:opacity-100 cursor-pointer"
              onClick={() => setStage(1)}
            >
              <ChevronLeft />
              <p>back</p>
            </div>
            <h1 className="text-2xl font-semibold mb-2">Email Verification</h1>
            <p className="text-gray-600 mb-4">
              We have sent a verification code to your email address
            </p>

            <p className="text-blue-600 mb-6 font-bold">{email}</p>

            <form onSubmit={handleVerificationSubmit}>
              <div className="flex gap-2 mb-6">
                <OtpInput
                  value={verificationCode}
                  onChange={setVerificationCode}
                  disabled={isLoading}
                />
              </div>

              <CButton type="submit" disabled={isLoading || verificationCode.some(digit => !digit)} isLoading={isLoading}>
                Continue
              </CButton>

              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={handleResendCode}
                  disabled={isResendDisabled || isLoading}
                  className={`text-sm ${
                    isResendDisabled
                      ? "text-gray-400"
                      : "text-blue-600 hover:underline"
                  }`}
                >
                  {isResendDisabled 
                    ? `Resend code in ${resendTimer}s` 
                    : "Resend code"
                  }
                </button>
              </div>
            </form>
          </div>
        );

      case 3:
        return (
          <div className="w-full mx-auto">
            <h1 className="text-2xl font-semibold mb-2">Create New Password</h1>
            <p className="text-gray-600 mb-6">
              Enter a new password for your account
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
                    disabled={isLoading}
                    {...field}
                  />
                )}
              />
              <CButton 
                type="submit" 
                disabled={isLoading || !isPasswordValid}
                isLoading={isLoading}
              >
                Reset Password
              </CButton>
            </form>
          </div>
        );

      case 4:
        return (
          <div className="w-full mx-auto flex flex-col items-center justify-center">
            <div className="mb-8">
              <div className="relative flex items-center justify-center scale-85">
                <div className="size-[110px] bg-blue-300 rounded-full absolute z-10" />
                <div className="size-[120px] bg-blue-200/70 rounded-full absolute z-10" />
                <div className="size-[130px] bg-blue-100/50 rounded-full absolute z-10" />
                <div className="size-[140px] bg-blue-100/30 rounded-full absolute z-10" />
                <div className="flex items-center size-[100px] rounded-full justify-center bg-blue-700 z-20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Password Reset Successful!
            </h1>

            <p className="text-gray-600 text-center mb-8">
              Your password has been reset successfully. You can now sign in with your new password.
            </p>

            <Link
              href="/auth/signin"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-center"
            >
              Back to Sign In
            </Link>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="w-full mx-auto p-6">{renderStage()}</div>;
}
