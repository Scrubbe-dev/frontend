// app/auth/SignInForm.tsx
"use client";
import { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Add state for password visibility
  const [showPassword, setShowPassword] = useState(false);
  // Add state for loading indication
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Set submitting state to show loading animation
    setIsSubmitting(true);

    // Delay the console.log by 5 seconds
    setTimeout(() => {
      console.log("Sign in with:", { email, password });
      setIsSubmitting(false);
    }, 5000);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-xl md:text-2xl text-indigo-900 font-bold mb-4 md:mb-6">
        Sign In to Scrubbe
      </h1>
      <form onSubmit={handleSubmit} className="mt-4 md:mt-6">
        <div className="mb-4 md:mb-5">
          <label
            htmlFor="signin-email"
            className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
          >
            Email
          </label>
          <input
            type="email"
            autoComplete="email"
            id="signin-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
            required
          />
        </div>

        <div className="mb-4 md:mb-5">
          <label
            htmlFor="signin-password"
            className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="signin-password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="mb-4 md:mb-5">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 md:py-3 px-4 md:px-6 bg-indigo-900 text-white font-semibold uppercase rounded-md transition duration-300 text-sm md:text-base ${
              isSubmitting
                ? "opacity-75 cursor-not-allowed"
                : "hover:bg-indigo-700"
            }`}
          >
            {isSubmitting ? (
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
                Signing In...
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </div>

        <div className="relative my-4 md:my-6 text-center">
          <div className="absolute top-1/2 left-0 w-[45%] h-px bg-gray-300"></div>
          <span className="inline-block px-3 bg-white relative z-10 text-sm">
            OR
          </span>
          <div className="absolute top-1/2 right-0 w-[45%] h-px bg-gray-300"></div>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-4">
          <button
            type="button"
            className="flex-1 min-w-[80px] md:min-w-[120px] p-2 md:p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300 font-medium text-xs md:text-sm"
          >
            GitHub
          </button>
          <button
            type="button"
            className="flex-1 min-w-[80px] md:min-w-[120px] p-2 md:p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300 font-medium text-xs md:text-sm"
          >
            GitLab
          </button>
          <button
            type="button"
            className="flex-1 min-w-[80px] md:min-w-[120px] p-2 md:p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300 font-medium text-xs md:text-sm"
          >
            SSO
          </button>
          <button
            type="button"
            className="flex-1 min-w-[80px] md:min-w-[120px] p-2 md:p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300 font-medium text-xs md:text-sm"
          >
            Azure
          </button>
          <button
            type="button"
            className="flex-1 min-w-[80px] md:min-w-[120px] p-2 md:p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300 font-medium text-xs md:text-sm"
          >
            AWS
          </button>
        </div>
      </form>
    </div>
  );
}
