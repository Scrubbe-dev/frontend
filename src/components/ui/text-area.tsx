"use client";

import { Info } from "lucide-react";
import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  isLoading?: boolean;
  type?: string;
  icon?: React.ReactNode;
  labelClassName?: string;
}

const TextArea = ({
  label,
  error,
  isLoading = false,
  type = "text",
  icon,
  className = "",
  labelClassName = "",
  ...props
}: TextareaProps) => {
  const isPasswordType = type === "password";

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={props.id}
          className={`block dark:text-white mb-2 text-sm font-medium ${
            isLoading ? "text-gray-500" : "text-gray-700"
          } ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          className={`w-full dark:text-white bg-transparent px-3 text-sm py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isLoading
              ? "border-gray-200 bg-gray-50 opacity-70 cursor-not-allowed"
              : "border-gray-300"
          } ${error ? "border-red-500" : ""} ${className}`}
          disabled={isLoading}
          {...props}
        />

        {icon && !isPasswordType && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {icon}
          </div>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1 flex gap-1 items-center pt-1">
          {" "}
          <Info size={14} />
          {error}
        </p>
      )}
    </div>
  );
};

export default TextArea;
