"use client";
import Link from "next/link";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as z from "zod";
import Input from "../ui/input";
import CButton from "../ui/Cbutton";
import useAuthStore from "@/lib/stores/auth.store";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Loader2 } from "lucide-react";
import { AxiosError } from "axios";

// Define the form schema using zod
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

// TypeScript type based on the schema
type LoginFormData = z.infer<typeof loginSchema>;

export default function SignInForm() {
  const [rememberMe, setRememberMe] = useState(false);
  const { login, oauthLogin, isLoading } = useAuthStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = searchParams.get("to");
  const [isAuth, setIsAuth] = useState(false);
  // Keep the form handling structure closer to the original
  // even though we're simplifying functionality
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const userDetails = await login(data.email, data.password);
      toast.success(`Successfully signed in!`, {
        description: `${data.email}, you are being redirected...`,
        duration: 10000,
      });

      // Show success toast after delay
      if (path === "ezra") {
        router.push(`/ezra/dashboard`);
      } else {
        if (userDetails?.accountType === "BUSINESS") {
          router.push(`/dashboard`);
        } else {
          router.push("/ezra/dashboard");
        }
      }

      // Reset loading state
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed", {
        description:
          error instanceof AxiosError
            ? error.response?.data?.message
            : "Signup failed",
      });
    }
  };

  const session = useSession();

  const onSubmitOAuth = async () => {
    try {
      if (!session.data) {
        return;
      }
      const data = {
        email: session.data?.user.email,
        provider_uuid: session.data?.user.id,
        oAuthProvider: session.data?.user.oAuthProvider,
      };
      const userDetails = await oauthLogin(
        data.email ?? "",
        data.provider_uuid ?? "",
        data.oAuthProvider ?? ""
      );

      toast.success(`Successfully signed in!`, {
        description: `${data.email}, you are being redirected...`,
        duration: 10000,
        id: "redirect",
      });

      // Show success toast after delay
      // In a real app, you would redirect here
      if (path === "ezra") {
        router.push(`/ezra/dashboard`);
      } else {
        if (userDetails?.accountType === "BUSINESS") {
          router.push(`/dashboard`); 
        } else {
          router.push("/developer/dashboard");
        }
      }

      // Reset loading state
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed", {
        description:
          error instanceof AxiosError
            ? error.response?.data?.message
            : "Signup failed",
      });
    }
  };

  useEffect(() => {
    if (session.status == "authenticated" && session.data.user && !isAuth) {
      onSubmitOAuth();
      setIsAuth(true);
    }
  }, [session]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {session.status == "loading" && (
        <div className=" absolute inset-0 bg-black/20 z-50 flex justify-center pt-[20%]">
          <Loader2 className=" animate-spin text-primary-500" size={30} />
        </div>
      )}
      <div className="w-full p-6">
        <h1 className=" text-xl md:text-2xl dark:text-white font-semibold mb-6">
          Sign in to Scrubbe
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                label="Email"
                placeholder="Enter Email"
                {...field}
                error={errors.email?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                label="Password"
                placeholder="Enter Password"
                {...field}
                type="password"
                error={errors.password?.message}
              />
            )}
          />

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
                  isLoading ? "opacity-80 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <Link
              href="/auth/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <CButton
            onClick={() => {}}
            type="submit"
            disabled={isLoading || !isValid}
          >
            {isLoading ? " Signing in..." : "Sign in"}
          </CButton>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-6 ">
            <button
              type="button"
              className="w-full flex gap-3 items-center justify-center px-3 py-1 border border-gray-300 rounded-md  transition-colors"
              onClick={() => signIn("google")}
            >
              <div>
                <FcGoogle size={33} />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-white">
                Goggle
              </span>
            </button>
            <button
              type="button"
              className="w-full gap-3 group flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md   transition-colors"
              onClick={() =>
                signIn("github", {
                  // callbackUrl: "/auth/account-setup",
                })
              }
            >
              <div>
                <FaGithub size={33} className=" dark:text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-white">
                GitHub
              </span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md  transition-colors"
              onClick={() =>
                signIn("gitlab", {
                  // callbackUrl: "/auth/account-setup",
                })
              }
            >
              <Image
                src="/icon-auth-gitlab.svg"
                alt="GitLab"
                width={38}
                height={38}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-white">
                GitLab
              </span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md  transition-colors"
            >
              <Image
                src="/icon-auth-aws.svg"
                alt="AWS"
                width={38}
                height={38}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-white">
                AWS
              </span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center px-3 py-1 border border-gray-300 rounded-md  transition-colors"
              onClick={() =>
                signIn("microsoft-entra-id", {
                  // callbackUrl: "/auth/account-setup",
                })
              }
            >
              <Image
                src="/icon-auth-azure.svg"
                alt="Azure"
                width={38}
                height={38}
                className="mr-2"
              />
              <span className="text-sm font-medium text-gray-700 dark:text-white">
                Azure
              </span>
            </button>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/auth/demo-page"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              Looking for our demo page?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </form>
      </div>
    </Suspense>
  );
}
