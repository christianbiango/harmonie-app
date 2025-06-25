import { FavoriteCard } from "@/components/HomePage/FavoriteCard";

export default function FavorisPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFBF5] p-4">
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
  );
}
