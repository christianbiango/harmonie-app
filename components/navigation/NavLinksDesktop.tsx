import Link from "next/link";
import { navLinks } from "./NavAllLinks";

export default function NavLinksDesktop({ pathname }: { pathname: string }) {
  return (
    <div className="hidden md:flex gap-6 items-center font-medium text-sm">
      {navLinks.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={label}
            href={href}
            className={`transition-colors duration-200 hover:text-cyan-300 ${
              isActive ? "text-cyan-300 font-semibold" : ""
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
