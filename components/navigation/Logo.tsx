import Image from "next/image";
import Link from "next/link";

export default function Logo({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="absolute left-1/2 transform -translate-x-1/2 w-24 h-6 md:w-28 md:h-8"
      aria-label="Accueil Nephos"
    >
      <Image
        src="/images/logo/nephos-logo-baseline-beige.svg"
        alt="Logo Nephos"
        fill
        priority
        className="object-contain"
      />
    </Link>
  );
}
