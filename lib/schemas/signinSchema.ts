import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  password: z
    .string()
    .min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
});

export type SignInFormType = z.infer<typeof signInSchema>;
