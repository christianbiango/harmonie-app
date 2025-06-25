import { LinkButton } from "../shared/LinkButton";

export const MissionSection = () => (
  <section className="rounded-xl p-6 max-w-md mx-auto mt-8 text-center relative">
    <h2 className="text-2xl font-bold mb-2">Notre mission ?</h2>
    <p className="mb-6 text-base text-gray-800">
      Découvrez une nouvelle façon d'exercer la médecine : saisonnière, choisie
      et régénérante.
      <br />
      Nous connectons les soignants en quête d'équilibre avec des territoires en
      demande, en leur proposant des missions temporaires.
    </p>
    <LinkButton link="/sign-in" text="Je m'inscris" />
    <img
      src="/images/blue-arrow.svg"
      alt="arrow"
      className="absolute right-4 bottom-2 md:right-8 md:bottom-2 w-12 h-12"
    />
  </section>
);
