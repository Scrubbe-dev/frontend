"use client";
import React, { useRef } from "react";

interface OtpInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  length?: number;
  disabled?: boolean;
  className?: string;
}

const OtpInput = ({
  value,
  onChange,
  length = 6,
  disabled = false,
  className = "",
}: OtpInputProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (idx: number, val: string) => {
    if (!/^[0-9a-zA-Z]?$/.test(val)) return;
    const newValue = [...value];
    newValue[idx] = val;
    onChange(newValue);
    if (val && idx < length - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (
    idx: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !value[idx] && idx > 0) {
      onChange(value.map((v, i) => (i === idx - 1 ? "" : v)));
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("Text").slice(0, length).split("");
    if (pasted.length) {
      const newValue = [...value];
      for (let i = 0; i < length; i++) {
        newValue[i] = pasted[i] || "";
      }
      onChange(newValue);
      // Focus last filled
      const lastIdx = pasted.findIndex((v) => !v);
      inputRefs.current[lastIdx === -1 ? length - 1 : lastIdx]?.focus();
    }
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          ref={(el) => {
            inputRefs.current[idx] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[idx] || ""}
          onChange={(e) => handleChange(idx, e.target.value)}
          onKeyDown={(e) => handleKeyDown(idx, e)}
          onPaste={handlePaste}
          className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-medium"
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default OtpInput;
