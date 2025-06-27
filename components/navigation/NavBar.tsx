"use client";

import { usePathname } from "next/navigation";
import NavLinksDesktop from "./NavLinksDesktop";
import Logo from "./Logo";
import AuthButton from "./AuthButton";
import NavLinksMobile from "./NavLinksMobile";

type NavbarProps = {
  loggedIn: boolean;
};

export default function Navbar({ loggedIn }: NavbarProps) {
  const pathname = usePathname();

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full text-white overflow-hidden z-50 min-h-[80px]"
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="absolute inset-x-0 bottom-0 h-20 bg-no-repeat bg-bottom-center sm:hidden" />

        <div
          className={`sm:px-10 mx-auto flex items-center px-4 py-8 md:py-10 relative z-10 bg-nephos-blue [clip-path:ellipse(100%_100%_at_50%_0)] ${loggedIn ? "justify-between" : "justify-end"}`}
        >
          {loggedIn && <NavLinksDesktop pathname={pathname} />}
          <Logo href={loggedIn ? "/app" : "/"} />
          <AuthButton loggedIn={loggedIn} />
        </div>
      </nav>

      {loggedIn && <NavLinksMobile pathname={pathname} />}
    </>
  );
}
