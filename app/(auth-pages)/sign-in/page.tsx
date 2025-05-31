import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex-1 flex flex-col min-w-64">
      <h1 className="text-2xl font-medium">Connexion</h1>
      <p className="text-sm text-foreground">
        Pas de compte?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
          S&apos;inscrire
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          placeholder="johndoe@gmail.com"
          data-testid="login-email"
          required
        />
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
          name="password"
          placeholder="Mot de passe"
          data-testid="login-password"
          required
        />
        <SubmitButton
          pendingText="Connexion..."
          data-testid="login-submit-button"
          formAction={signInAction}
        >
          Connexion
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
