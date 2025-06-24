import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full text-white overflow-hidden z-50 min-h-[80px]">
      {/* BG arrondi - mobile only */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 bg-no-repeat bg-bottom-center md:hidden"
        style={{
          backgroundImage: "url('/images/nav/nav-round.svg')",
          backgroundSize: "100% 100%",
        }}
      />

      {/* NAV CONTENT */}
      <div className=" mx-auto flex items-center justify-between px-4 py-8 md:py-10 relative z-10"style={{
          backgroundImage: "url('/images/nav/nav-round-desktop.svg')",
          backgroundSize: "100% 100%",
        }}>
        
        {/* MENU - Desktop only */}
        <nav className="hidden md:flex gap-6 items-center font-medium text-sm">
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
        </nav>

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
        <div className="hidden md:block">
          <button className="bg-white text-[#172C75] font-semibold px-4 py-1 rounded-full text-sm hover:bg-cyan-100">
            se déconnecter
          </button>
        </div>
      </div>
    </nav>
  );
}
