// schemas/user.ts
import { z } from "zod";

export const signupSchema = z
  .object({
    nom: z
      .string()
      .min(2, { message: "Le nom doit contenir au moins 2 caractères" })
      .max(50, { message: "Le nom est trop long" })
      .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/, {
        message: "Le nom contient des caractères non autorisés",
      }),
    prenom: z
      .string()
      .min(2, { message: "Le prénom doit contenir au moins 2 caractères" })
      .max(50, { message: "Le prénom est trop long" })
      .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/, {
        message: "Le prénom contient des caractères non autorisés",
      }),
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
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

export type SignupData = z.infer<typeof signupSchema>;
