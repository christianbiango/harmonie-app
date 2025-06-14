import { z } from "zod";

export const signinSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  password: z
    .string()
    .min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
});

export type SigninData = z.infer<typeof signinSchema>;
