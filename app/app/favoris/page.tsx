import { fetchFavoriteHolidays } from "@/app/(actions)/user";
import { FavoriteCard } from "@/components/HomePage/FavoriteCard";
import Link from "next/link";

export default async function FavorisPage() {
  const favorites = await fetchFavoriteHolidays();

  return (
    <section className="mb-16">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Favoris
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-center p-4 gap-8 flex-wrap">
        {favorites.map((fav, idx) => {
          const offer = fav.id_holidays_offers;
          const city = offer?.id_cities;

          return (
            <Link
              key={`${fav.id}-${idx}`}
              href={`/app/offres/${offer.id}`}
              className="w-full max-w-2xl"
            >
              <FavoriteCard
                key={`${fav.id}-${idx}`}
                title={city?.name || "Ville inconnue"}
                subtitle={
                  offer?.id_cities.sub_title || "Sous-titre indisponible"
                }
                categories={offer?.id_cities.categories || []}
                image={offer?.image_url || ""}
                population={
                  offer?.id_cities.population || "Population inconnue"
                }
                distance={
                  offer?.id_cities.distance_from_doctor || "Distance inconnue"
                }
                activity={
                  offer?.id_cities.holiday_type || "Activité non précisée"
                }
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
