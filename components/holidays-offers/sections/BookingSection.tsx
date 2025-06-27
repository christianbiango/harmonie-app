import { insertBooking } from "@/app/(actions)/holidays";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

type BookingSectionProps = {
  offers_availability: OffersAvailability[];
  offerId: string;
  userId: string;
  onBookingSuccess?: () => void;
};

export const BookingSection = ({
  offers_availability,
  offerId,
  userId,
  onBookingSuccess,
}: BookingSectionProps) => {
  const [selected, setSelected] = useState<Date>();

  const isAvailable = (date: Date) => {
    return availableDates.some(
      (availableDate) =>
        availableDate.getFullYear() === date.getFullYear() &&
        availableDate.getMonth() === date.getMonth() &&
        availableDate.getDate() === date.getDate()
    );
  };

  const availableDates = offers_availability
    .filter((oa) => oa.available)
    .map((oa) => new Date(oa.date));

  const firstAvailable = availableDates[0] || new Date();
  const month = firstAvailable.getMonth();
  const year = firstAvailable.getFullYear();

  const handleBooking = async () => {
    if (!selected) {
      alert("Veuillez sélectionner une date disponible.");
      return;
    }

    try {
      const res = await insertBooking([selected], offerId, userId);
      if (onBookingSuccess) onBookingSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="py-4 mb-8">
      <h2 className="text-xl font-bold mb-4">Vérifiez les disponibilités</h2>
      <div className="w-full flex flex-col items-center">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={setSelected}
          month={new Date(year, month, 1)}
          startMonth={new Date(year, month, 1)}
          endMonth={new Date(year, month, 1)}
          modifiers={{ available: isAvailable }}
          modifiersClassNames={{
            available:
              "after:content-[''] after:block after:mx-auto after:mt-1 after:w-1.5 after:h-1.5 after:rounded-full after:bg-nephos-cyan",
            selected: "bg-nephos-cyan text-white !rounded-full",
          }}
          className="mb-6 border border-nephos-blue bg-[#FFFBF5] rounded-xl"
          showOutsideDays={false}
          classNames={{
            day: "relative text-base w-10 h-10 flex items-center justify-center cursor-pointer",
            selected: "bg-nephos-cyan text-white !rounded-full",
          }}
        />
        <button
          onClick={handleBooking}
          className="w-full max-w-[304px] bg-[#183B7A] text-white font-semibold py-3 rounded-lg text-base mt-2"
        >
          Postuler au séjour
        </button>
      </div>
    </section>
  );
};
