"use client";
import CButton from "@/components/ui/Cbutton";
import Input from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const signupSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

// TypeScript type based on the schema
type SignupFormData = z.infer<typeof signupSchema>;

const Page = () => {
  const {
    handleSubmit,
    formState: { errors },
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
          Sign in to Customer Portal{" "}
        </p>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex flex-col mt-4"
        >
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
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                label="Password"
                placeholder="Password"
                type="password"
                error={errors.password?.message}
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
            New User?{" "}
            <Link
              href="/portal/register"
              className={`text-IMSLightGreen underline hover:underline inline-flex items-center text-base`}
            >
              Create an Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
