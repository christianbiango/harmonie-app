import { HolidayTripCard } from "./HolidayTripCard";

export const DependsOnYouSection = () => {
  return (
    <div className="p-4 relative">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Coup de coeur Nephos</h2>
        </div>
      </div>
      <div
        className="flex md:grid md:grid-cols-2 gap-8 mb-12 overflow-x-auto md:overflow-x-visible scrollbar-hide pr-8"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <HolidayTripCard
          imageSrc="/images/homepage/field.png"
          alt="Sore"
          title="Sore"
          description="Nature et tranquillité"
        />
        <HolidayTripCard
          imageSrc="/images/homepage/bluecircle.svg"
          alt="Sabres"
          title="Sabres"
          description="Village typique landais"
        />
      </div>
    </div>
  );
};
