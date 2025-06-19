"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { signupSchema } from "@/lib/schemas/signupSchema";

// S'inscrire
export const signUpAction = async (formData: FormData) => {
  // Récupération et parsing des données
  const prenom = formData.get("prenom")?.toString();
  const nom = formData.get("nom")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const confirmPassword = formData.get("confirmPassword")?.toString();

  // Validation avec Zod
  const parseResult = signupSchema.safeParse({
    prenom,
    nom,
    email,
    password,
    confirmPassword,
  });
  if (!parseResult.success) {
    const messages = parseResult.error.errors.map((e) => e.message).join(" | ");
    throw new Error(messages);
  }
  const {
    nom: validatedNom,
    prenom: validatedPrenom,
    email: validatedEmail,
    password: validatedPassword,
    confirmPassword: validatedConfirmPassword,
  } = parseResult.data;

  // Inscription via Supabase
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const { error } = await supabase.auth.signUp({
    email: validatedEmail,
    password: validatedPassword,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    success:
      "Merci pour votre inscription, vérifiez votre email pour confirmer votre compte.",
  };
};

// ----------------------------------------------------------------------------
// Se connecter
export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }
  return redirect("/protected");
};

// ----------------------------------------------------------------------------
// Mot de passe oublié
export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Erreur lors de la réinitiation du mot de passe. Veuillez réessayer."
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Vérifiez votre email pour réinitialiser votre mot de passe."
  );
};

// ----------------------------------------------------------------------------
// Réinitialiser le mot de passe
export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Mot de passe et confirmation du mot de passe requis"
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Les mots de passe ne correspondent pas"
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Mise à jour du mot de passe échouée. Veuillez réessayer."
    );
  }

  encodedRedirect(
    "success",
    "/protected/reset-password",
    "Mot de passe mis à jour avec succès"
  );
};

// ----------------------------------------------------------------------------
// Se déconnecter
export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};
