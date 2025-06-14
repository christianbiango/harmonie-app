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
      className="flex-1 flex flex-col min-w-64"
    >
      <h1 className="text-2xl font-medium">Connexion</h1>
      <p className="text-sm text-foreground">
        Pas de compte?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
          S&apos;inscrire
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        {message && <FormMessage message={message} />}
        <Label htmlFor="email">Email</Label>
        <Input
          {...register("email")}
          placeholder="johndoe@gmail.com"
          data-testid="login-email"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Mot de passe</Label>
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            Mot de passe oublié?
          </Link>
        </div>
        <Input
          type="password"
          {...register("password")}
          placeholder="Mot de passe"
          data-testid="login-password"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
        <SubmitButton
          type="submit"
          pendingText="Connexion..."
          disabled={isSubmitting}
          data-testid="login-submit-button"
        >
          Connexion
        </SubmitButton>
      </div>
    </form>
  );
}
