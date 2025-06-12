// schemas/user.ts
import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().email({ message: "Email invalide" }),
  password: z
    .string()
    .min(6, {
      message: "Le mot de passe doit contenir au moins 12 caractères",
    })
    .regex(/[A-Z]/, {
      message: "Le mot de passe doit contenir au moins une majuscule",
    })
    .regex(/[a-z]/, {
      message: "Le mot de passe doit contenir au moins une minuscule",
    })
    .regex(/[0-9]/, {
      message: "Le mot de passe doit contenir au moins un chiffre",
    })
    .regex(/[^A-Za-z0-9]/, {
      message: "Le mot de passe doit contenir au moins un caractère spécial",
    })
    .refine((val) => !/\s/.test(val), {
      message: "Le mot de passe ne doit pas contenir d'espace",
    }),
});

export type SignupData = z.infer<typeof signupSchema>;
