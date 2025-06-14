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
      formData.append("email", data.email);
      formData.append("password", data.password);
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
      className="flex flex-col min-w-64 max-w-64 mx-auto"
    >
      <h1 className="text-2xl font-medium">Inscription</h1>
      <p className="text-sm text text-foreground">
        Déjà un compte?{" "}
        <Link className="text-primary font-medium underline" href="/sign-in">
          Connexion
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        {message && <FormMessage message={message} />}

        <Label htmlFor="email">Email</Label>
        <Input {...register("email")} placeholder="johndoe@gmail.com" />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}

        <Label htmlFor="password">Mot de passe</Label>
        <Input
          type="password"
          {...register("password")}
          placeholder="Mot de passe"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}

        <SubmitButton
          type="submit"
          pendingText="Inscription..."
          disabled={isSubmitting}
        >
          S&apos;inscrire
        </SubmitButton>
      </div>
    </form>
  );
}
