"use client";
import CButton from "@/components/ui/Cbutton";
import Input from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const signupSchema = z
  .object({
    fullName: z.string().min(1, { message: "Full name is required" }),
    companyName: z.string().min(1, { message: "company name is required" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    role: z.string().optional(),
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

// TypeScript type based on the schema
type SignupFormData = z.infer<typeof signupSchema>;

const Page = () => {
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });
  const handleSubmitForm = async (data: SignupFormData) => {
    console.log(data);
  };
  return (
    <div className=" flex justify-center items-center h-full w-full">
      <div className=" max-w-2xl w-full p-4 px-6 rounded-lg bg-white">
        <p className=" text-2xl text-center font-bold">
          Customer Portal Registration
        </p>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex flex-col mt-4"
        >
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <Input
                label="Full Name"
                placeholder="john doe"
                type="email"
                error={errors.email?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                label="Email"
                placeholder="Enter Email"
                type="email"
                error={errors.email?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="companyName"
            control={control}
            render={({ field }) => (
              <Input
                label="Company Name"
                placeholder="enter your company name"
                type="email"
                error={errors.email?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <Input
                label="Departname / Role(optional)"
                placeholder="eg. Finance"
                type="email"
                error={errors.email?.message}
                {...field}
              />
            )}
          />
          <PasswordInput
            label="Password"
            // {...field}
            value={watch("password")}
            onValueChange={(value) => setValue("password", value)}
            onValidationChange={setIsPasswordValid}
            error={!isPasswordValid ? "complete all requirement" : ""}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
                error={errors.confirmPassword?.message}
                {...field}
              />
            )}
          />

          <CButton
            type="submit"
            //   disabled={isLoading || !isValid || !isPasswordValid}
            //   isLoading={isLoading}
          >
            Create Account
          </CButton>

          <div className="text-center mt-3">
            Already have an account?{" "}
            <Link
              href="/portal/login"
              className={`text-IMSLightGreen underline hover:underline inline-flex items-center text-base`}
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
