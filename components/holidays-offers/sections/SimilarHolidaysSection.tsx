import { HolidayTripCard } from "@/components/home/HolidayTripCard";

type SimilarHolidaysProps = {
  similarities: HolidayOfferSimilaritiesId[];
};

export const SimilarHolidaysSection = ({
  similarities,
}: SimilarHolidaysProps) => {
  if (!similarities || similarities.length === 0) return null;
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">
        Cela aussi pourrait vous plaire
      </h2>
      <div className="flex flex-col sm:flex-row gap-6">
        {similarities.map((similarHoliday, idx) => (
          <div key={idx} className="min-w-0">
            <HolidayTripCard
              imageSrc={similarHoliday.id_similar_holiday.image_url}
              alt={similarHoliday.id_similar_holiday.image_alt}
              title={
                <span className="font-bold text-lg">
                  {similarHoliday.id_similar_holiday.name}
                </span>
              }
              description={
                <span className="text-[#183B7A] text-base">
                  {similarHoliday.id_similar_holiday.main_category}
                </span>
              }
              showHeart={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
