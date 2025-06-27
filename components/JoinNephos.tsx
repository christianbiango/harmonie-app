import Image from "next/image";
import { LinkButton } from "./shared/LinkButton";

export const JoinNephos = () => {
  return (
    <div className="w-full relative">
      <img
        src="/images/blue-arrow.svg"
        alt="arrow"
        className="absolute right-4 bottom-2 md:right-8 md:bottom-2 w-12 h-12"
      />
      <div className="mx-auto flex justify-center">
        <LinkButton link="connexion" text="Rejoindre Nephos" />
      </div>
    </div>
  );
};
