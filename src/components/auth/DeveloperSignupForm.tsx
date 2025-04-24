// app/auth/DeveloperSignupForm.tsx
"use client";
import { useState } from "react";

export default function DeveloperSignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    githubUsername: "",
    experienceLevel: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    const fieldName = id.replace("dev-", "");
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle developer signup logic
    console.log("Developer signup:", formData);
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-xl md:text-2xl text-indigo-900 font-bold mb-4 md:mb-6">
        Developer Signup
      </h1>
      <form onSubmit={handleSubmit} className="mt-4 md:mt-6">
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="w-full md:flex-1">
            <label
              htmlFor="dev-fullName"
              className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
            >
              Full Name
            </label>
            <input
              type="text"
              id="dev-fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
              required
            />
          </div>
          <div className="w-full md:flex-1">
            <label
              htmlFor="dev-email"
              className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
            >
              Email
            </label>
            <input
              type="email"
              id="dev-email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
              required
            />
          </div>
        </div>

        <div className="mb-3 md:mb-4">
          <label
            htmlFor="dev-githubUsername"
            className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
          >
            GitHub Username (Optional)
          </label>
          <input
            type="text"
            id="dev-githubUsername"
            value={formData.githubUsername}
            onChange={handleChange}
            placeholder="Your GitHub username"
            className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
          />
        </div>

        <div className="mb-3 md:mb-4">
          <label
            htmlFor="dev-experienceLevel"
            className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
          >
            Experience Level
          </label>
          <select
            id="dev-experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
            required
          >
            <option value="">Select experience level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4 md:mb-5">
          <div className="w-full md:flex-1">
            <label
              htmlFor="dev-password"
              className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
            >
              Password
            </label>
            <input
              type="password"
              id="dev-password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
              required
            />
          </div>
          <div className="w-full md:flex-1">
            <label
              htmlFor="dev-confirmPassword"
              className="block mb-1 md:mb-2 font-medium text-sm md:text-base"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="dev-confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-900 text-sm md:text-base"
              required
            />
          </div>
        </div>

        <div className="mb-4 md:mb-5">
          <button
            type="submit"
            className="w-full py-2 md:py-3 px-4 md:px-6 bg-indigo-900 text-white font-semibold uppercase rounded-md hover:bg-indigo-700 transition duration-300 text-sm md:text-base"
          >
            Create Developer Account
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
