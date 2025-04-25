// app/auth/BusinessSignupForm.tsx
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

// Define the schema for form validation
const businessSignupSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Please enter a valid email address"),
    address: z.string().min(1, "Business address is required"),
    companySize: z.string().min(1, "Please select company size"),
    purpose: z.string().min(1, "Please select a purpose"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Type for our form data
type BusinessSignupFormData = z.infer<typeof businessSignupSchema>;

export default function BusinessSignupForm() {
  // Add state for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // Add state for loading indication
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessSignupFormData>({
    resolver: zodResolver(businessSignupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      address: "",
      companySize: "",
      purpose: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: BusinessSignupFormData) => {
    // Set submitting state to show loading animation
    setIsSubmitting(true);

    // Delay the console.log by 5 seconds
    setTimeout(() => {
      console.log("Business signup:", data);
      setIsSubmitting(false);
    }, 5000);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-xl md:text-2xl text-indigo-900 font-bold mb-4 md:mb-6">
        Business Signup
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:mt-6">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="w-full md:flex-1">
            <label
              htmlFor="fullName"
              className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
            >
              Full Name
            </label>
            <input
              id="fullName"
              {...register("fullName")}
              placeholder="Your full name"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div className="w-full md:flex-1">
            <label
              htmlFor="email"
              className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
            >
              Business Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="Your business email"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-3 md:mb-4">
          <label
            htmlFor="address"
            className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
          >
            Business Address
          </label>
          <input
            type="text"
            autoComplete="business-address"
            id="address"
            {...register("address")}
            placeholder="Your business address"
            className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="w-full md:flex-1">
            <label
              htmlFor="companySize"
              className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
            >
              Company Size
            </label>
            <select
              id="companySize"
              {...register("companySize")}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
            >
              <option value="">Select size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501+">501+ employees</option>
            </select>
            {errors.companySize && (
              <p className="text-red-500 text-xs mt-1">
                {errors.companySize.message}
              </p>
            )}
          </div>
          <div className="w-full md:flex-1">
            <label
              htmlFor="purpose"
              className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
            >
              What do you need Scrubbe for?
            </label>
            <select
              id="purpose"
              {...register("purpose")}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
            >
              <option value="">Select purpose</option>
              <option value="security">Security Monitoring</option>
              <option value="compliance">Compliance</option>
              <option value="incident">Incident Response</option>
              <option value="threat">Threat Intelligence</option>
              <option value="audit">Audit & Logging</option>
              <option value="other">Other</option>
            </select>
            {errors.purpose && (
              <p className="text-red-500 text-xs mt-1">
                {errors.purpose.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4 md:mb-5">
          <div className="w-full md:flex-1">
            <label
              htmlFor="password"
              className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                id="password"
                {...register("password")}
                placeholder="Create a password"
                className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="w-full md:flex-1">
            <label
              htmlFor="confirmPassword"
              className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                id="confirmPassword"
                {...register("confirmPassword")}
                placeholder="Confirm your password"
                className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
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
                Processing...
              </div>
            ) : (
              "Create Business Account"
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
