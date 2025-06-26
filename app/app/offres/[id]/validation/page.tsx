import { fetchSingleAction } from "@/app/(actions)/shared";
import Image from "next/image";
import Link from "next/link";

type Params = {
  id: string;
};

export default async function OfferValidation({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const offer = await fetchSingleAction("holidays_offers", "id", id);
  console.log("okk", offer);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center w-full max-w-md">
        {/* Success message */}
        <div className="flex items-center gap-2 mb-6 mt-4">
          <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="10" fill="#22C55E" />
              <path
                d="M6 10.5l2.5 2.5L14 8.5"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-gray-800 text-base font-medium">
            Votre demande a bien été transmise à la commune.
          </span>
        </div>
        {/* Card with image and stats */}
        <div className="bg-[#183B7A] rounded-2xl overflow-hidden w-full mb-6">
          <Image
            src="/images/homepage/church.png"
            alt="Commune"
            width={400}
            height={180}
            className="w-full h-44 object-cover"
          />
          <div className="p-6 flex flex-col items-center text-white">
            <div className="text-3xl font-bold mb-1">{offer.families_help}</div>
            <div className="text-base mb-4">familles avec enfant à aider</div>
            <div className="w-full border-t border-white/30 my-2"></div>
            <div className="text-3xl font-bold mb-1">{offer.elders_help}</div>
            <div className="text-base">personnes âgées à aider</div>
          </div>
        </div>
        {/* Button */}
        <Link href="/">
          <button className="w-full bg-[#183B7A] text-white font-semibold py-3 rounded-lg text-base">
            Revenir à l'accueil
          </button>
        </Link>
      </div>
    </div>
  );
}
