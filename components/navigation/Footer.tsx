import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    icon: "/images/footer/facebook.svg",
  },
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    icon: "/images/footer/instagram.svg",
  },
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    icon: "/images/footer/linkedin.svg",
  },
];

export default function Footer() {
  return (
    <footer role="contentinfo" className="pb-20 sm:pb-2">
      <div className="relative bg-nephos-blue [clip-path:ellipse(180%_90%_at_50%_100%)] sm:[clip-path:ellipse(110%_90%_at_50%_100%)] text-white py-10 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 mt-10 relative z-10">
          <p className="text-lg italic">
            <span className="text-cyan-400 text-3xl font-bold mr-2">“</span>
            Si votre mal-être est trop important et que vous avez besoin d’une
            aide médicale{" "}
            <span className="bg-white text-[#172C75] px-2 py-1 rounded-full font-semibold">
              urgente
            </span>
            .
          </p>
          <p className="mt-6 text-xl font-bold underline underline-offset-4 decoration-cyan-400">
            0800 800 854
          </p>
          <div className="w-full flex flex-wrap justify-center gap-4 mt-8 text-sm text-white/80 underline">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-de-confidentialite">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex mt-6 flex-col items-center py-6">
        <div className="flex gap-4 mb-3">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:scale-110 transition-transform duration-200"
            >
              <Image src={icon} alt={label} width={24} height={24} />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-600">© 2025. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
