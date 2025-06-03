// schemas/user.ts
import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  password: z.string().min(6, {
    message: "Le mot de passe doit contenir au moins 6 caractères",
  }),
});

export type SignupData = z.infer<typeof signupSchema>;
