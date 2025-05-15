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
    fullName: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    githubUsername: z.string().min(2, "GitHub username is required"),
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

export type LoginFormData = z.infer<typeof loginSchema>;
export type DeveloperSignupFormData = z.infer<typeof developerSignupSchema>;
export type BusinessSignupFormData = z.infer<typeof businessSignupSchema>;