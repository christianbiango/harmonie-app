import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="relative bg-nephos-blue text-white pt-10 pb-10 text-center overflow-hidden">
      {/* SVG Curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ height: 60 }}>
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 Q720,0 1440,60 L1440,0 L0,0 Z"
            fill="#FFF9EE"
          />
        </svg>
      </div>
      {/* CONTENU PRINCIPAL */}
      <div className="max-w-3xl mx-auto px-4 mt-10 relative z-10">
        <p className="text-lg italic relative">
          <span className="text-cyan-400 text-3xl font-bold mr-2">“</span>
          Si votre mal être est trop important et que vous avez besoin d’une aide médicale{" "}
          <span className="bg-white text-[#172C75] px-2 py-1 rounded-full font-semibold">
            urgente
          </span>
          .
        </p>
        <p className="mt-6 text-xl font-bold text-white underline underline-offset-4 decoration-cyan-400">
          0800 800 854
        </p>
        <div className="w-full flex justify-center gap-5 mt-8 text-sm text-white/80 underline">
          <Link href="/mentions-legales">Mention Légales</Link>
          <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
        </div>
      </div>

      </div>
      <div className="mt-6 hidden md:flex md:flex-col md:items-center py-6">
        <div className="flex flex-row gap-4 mb-2">
          <img src="/images/footer/facebook.svg" alt="Facebook" className="w-6 h-6" />
          <img src="/images/footer/instagram.svg" alt="Instagram" className="w-6 h-6" />
          <img src="/images/footer/icon.svg" alt="icon" className="w-6 h-6" />
          <img src="/images/footer/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
        </div>
        <p className="text-sm">© 2025. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
