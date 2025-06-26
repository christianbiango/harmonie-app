import { FavoriteCard } from "@/components/HomePage/FavoriteCard";

export default function FavorisPage() {
  return (
    <>
      <section className="mb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Favoris
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center p-4 gap-8">
          <FavoriteCard
            title="Vigan"
            subtitle="Commune du Sud"
            tags={["En forêt", "Nature", "Lac"]}
            image="/images/homepage/church.png"
            population="3 786 habitants"
            distance="À 42min de chez vous"
            activity="Escalade en nature"
          />
          <FavoriteCard
            title="Vigan"
            subtitle="Commune du Sud"
            tags={["En forêt", "Nature", "Lac"]}
            image="/images/homepage/church.png"
            population="3 786 habitants"
            distance="À 42min de chez vous"
            activity="Escalade en nature"
          />
        </div>
      </section>
    </>
  );
}
