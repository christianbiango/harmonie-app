import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-nephos-bgPrimary px-4 py-16">
      <div className="flex flex-col items-center gap-6 bg-white/80 rounded-2xl shadow-lg p-8 md:p-12 border border-nephos-lightBeige">
        <Image
          src="/images/logo/nephos-logo-min.svg"
          alt="Nephos Logo"
          width={64}
          height={64}
          className="mb-2"
        />
        <Image
          src="/images/homepage/woman-hi.svg"
          alt="Friendly waving woman illustration"
          width={80}
          height={162}
          className="mb-2"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-nephos-primary-dark text-center mb-2">
          Oups !
        </h1>
        <p className="text-lg md:text-xl text-nephos-gray text-center max-w-md mb-4">
          La page que vous cherchez n'existe pas ou a été déplacée.
          <br />
          Retournez à l'accueil pour continuer votre exploration.
        </p>
        <Button
          asChild
          className="bg-nephos-primary hover:bg-nephos-blue text-white px-8 py-3 text-base rounded-lg font-semibold mt-2"
        >
          <Link href="/app">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  );
}
