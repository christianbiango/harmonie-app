"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFormType, signInSchema } from "@/lib/schemas/signinSchema";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signInAction } from "@/app/actions";

export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormType) => {
    try {
      setIsSubmitting(true);
      setMessage(null);
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);
      await signInAction(formData);
    } catch (error) {
      setMessage({ error: "Erreur lors de la connexion." });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col min-w-64 max-w-64 mx-auto"
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
        <Label htmlFor="email" className="hidden md:block">
          Email
        </Label>
        <Input
          {...register("email")}
          placeholder="E-mail"
          data-testid="login-email"
          className="bg-nephos-light-bg"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
        <div>
          <Label
            htmlFor="password"
            className="text-nephos-gray hidden md:block"
          >
            Mot de passe
          </Label>
        </div>
        <Input
          type="password"
          {...register("password")}
          placeholder="Mot de passe"
          data-testid="login-password"
          className="bg-nephos-light-bg mb-0"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
        <Link
          className="text-xs underline text-nephos-gray text-right"
          href="/forgot-password"
        >
          Mot de passe oublié?
        </Link>
        <SubmitButton
          type="submit"
          pendingText="Connexion..."
          disabled={isSubmitting}
          data-testid="login-submit-button"
          className="bg-nephos-primary"
        >
          Se connecter
        </SubmitButton>
        <p className="text-sm text-center">
          Je n&apos;ai pas de compte ?{" "}
          <Link
            className="text-foreground font-medium underline text-nephos-primary-dark"
            href="/sign-up"
          >
            S&apos;inscrire
          </Link>
        </p>
      </div>
    </form>
  );
}
