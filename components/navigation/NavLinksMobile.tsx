import Link from "next/link";
import { navLinks } from "./NavAllLinks";

export default function NavLinksMobile({ pathname }: { pathname: string }) {
  return (
    <nav
      className="fixed bottom-0 left-0 w-full bg-[#F9F5F1] border-t border-gray-200 md:hidden z-50 py-2"
      role="navigation"
      aria-label="Navigation mobile"
    >
      <div className="flex justify-around items-center h-16 text-[#172C75]">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              className={`flex flex-col items-center justify-center text-sm w-1/4 transition-colors duration-200 ${
                isActive ? "text-blue-600 font-bold" : "text-[#172C75]"
              }`}
              aria-label={label}
            >
              <Icon className="h-6 w-6 mb-1" aria-hidden="true" />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
