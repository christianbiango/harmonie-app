import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Quote, MapPin } from "lucide-react";
import Navbar from "@/components/navigation/NavBar";

const DoctorStatsCard = () => (
  <div className="hidden md:flex bg-[#172C75] rounded-3xl p-8 relative text-white items-center gap-12 shadow-lg w-full max-w-5xl mx-auto">
    <div className="absolute top-6 left-8 z-20">
      <Image
        src="/images/homepage/quote.svg"
        width={35}
        height={35}
        alt="Citation icon"
      />
    </div>
    <div className="flex flex-col items-center justify-center min-w-[160px] z-10">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full bg-teal-400 p-1 border-4 border-white">
          <Image
            src="https://gqvcwvrannnmuyyyfvqx.supabase.co/storage/v1/object/public/nephos-blog/account/doctor-account.png"
            alt="Jean Delahut"
            width={96}
            height={96}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      </div>
      <p className="font-bold mt-4 text-lg">Jean Delahut</p>
    </div>
    <div className="flex-1 flex justify-center items-center gap-16">
      <div className="flex flex-col items-center">
        <span className="text-6xl font-bold">2</span>
        <span className="text-base mt-1">
          séjours
          <br />
          effectués
        </span>
      </div>
      <div className="h-24 w-px bg-white/40 mx-8" />
      <div className="flex flex-col items-center">
        <span className="text-6xl font-bold">17</span>
        <span className="text-base mt-1">
          années
          <br />
          d'expérience
        </span>
      </div>
    </div>
  </div>
);

const DoctorStatsCardMobile = () => (
  <div className="bg-[#172C75] rounded-3xl p-5 relative text-white flex items-center gap-4 sm:hidden">
    <div className="absolute top-4 left-4 z-20">
      <Image
        src="/images/homepage/quote.svg"
        width={35}
        height={35}
        alt="Citation icon z-15"
      />
    </div>
    <div className="flex-shrink-0 text-center z-10 pl-2">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full bg-teal-400 p-0.5 border-2 border-white">
          <Image
            src="/images/account/doctor-account.png"
            alt="Jean Delahut"
            width={80}
            height={80}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      </div>
      <p className="font-bold mt-2 text-sm">Jean Delahut</p>
    </div>
    <div className="flex-grow flex flex-col justify-center gap-2 pl-2 z-10">
      <div>
        <span className="text-3xl font-bold">2</span>
        <p className="text-xs -mt-1 tracking-tight">missions effectués</p>
      </div>
      <hr className="border-white/30 my-1" />
      <div>
        <span className="text-3xl font-bold">17</span>
        <p className="text-xs -mt-1 tracking-tight">années d'exercice</p>
      </div>
    </div>
  </div>
);

type StayRequestCardMobileProps = {
  imageSrc: string;
  imageAlt: string;
  communeName: string;
  actionLink: string;
  actionLabel: string;
};

function StayRequestCardMobile({
  imageSrc,
  imageAlt,
  communeName,
  actionLink,
  actionLabel,
}: StayRequestCardMobileProps) {
  return (
    <div className="w-full sm:hidden">
      <div className="flex gap-4 mb-4">
        <div className="w-[120px] flex-shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={120}
            height={150}
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="border border-[#172C75] rounded-xl p-3 text-sm text-[#172C75]">
            <p>
              Cette demande de séjour a été transmise à la{" "}
              <span className="font-bold">commune de {communeName}.</span>
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Vous recevrez un mail lorsque la commune aura répondu à votre
            demande.
          </p>
        </div>
      </div>
      <Link
        href={actionLink}
        className="block w-full text-center bg-[#172C75] text-white font-bold py-3 px-6 rounded-lg"
      >
        {actionLabel}
      </Link>
    </div>
  );
}

const StayRequestCardDesktop = ({
  imageSrc,
  commune,
  offerUrl,
}: {
  imageSrc: string;
  commune: string;
  offerUrl: string;
}) => (
  <div className="hidden sm:flex flex-col items-center justify-center w-full">
    <div className="bg-[#FCF7ED] rounded-3xl p-6 flex flex-col items-center max-w-xl w-full mx-auto">
      <div className="rounded-2xl overflow-hidden w-full">
        <div className="h-56 w-full relative">
          <Image
            src={imageSrc}
            alt={commune}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 448px, 100vw"
          />
        </div>
        <div className="bg-[#183B7A] text-white flex flex-col items-center justify-center p-8 gap-6">
          <p className="text-center text-base md:text-lg">
            Votre demande de séjour a bien été transmise* à la{" "}
            <span className="font-bold">commune de {commune}.</span>
          </p>
          <a
            href={offerUrl}
            className="block w-full max-w-xs border-2 border-white rounded-xl py-3 text-center font-semibold text-lg hover:bg-white hover:text-[#183B7A] transition-colors"
          >
            Revoir l'offre
          </a>
        </div>
      </div>
      <p className="italic text-xs text-[#183B7A] mt-4 w-full text-left">
        *Vous recevrez un mail lorsque la commune vous aura soumis une réponse.
      </p>
    </div>
  </div>
);

export default function AccountPage() {
  return (
    <>
      <div>
        <main className="max-w-4xl  mx-auto px-4 py-6 pt-24">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="p-2">
              <ArrowLeft className="h-6 w-6 text-[#172C75]" />
            </Link>
            <h2 className="text-xl font-bold -ml-8">Mon compte</h2>
            <Link
              href="/app/account/edit"
              className="text-sm underline text-black\80 font-light"
            >
              Modifier
            </Link>
          </div>

          {/* Desktop version */}
          <DoctorStatsCard />
          {/* Mobile version (hidden on md+) */}
          <DoctorStatsCardMobile />

          <div className="text-left text-xs text-gray-500 mt-4 px-2">
            <p>
              Les informations présentes dans l'encadré ci-dessus sont
              accessibles par les communes inscrites sur Nephos.{" "}
              <Link href="/politique-de-confidentialite" className="underline">
                Voir notre clause de confidentialité.
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#172C75] mb-4">
              Mes demandes de séjours
            </h3>
            <StayRequestCardMobile
              imageSrc="/images/homepage/church.png"
              imageAlt="Église à Mios"
              communeName="Mios"
              actionLink="/app/stays/123"
              actionLabel="Revoir cette offre"
            />
            {/* Tablet & Desktop: Stay Request Card */}
            <StayRequestCardDesktop
              imageSrc="/images/homepage/church.png"
              commune="Mios"
              offerUrl="#"
            />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#172C75] mb-4">
              Mes anciens séjours
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="h-full">
                  <Image
                    src="/images/account/vigan-polygon.png"
                    alt="Vigan"
                    width={200}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center mt-2">
                  <MapPin className="h-5 w-5 text-[#172C75] mr-1" />
                  <p className="font-semibold text-[#172C75]">Mimizan</p>
                </div>
              </div>
              <div className="text-center">
                <div className="h-full">
                  <Image
                    src="/images/account/vigan-polygon.png"
                    alt="Vigan"
                    width={200}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center mt-2">
                  <MapPin className="h-5 w-5 text-[#172C75] mr-1" />
                  <p className="font-semibold text-[#172C75]">Vigan</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
