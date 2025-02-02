import { z } from "zod";


export const emailChangeSchema: z.ZodType = z
  .object({
    uid: z.string(),
    token: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
    reEmail: z.string().email({ message: "Invalid email address" }),
  })
  .refine((data) => data.email === data.reEmail, {
    message: "Email addresses must match",
    path: ["reEmail"],
  });


export const passwordChangeSchema: z.ZodType = z
  .object({
    uid: z.string(),
    token: z.string(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 12 characters" }).regex(/[a-zA-Z]/, {
        message: "Password must contain at least one letter",
      }).regex(/[0-9]/, {
        message: "Password must contain at least one number",
      }).regex(/[!@#$%^&*]/, {
        message: "Password must contain at least one special character",
      }),
    re_password: z
      .string()
      .min(8, { message: "Password must be at least 12 characters" }),
  })
  .refine((data) => data.password === data.re_password, {
    message: "Email addresses must match",
    path: ["rePassword"],
  });


export const loginSchema: z.ZodType = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 12 characters" }).regex(/[a-zA-Z]/, {
        message: "Password must contain at least one letter",
      }).regex(/[0-9]/, {
        message: "Password must contain at least one number",
      }).regex(/[!@#$%^&*]/, {
        message: "Password must contain at least one special character",
      }),
  });

export const registerSchema: z.ZodType = z
  .object({
    first_name: z.string(),
    last_name: z.string(),
    username: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
    role: z.enum(["responder", "requester"]),
    password: z
      .string()
      .min(8, { message: "Password must be at least 12 characters" })
      .regex(/[a-zA-Z]/, {
        message: "Password must contain at least one letter",
      })
      .regex(/[0-9]/, {
        message: "Password must contain at least one number",
      })
      .regex(/[!@#$%^&*]/, {
        message: "Password must contain at least one special character",
      }),
    re_password: z
      .string()
      .min(8, { message: "Password must be at least 12 characters" })
      .regex(/[a-zA-Z]/, {}),
  })
  .refine((data) => data.password === data.re_password, {
    message: "Email addresses must match",
    path: ["rePassword"],
  });

export const emailSchema: z.ZodType = z.object({ email: z.string().email({ message: "Invalid email address" }), });

export const passwordSchema: z.ZodType = z.object({ password: z
    .string()
    .min(8, { message: "Password must be at least 12 characters" })
    .regex(/[a-zA-Z]/, {
      message: "Password must contain at least one letter",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number",
    })
    .regex(/[!@#$%^&*]/, {
      message: "Password must contain at least one special character",
    }), })