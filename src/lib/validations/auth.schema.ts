import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const developerSignupSchema = z
  .object({
    fullName: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    githubUsername: z.string().min(2, "GitHub username is required").optional(),
    experience: z.string().optional(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase, one lowercase, one number and one special character"
      ),
    confirmPassword: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const businessSignupSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    businessEmail: z
      .string()
      .email({ message: "Please enter a valid email address" })
      .refine(
        (email) => {
          // List of common public email domains
          const publicDomains = [
            "gmail.com",
            "yahoo.com",
            "hotmail.com",
            "outlook.com",
            "aol.com",
            "icloud.com",
            "mail.com",
            "gmx.com",
            "protonmail.com",
            "zoho.com",
            "yandex.com",
            "msn.com",
            "live.com",
            "ymail.com",
            "inbox.com",
            "me.com",
          ];
          const domain = email.split("@")[1]?.toLowerCase();
          return domain && !publicDomains.includes(domain);
        },
        {
          message:
            "Please use your business email address (not a public provider)",
        }
      ),
    businessAddress: z
      .string()
      .min(1, { message: "Business address is required" }),
    companySize: z.string().min(1, { message: "Please select company size" }),
    purpose: z.string().min(1, { message: "Please select a purpose" }),
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

export type LoginFormData = z.infer<typeof loginSchema>;
export type DeveloperSignupFormData = z.infer<typeof developerSignupSchema>;
export type BusinessSignupFormData = z.infer<typeof businessSignupSchema>;
