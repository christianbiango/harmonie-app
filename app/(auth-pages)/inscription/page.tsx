"use client";

import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signupSchema, type SignupData } from "@/lib/schemas/signupSchema";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { signUpAction } from "@/app/(actions)/auth";
import TurnstileWidget from "@/components/TurnstileWidget";
import { resetTurnstile } from "@/utils/forms";

export default function Signup() {
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileKey, setTurnstileKey] = useState<number>(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupData) => {
    try {
      if (!turnstileToken) {
        setMessage({ error: "La vérification CAPTCHA est en cours." });
        return;
      }

      setIsSubmitting(true);
      setMessage(null);
      const formData = new FormData();
      formData.append("firstname", data.firstname);
      formData.append("lastname", data.lastname);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("confirmPassword", data.confirmPassword);
      formData.append("rpps", data.rpps);
      const result = await signUpAction(formData, turnstileToken);
      if (result.success) {
        setMessage({ success: result.success });
      } else {
        setMessage({
          error: "Une erreur est survenue lors de l'inscription.",
        });
      }
    } catch (error) {
      console.log("err", error);
      setMessage({
        error:
          error?.toString().replace(/^Error:\s*/, "") ||
          "Une erreur est survenue lors de l'inscription.",
      });
    } finally {
      setIsSubmitting(false);
      resetTurnstile({ setTurnstileToken, setTurnstileKey });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col min-w-72 max-w-72 mx-auto"
    >
      <img
        src="/images/logo/nephos-logo.svg"
        alt="Logo de la plateforme digitale Nephos"
        aria-label="Logo de la plateforme digitale Nephos"
        width={80}
        height={80}
        className="mx-auto my-4"
      />

      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8 text-black">
        {message && <FormMessage message={message} />}

        <Label htmlFor="firstname" className="hidden md:block">
          Prénom
        </Label>
        <Input
          placeholder="Prénom"
          {...register("firstname")}
          className="bg-nephos-light-bg "
        />
        {errors.firstname && (
          <p className="text-sm text-red-500">{errors.firstname.message}</p>
        )}

        <Label htmlFor="nom" className="hidden md:block">
          Nom
        </Label>
        <Input
          placeholder="Nom"
          {...register("lastname")}
          className="bg-nephos-light-bg"
        />
        {errors.lastname && (
          <p className="text-sm text-red-500">{errors.lastname.message}</p>
        )}

        <Label htmlFor="rpps" className="hidden md:block">
          Numéro RPPS
        </Label>
        <Input
          {...register("rpps")}
          placeholder="Numéro RPPS"
          className="bg-nephos-light-bg"
        />
        {errors.rpps && (
          <p className="text-sm text-red-500">{errors.rpps.message}</p>
        )}

        <Label htmlFor="email" className="hidden md:block">
          Email
        </Label>
        <Input
          {...register("email")}
          placeholder="E-mail"
          className="bg-nephos-light-bg"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}

        <Label htmlFor="password" className="hidden md:block">
          Mot de passe
        </Label>
        <Input
          type="password"
          {...register("password")}
          placeholder="Mot de passe"
          className="bg-nephos-light-bg"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}

        <Label htmlFor="password" className="hidden md:block">
          Confirmer votre mot de passe
        </Label>
        <Input
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirmer votre de passe"
          className="bg-nephos-light-bg"
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}

        <SubmitButton
          type="submit"
          pendingText="Inscription..."
          disabled={isSubmitting || !turnstileToken}
          className="bg-nephos-primary mb-2"
        >
          {!turnstileToken
            ? "Vérification CAPTCHA..."
            : isSubmitting
              ? "Inscription..."
              : "S'inscrire"}
        </SubmitButton>
      </div>
      <p className="text-sm text-foreground">
        Vous avez déjà un compte?{" "}
        <Link
          className="text-foreground font-medium underline text-nephos-primary-dark"
          href="/connexion"
        >
          Connectez-vous.
        </Link>
      </p>
      <div className="hidden">
        <TurnstileWidget
          key={turnstileKey}
          onVerify={(token) => setTurnstileToken(token)}
        />
      </div>
    </form>
  );
}
