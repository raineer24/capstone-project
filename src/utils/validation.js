// src/utils/validation.js
import { z } from "zod";

export const complexUserSchema = z.object({
  personalInfo: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
  }),
  roleDetails: z.object({
    role: z.string().min(1, "Role is required"),
    permissions: z
      .array(z.string())
      .nonempty("At least one permission is required"),
  }),
  address: z.object({
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
  }),
});
