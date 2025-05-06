"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { registerUser } from "@/lib/registerUserApi";

const developerSignupSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Please enter a valid email address"),
    githubUsername: z.string().optional(),
    experienceLevel: z.string().min(1, "Please select experience level"),
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

type DeveloperSignupFormData = z.infer<typeof developerSignupSchema>;

export default function DeveloperSignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DeveloperSignupFormData>({
    resolver: zodResolver(developerSignupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      githubUsername: "",
      experienceLevel: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: DeveloperSignupFormData) => {
    setError(null);
    setIsLoading(true);

    try {
      const nameParts = data.fullName.trim().split(/\s+/);
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      // Use our separate registration function
      const result = await registerUser({
        email: data.email,
        password: data.password,
        firstName,
        lastName,
      });

      if (!result.success) {
        throw new Error(result.error);
      }

      // Show success message for 10 seconds
      toast.success(`Account created successfully!`, {
        description: `${firstName} ${lastName}, you'll be redirected to sign in shortly.`,
        duration: 10000, // 10 seconds
      });

      // Redirect after 10 seconds
      setTimeout(() => {
        // Pass the email as a query parameter to pre-fill the sign-in form
        window.location.href = `/auth/signin?email=${encodeURIComponent(
          data.email
        )}`;
      }, 10000);

      // Clear the form after successful registration
      reset();
    } catch (err) {
      console.error("Registration error:", err);
      const errorMessage =
        err instanceof Error ? err.message : "Registration failed";
      setError(errorMessage);
      toast.error("Registration failed", {
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-xl md:text-2xl text-indigo-900 font-bold mb-4 md:mb-6">
        Developer Signup
      </h1>

      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:mt-6">
        {/* Rest of the form remains unchanged */}
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
              Email
            </label>
            <input
              type="email"
              autoComplete="email"
              id="email"
              {...register("email")}
              placeholder="Your email"
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
            htmlFor="githubUsername"
            className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
          >
            GitHub Username (Optional)
          </label>
          <input
            type="text"
            id="githubUsername"
            {...register("githubUsername")}
            placeholder="Your GitHub username"
            className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
          />
        </div>

        <div className="mb-3 md:mb-4">
          <label
            htmlFor="experienceLevel"
            className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
          >
            Experience Level
          </label>
          <select
            id="experienceLevel"
            {...register("experienceLevel")}
            className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
          >
            <option value="">Select experience level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
          </select>
          {errors.experienceLevel && (
            <p className="text-red-500 text-xs mt-1">
              {errors.experienceLevel.message}
            </p>
          )}
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
            disabled={isLoading}
            className={`w-full py-2 md:py-3 px-4 md:px-6 bg-indigo-900 text-white font-semibold uppercase rounded-md transition duration-300 text-sm md:text-base ${
              isLoading
                ? "opacity-75 cursor-not-allowed"
                : "hover:bg-indigo-700"
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
              "Create Developer Account"
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
