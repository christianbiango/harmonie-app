import Image from "next/image";
import { Heart, Info, Search, User } from "lucide-react";
import LogoutButton from "../SignOutButton";
import Link from "next/link";

type NavBarProps = {
  loggedIn: boolean;
}

export default function Navbar({ loggedIn }: NavBarProps) {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full text-white overflow-hidden z-50 min-h-[80px]">
        {/* BG arrondi - mobile only */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 bg-no-repeat bg-bottom-center sm:hidden"
        />

        {/* NAV CONTENT */}
        <div
          className="mx-auto flex items-center justify-end px-4 py-8 md:py-10 relative z-10 bg-nephos-blue [clip-path:ellipse(100%_100%_at_50%_0)]"
        >
          {/* MENU - Desktop only */}
          {loggedIn && <nav className="hidden md:flex gap-6 items-center font-medium text-sm">
            <a href="#" className="hover:text-cyan-300">
              Explorer
            </a>
            <a href="#" className="hover:text-cyan-300">
              Favoris
            </a>
            <a href="#" className="hover:text-cyan-300">
              Infos
            </a>
            <a href="#" className="hover:text-cyan-300">
              Compte
            </a>
          </nav>}

          {/* LOGO - Always centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-24 h-6 md:w-28 md:h-8">
            <Image
              src="/images/logo/nephos-logo-baseline-beige.svg"
              alt="Nephos"
              fill
              className="object-contain"
            />
          </div>

          {/* DECONNEXION - Desktop only */}
          {loggedIn ? <div className="hidden md:block">
            <LogoutButton className="bg-white text-[#172C75] font-semibold px-4 py-1 rounded-full text-sm hover:bg-cyan-100" />
          </div> : <Link href="/sign-in" className="hidden md:block bg-white text-[#172C75] font-semibold px-4 py-1 rounded-full text-sm hover:bg-cyan-100">Se connecter</Link>}
        </div>
      </nav>
      {/* BOTTOM NAV - Mobile only */}
      {loggedIn && <nav className="fixed bottom-0 left-0 w-full bg-[#F9F5F1] border-t border-gray-200 md:hidden z-50 py-2">
        <div className="flex justify-around items-center h-16 text-[#172C75]">
          <a
            href="#"
            className="flex flex-col items-center justify-center text-sm w-1/4"
          >
            <Search className="h-6 w-6 mb-1" />
            <span>Explorer</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-sm w-1/4"
          >
            <Heart className="h-6 w-6 mb-1" />
            <span>Favoris</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-sm w-1/4"
          >
            <Info className="h-6 w-6 mb-1" />
            <span>Infos</span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-sm w-1/4 font-bold"
          >
            <User className="h-6 w-6 mb-1" />
            <span>Compte</span>
          </a>
        </div>
      </nav>}
    </>
  );
}
