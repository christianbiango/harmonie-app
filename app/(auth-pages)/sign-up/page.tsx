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
import { signUpAction } from "@/app/actions";

export default function Signup() {
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
      setIsSubmitting(true);
      setMessage(null);
      const formData = new FormData();
      formData.append("prenom", data.prenom);
      formData.append("nom", data.nom);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("confirmPassword", data.confirmPassword);
      const result = await signUpAction(formData);
      if (result.success) {
        setMessage({ success: result.success });
      } else {
        setMessage({
          error: "Une erreur est survenue lors de l'inscription.",
        });
      }
    } catch (error) {
      setMessage({ error: "Une erreur est survenue lors de l'inscription." });
    } finally {
      setIsSubmitting(false);
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

      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8 text-nephos-gray">
        {message && <FormMessage message={message} />}

        <Label htmlFor="prenom" className="hidden md:block">
          Prénom
        </Label>
        <Input
          placeholder="Prénom"
          {...register("prenom")}
          className="bg-nephos-light-bg "
        />
        {errors.prenom && (
          <p className="text-sm text-red-500">{errors.prenom.message}</p>
        )}

        <Label htmlFor="nom" className="hidden md:block">
          Nom
        </Label>
        <Input
          placeholder="Nom"
          {...register("nom")}
          className="bg-nephos-light-bg"
        />
        {errors.nom && (
          <p className="text-sm text-red-500">{errors.nom.message}</p>
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
          disabled={isSubmitting}
          className="bg-nephos-primary mb-2"
        >
          S&apos;inscrire
        </SubmitButton>
      </div>
      <p className="text-sm text-foreground">
        Vous avez déjà un compte?{" "}
        <Link
          className="text-foreground font-medium underline text-nephos-primary-dark"
          href="/sign-in"
        >
          Connecter-vous.
        </Link>
      </p>
    </form>
  );
}
