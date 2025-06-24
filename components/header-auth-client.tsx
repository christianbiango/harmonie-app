// components/header-auth-client.tsx (Client Component)
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import type { User } from "@supabase/supabase-js";
import { signOutAction } from "@/app/actions";

export default function HeaderAuthClient({ user }: { user: User | null }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return user ? (
    <div className="w-full flex items-center justify-between gap-4">
      {/* Menu classique */}
      <nav className="hidden md:flex gap-6 items-center text-sm text-white font-sans text-[16px] font-light">
        <Link href="/explorer">Explorer</Link>
        <Link href="/favoris">Favoris</Link>
        <Link href="/infos">Infos</Link>
        <Link href="/compte">Compte</Link>
      </nav>
      {/* ... logo et bouton déconnexion ... */}
      <Link href={"/"}>
        <div role="img" aria-label="Logo de la plateforme digitale Nephos">
          <img
            src="/images/logo/nephos-logo-baseline-white.svg"
            alt="Logo de la plateforme digitale Nephos"
            width={100}
            height={100}
          />
        </div>
      </Link>
      <form
        action={signOutAction}
        className="hidden md:flex gap-6 items-center"
      >
        <Button
          type="submit"
          variant={"outline"}
          className="text-[#0D347A] text-[16px] font-bold font-sans"
        >
          Se déconnecter
        </Button>
      </form>
      {/* Menu burger */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir le menu"
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <Link href="/explorer">Explorer</Link>
          <Link href="/favoris">Favoris</Link>
          <Link href="/infos">Infos</Link>
          <Link href="/compte">Compte</Link>
          <Link href="/">
            <div role="img" aria-label="Logo de la plateforme digitale Nephos">
              <img
                src="/images/logo/nephos-logo-baseline-white.svg"
                alt="Logo de la plateforme digitale Nephos"
                width={100}
                height={100}
              />
            </div>
          </Link>
          <form action={signOutAction} className="flex gap-6 items-center">
            <Button
              type="submit"
              variant={"outline"}
              className="text-[#0D347A] text-[16px] font-bold font-sans"
            >
              Se déconnecter
            </Button>
          </form>
        </div>
      )}
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
