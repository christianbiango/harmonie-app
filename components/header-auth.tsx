import { signOutAction } from "@/app/actions";
import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="w-full flex items-center justify-between gap-4  ">
      <nav>
        <div className="flex gap-6 items-center text-sm text-white">
          <Link href="/explorer">Explorer</Link>
          <Link href="/favoris">Favoris</Link>
          <Link href="/infos">Infos</Link>
          <Link href="/compte">Compte</Link>
        </div>
      </nav>
      <Link href={"/"}>
        <div role="img" aria-label="Logo de la plateforme digitale Nephos">
          <img
            src="/images/logo/nephos-logo-baseline-white.svg"
            alt="Logo de la plateforme digitale Nephos"
            width={80}
            height={80}
          />
        </div>
      </Link>
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"}>
          Déconnexion
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/sign-in">Connexion</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/sign-up">Inscription</Link>
      </Button>
    </div>
  );
}
