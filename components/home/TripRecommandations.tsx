"use server";
import { fetchUserRecommendedOffers } from "@/app/(actions)/holidays";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { HolidayTripCard } from "./HolidayTripCard";

export const TripRecommandations = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/connexion");
  }

  const offers = await fetchUserRecommendedOffers(user.id);

  if (!offers || offers.length === 0) {
    return <p className="text-center">Aucune recommandation trouvée.</p>;
  }

  return (
    <div className="p-4 relative">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">En fonction de vous &gt;</h2>
        </div>
      </div>
      <div
        className="flex md:grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12 overflow-x-auto md:overflow-x-visible scrollbar-hide pr-8"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {offers.map((offer) => (
          <Link href={`app/offres/${offer.id}`} key={offer.id}>
            <HolidayTripCard
              key={offer.id}
              imageSrc={offer.image_url} // fallback if no image
              alt={offer.name}
              title={offer.name}
              description={offer.description || ""}
              showHeart={false}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
