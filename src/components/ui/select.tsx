"use client";

import React from "react";
import { Info } from "lucide-react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  isLoading?: boolean;
  options: { value: string; label: string }[];
  labelClassName?: string;
}

const Select = ({
  label,
  error,
  isLoading = false,
  options,
  className = "",
  labelClassName = "",
  ...props
}: SelectProps) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={props.id}
          className={`block mb-2 dark:text-white text-sm font-medium ${
            isLoading ? "text-gray-500" : "text-gray-700"
          } ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <select
        className={`w-full dark:text-white h-[48px] bg-transparent text-sm px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isLoading
            ? "border-gray-200 bg-gray-50 opacity-70 cursor-not-allowed"
            : "border-gray-300"
        } ${error ? "border-red-500" : ""} ${className}`}
        disabled={isLoading}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-xs mt-1 flex gap-1 items-center">
          <Info size={14} />
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;
