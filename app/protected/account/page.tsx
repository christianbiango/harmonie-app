import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Quote, MapPin } from "lucide-react";
import Navbar from "@/components/navigation/NavBar";

export default function AccountPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F9F5F1] pb-24">
        <main className="px-4 py-6 pt-24">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="p-2">
              <ArrowLeft className="h-6 w-6 text-[#172C75]" />
            </Link>
            <h2 className="text-xl font-bold -ml-8">
              Mon compte
            </h2>
            <Link
              href="/protected/account/edit"
              className="text-sm underline text-[#172C75] font-semibold"
            >
              Modifier
            </Link>
          </div>

          <div className="bg-[#172C75] rounded-3xl p-5 relative text-white flex items-center gap-4">
            <div className="absolute top-4 left-4">
              <Image
                src="/images/homepage/quote.svg"
                width={35}
                height={35}
                alt="Citation icon"
              />
            </div>

            <div className="flex-shrink-0 text-center z-10 pl-2">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full bg-teal-400 p-0.5 border-2 border-white">
                  <Image
                    src="https://gqvcwvrannnmuyyyfvqx.supabase.co/storage/v1/object/public/nephos-blog/account/doctor-account.png" // Placeholder
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
                <p className="text-xs -mt-1 tracking-tight">
                  missions effectués
                </p>
              </div>
              <hr className="border-white/30 my-1" />
              <div>
                <span className="text-3xl font-bold">17</span>
                <p className="text-xs -mt-1 tracking-tight">
                  années d'exercice
                </p>
              </div>
            </div>
          </div>

          <div className="text-left text-xs text-gray-500 mt-4 px-2">
            <p>
              Les informations présentes dans l'encadré ci-dessus sont
              accessibles par les communes inscrites sur Nephos.{" "}
              <Link href="/privacy" className="underline">
                Voir notre clause de confidentialité.
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#172C75] mb-4">
              Mes demandes de séjours
            </h3>
            <div className="flex gap-4 mb-4">
              <div className="w-[120px] flex-shrink-0">
                <Image
                  src="/images/homepage/church.png"
                  alt="Eglise"
                  width={120}
                  height={150}
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="border border-[#172C75] rounded-xl p-3 text-sm text-[#172C75]">
                  <p>
                    Cette demande de séjour a été transmise à la{" "}
                    <span className="font-bold">commune de Mios.</span>
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Vous recevrez un mail lorsque la commune aura répondu à votre
                  demande.
                </p>
              </div>
            </div>
            <button className="w-full bg-[#172C75] text-white font-bold py-3 px-6 rounded-lg">
              Revoir cette offre
            </button>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#172C75] mb-4">
              Mes anciens séjours
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div
                  className="bg-gray-200 aspect-[4/5] rounded-t-full rounded-b-[2rem] overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(0% 20%, 50% 0%, 100% 20%, 100% 100%, 0% 100%)",
                  }}
                >
                  <Image
                    src="/images/homepage/beach.png"
                    alt="Mimizan"
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
                <div
                  className="bg-gray-200 aspect-[4/5] rounded-t-full rounded-b-[2rem] overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(0% 20%, 50% 0%, 100% 20%, 100% 100%, 0% 100%)",
                  }}
                >
                  <Image
                    src="/images/homepage/field.png"
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