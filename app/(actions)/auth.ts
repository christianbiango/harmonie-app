"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { signupSchema } from "@/lib/schemas/signupSchema";
import { verifyTurnstileFormAction } from "./shared";

const checkRpps = async (rpps: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("rpps")
    .select("*")
    .eq("rpps", rpps)
    .single();

  if (error) {
    console.error("Error fetching RPPS:", error);
    return null;
  }

  return data;
};

export const signUpAction = async (
  formData: FormData,
  turnstileToken: string
) => {
  const isValidTurnstile = await verifyTurnstileFormAction(turnstileToken);

  if (!isValidTurnstile) {
    throw new Error("Vérification CAPTCHA échouée. Veuillez réessayer.");
  }

  const firstname = formData.get("firstname")?.toString();
  const lastname = formData.get("lastname")?.toString();
  const rpps = formData.get("rpps")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const confirmPassword = formData.get("confirmPassword")?.toString();

  const parseResult = signupSchema.safeParse({
    lastname,
    firstname,
    rpps,
    email,
    password,
    confirmPassword,
  });
  if (!parseResult.success) {
    const messages = parseResult.error.errors.map((e) => e.message).join(" | ");
    throw new Error(messages);
  }
  const {
    lastname: validatedLastName,
    firstname: validatedFirstName,
    rpps: validatedRpps,
    email: validatedEmail,
    password: validatedPassword,
  } = parseResult.data;

  const isValidRpps = await checkRpps(validatedRpps);

  if (!isValidRpps) {
    throw new Error("Le RPPS fourni n'est pas valide ou n'existe pas.");
  }

  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const { error } = await supabase.auth.signUp({
    email: validatedEmail,
    password: validatedPassword,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      data: {
        firstname: validatedFirstName,
        lastname: validatedLastName,
      },
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
export const signInAction = async (
  formData: FormData,
  turnstileToken: string
) => {
  const isValidTurnstile = await verifyTurnstileFormAction(turnstileToken);

  if (!isValidTurnstile) {
    throw new Error("Vérification CAPTCHA échouée. Veuillez réessayer.");
  }

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    let errorMsg = error.message;
    if (errorMsg.startsWith("Error:")) {
      errorMsg = errorMsg.replace(/^Error:\s*/, "");
    }
    return encodedRedirect("error", "/connexion", errorMsg);
    return encodedRedirect("error", "/connexion", errorMsg);
  }
  return redirect("/app");
  return redirect("/app");
};

// ----------------------------------------------------------------------------
// Mot de passe oublié
export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect(
      "error",
      "/mot-de-passe-oublie",
      "Email is required"
    );
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/app/modifier-mot-de-passe`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/mot-de-passe-oublie",
      "Erreur lors de la réinitiation du mot de passe. Veuillez réessayer."
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/mot-de-passe-oublie",
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
      "/app/modifier-mot-de-passe",
      "Mot de passe et confirmation du mot de passe requis"
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/app/modifier-mot-de-passe",
      "Les mots de passe ne correspondent pas"
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/app/modifier-mot-de-passe",
      "Mise à jour du mot de passe échouée. Veuillez réessayer."
    );
  }

  encodedRedirect(
    "success",
    "/app/modifier-mot-de-passe",
    "Mot de passe mis à jour avec succès"
  );
};

// ----------------------------------------------------------------------------
// Se déconnecter
export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/connexion");
  return redirect("/connexion");
};
