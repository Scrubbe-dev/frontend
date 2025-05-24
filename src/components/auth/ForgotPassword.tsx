"use client";
import { useState, useRef, useEffect } from "react";
import type React from "react";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function ForgotPassword() {
  const [stage, setStage] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string[]>(
    Array(6).fill("")
  );
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [resendTimer, setResendTimer] = useState<number>(51);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

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
  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  // Handle verification code submission
  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode.every((code) => code !== "")) {
      setStage(3);
    }
  };

  // Handle password creation
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password && confirmPassword && password === confirmPassword) {
      setStage(4);
    }
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
          <div className="w-full min-w-[320px] max-w-[730px] mx-auto">
            <h1 className="text-2xl font-semibold mb-2">Forgot Password?</h1>
            <p className="text-gray-600 mb-6">
              Put your email address to get started
            </p>

            <form onSubmit={handleEmailSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </form>
          </div>
        );

      case 2:
        return (
          <div className="w-full min-w-[320px] max-w-[730px] mx-auto">
            <h1 className="text-2xl font-semibold mb-2">Email Verification</h1>
            <p className="text-gray-600 mb-4">
              We have to sent a code to your email address to confirm it&rsquo;s
              yours
            </p>

            <p className="text-blue-600 mb-6 font-bold">{email}</p>

            <form onSubmit={handleVerificationSubmit}>
              <div className="flex gap-2 mb-6">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    value={verificationCode[index]}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    className={`w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-medium`}
                    required
                  />
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4"
              >
                Continue
              </button>

              <div className="text-center">
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
          <div className="w-full min-w-[320px] max-w-[730px] mx-auto">
            <h1 className="text-2xl font-semibold mb-2">Create New Password</h1>
            <p className="text-gray-600 mb-6">
              Enter a password you will remember
            </p>

            <form onSubmit={handlePasswordSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Create Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

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
          <div className="w-full min-w-[320px] max-w-[730px] mx-auto flex flex-col items-center justify-center">
            <div className="mb-8">
              <div className="relative flex items-center justify-center">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outermost light blue circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="95"
                    fill="#E6F3FF"
                    opacity="0.4"
                  />
                  {/* Second light blue circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="75"
                    fill="#CCE7FF"
                    opacity="0.6"
                  />
                  {/* Third medium blue circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="55"
                    fill="#99D6FF"
                    opacity="0.8"
                  />
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

            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Successful
            </h1>

            <p className="text-gray-600 text-center mb-8">
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

  return (
    <div className="w-full min-w-[320px] max-w-[730px] mx-auto p-6">
      {renderStage()}
    </div>
  );
}
