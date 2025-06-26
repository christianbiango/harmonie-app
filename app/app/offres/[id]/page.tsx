"use client";

import { fetchHolidayAction, insertBooking } from "@/app/(actions)/holidays";
import { KeyDestinationInfos } from "@/components/DetailPage/KeyDestinationInfos";
import { Card } from "@/components/HomePage/TripCard";
import { KeyInfoStepProps } from "@/components/shared/KeyInfoStep";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatDateToFrench } from "@/utils/dates";
import { User } from "@supabase/supabase-js";
import { setMonth, setYear } from "date-fns";
import {
  ArrowLeft,
  Bath,
  Building,
  MapPin,
  ShowerHead,
  Users,
  Utensils,
  WashingMachine,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { JSX, useEffect, useState } from "react";

type Params = {
  id: string;
};

const conditions = [
  {
    title: "Salaire et versement",
    description: (
      <>
        Versements <span className="font-semibold">hebdomadaires de 375€</span>{" "}
        de la part de la commune pour vos activités personnelles.
        <br />
        Concernant vos rendez-vous avec les patients, vous serez payé sur la{" "}
        <span className="font-semibold">
          base tarifaire de vos consultations ordinaires
        </span>
        .
      </>
    ),
  },
  {
    title: "Voiture de prêt",
    description: (
      <>
        Une voiture de fonction vous sera prêtée sur place.
        <br />
        Seulement{" "}
        <span className="font-semibold">lors de vos déplacements privés</span>,
        le plein sera à <span className="underline">votre charge</span>.
      </>
    ),
  },
  {
    title: "Horaires d'exercices",
    description: (
      <>
        Il vous sera demander d'effectuer des visites à domicile au sein de la
        commune le{" "}
        <span className="font-semibold">lundi et vendredi de 9h à 14h</span> et
        de vous présenter au cabinet 17 rue de la Madeleine le{" "}
        <span className="font-semibold">mardi et jeudi de 9h30 à 16h30</span>.
      </>
    ),
  },
  {
    title: "Accompagnement",
    description: (
      <>
        Il vous sera proposer des{" "}
        <span className="font-semibold">espaces de bien-être</span> et de
        relaxation totalement gratuitement : spa, séance de yoga en pleine aire
        ou encore massage.
      </>
    ),
  },
];

type AlsoLikeSectionProps = {
  similarities: HolidayOfferSimilaritiesId[];
};

const AlsoLikeSection = ({ similarities }: AlsoLikeSectionProps) => {
  if (!similarities || similarities.length === 0) return null;
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Cela aussi pourrait vous plaire
      </h2>
      <div className="flex flex-col sm:flex-row gap-6">
        {similarities.map((similarHoliday, idx) => (
          <div key={idx} className="flex-1 min-w-0">
            <Card
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

// const DisponibilitesSection = () => {
//   // Hardcoded available days for July 2024
//   const availableDays = [4, 9, 13, 16, 20, 22, 23, 27];
//   const [selected, setSelected] = useState<Date | undefined>(undefined);
//   const month = 6; // July (0-indexed)
//   const year = 2024;

//   // Helper to check if a day is available
//   const isAvailable = (date: Date) =>
//     date.getMonth() === month &&
//     date.getFullYear() === year &&
//     availableDays.includes(date.getDate());

//   return (
//     <section className="bg-[#FFFBF5] rounded-xl p-4 mb-8 max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-4">Vérifiez les disponibilités</h2>
//       <Calendar
//         mode="single"
//         selected={selected}
//         onSelect={setSelected}
//         month={setMonth(setYear(new Date(), year), month)}
//         fromMonth={setMonth(setYear(new Date(), year), month)}
//         toMonth={setMonth(setYear(new Date(), year), month)}
//         modifiers={{ available: isAvailable }}
//         modifiersClassNames={{
//           available:
//             "after:content-[''] after:block after:mx-auto after:mt-1 after:w-1.5 after:h-1.5 after:rounded-full after:bg-[#1DE1FC]",
//           selected: "bg-[#1DE1FC] text-white !rounded-full",
//         }}
//         className="mb-6"
//         showOutsideDays={false}
//         captionLayout="dropdown"
//         classNames={{
//           day: "relative text-base w-10 h-10 flex items-center justify-center cursor-pointer",
//           selected: "bg-[#1DE1FC] text-white !rounded-full",
//         }}
//         components={{}}
//       />
//       <button className="w-full bg-[#183B7A] text-white font-semibold py-3 rounded-lg text-base mt-2">
//         Postuler au séjour
//       </button>
//     </section>
//   );
// };

type City = {
  id: string;
  name: string;
  population: string;
  distance_from_doctor: string;
  holiday_type: string;
  region: string;
};

type Doctor = {
  id: string;
  last_name: string;
};

type HolidaysComment = {
  id: string;
  comment: string;
  created_at: string;
  doctors_public: Doctor;
};

type OfferDetail = {
  id: string;
  name: string;
  image_url: string;
  image_url_2: string;
  image_url_3: string;
  image_alt: string;
  image_2_alt: string;
  image_3_alt: string;
  cities: City;
  holidays_comments: HolidaysComment;
  rooms_description: string;
  equipments: string[];
  salary: string[];
  car: string[];
  exercices_hours: string[];
  support: string[];
  holiday_offer_similarities_id_holidays_offers_fkey: HolidayOfferSimilaritiesId[];
  offers_availability: OffersAvailability[];
};

type OffersAvailability = {
  date: Date;
  available: boolean;
};

type HolidayOfferSimilarities = {
  image_url: string;
  image_alt: string;
  name: string;
  main_category: string;
};

type HolidayOfferSimilaritiesId = {
  id_similar_holiday: HolidayOfferSimilarities;
};

export default function OffresDetails({ params }: { params: Promise<Params> }) {
  const router = useRouter();
  const [offer, setOffer] = useState<OfferDetail>();
  const [steps, setSteps] = useState<KeyInfoStepProps[]>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function fetchOffer() {
      const { id } = await params;
      const res = await fetchHolidayAction("id", id);
      console.log("res", res);
      setOffer(res);
      setSteps([
        { icon: Users, text: res.cities.population },
        { icon: MapPin, text: res.cities.distance_from_doctor },
        { icon: Building, text: res.cities.holiday_type },
      ]);
    }
    fetchOffer();
  }, []);

  return (
    <>
      {offer && (
        <>
          <header className="mt-7 relative w-full min-h-[310px] md:min-h-[600px] overflow-hidden flex flex-col justify-start pt-[70px] md:pt-[150px]">
            <div className="absolute top-0 left-0 w-full h-full z-10">
              <Image
                src={offer.image_url}
                alt="Paysage avec un champ doré et un ciel bleu"
                layout="fill"
                objectFit="cover"
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sticky top-0 z-10 p-4 shadow-sm text-white">
              <div className="flex items-center">
                <button onClick={() => router.back()} className="p-2 -ml-2">
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <h1 className="text-lg font-semibold mx-auto">
                  {offer.cities.name}
                </h1>
                <div className="w-6"></div> {/* Spacer for centering */}
              </div>
            </div>
          </header>
          {steps && (
            <section className="my-8">
              <KeyDestinationInfos steps={steps} />
            </section>
          )}

          <section>
            <CommentCard
              name={`Dr. ${offer.holidays_comments.doctors_public.last_name}`}
              date={formatDateToFrench(offer.holidays_comments.created_at)}
              comment={offer.holidays_comments.comment}
            />
          </section>
          <section>
            <MissionCard {...offer} />
          </section>
          <section>
            <EquipmentsCard {...offer} />
          </section>
          <section>
            <ConditionsCard {...offer} />
          </section>
          <section>
            <AlsoLikeSection
              similarities={
                offer.holiday_offer_similarities_id_holidays_offers_fkey
              }
            />
          </section>
          <section>
            <DisponibilitesSection
              offers_availability={offer.offers_availability}
              offerId={offer.id}
              userId={"073de563-6f4f-4304-9f2a-e8c532972265"}
              onBookingSuccess={() =>
                router.push(`/app/offres/${offer.id}/validation`)
              }
            />
          </section>
        </>
      )}
    </>
  );
}

type CommentCardProps = {
  name: string;
  date: string;
  comment: string;
};

const CommentCard = ({ name, date, comment }: CommentCardProps) => (
  <div className="bg-[#183B7A] rounded-xl p-6 text-white max-w-lg">
    <div className="flex items-center mb-2">
      <Image
        src="/images/homepage/quote.svg"
        alt="alt text"
        width={30}
        height={30}
        className="text-[#1DE1FC] w-8 h-8 mr-2"
      />
      <span className="font-bold text-lg">{name}</span>
      <span className="ml-2 text-sm text-[#CFE6F9]">
        - <span className="underline">{date}</span>
      </span>
    </div>
    <p className="text-base text-white mt-2">{comment}</p>
  </div>
);

const MissionCard = ({
  name,
  cities,
  rooms_description,
  image_url_2,
  image_url_3,
  image_2_alt,
  image_3_alt,
}: OfferDetail) => (
  <section className="bg-[#FFFBF5] rounded-xl p-4 mb-8">
    <h2 className="text-lg font-bold mb-3">Découvrez votre mission</h2>
    <div className="flex gap-2 mb-3">
      <Image
        src={image_url_2}
        alt={image_2_alt}
        width={110}
        height={110}
        className="rounded-lg object-cover w-[110px] h-[110px]"
      />
      <Image
        src={image_url_3}
        alt={image_3_alt}
        width={110}
        height={110}
        className="rounded-lg object-cover w-[110px] h-[110px]"
      />
    </div>
    <div className="mb-1">
      <span className="font-bold text-lg">{name}</span>
    </div>
    <div className="text-sm text-gray-800 mb-1">
      {cities.name}, {cities.region}
    </div>
    <div className="text-sm text-gray-600">{rooms_description}</div>
  </section>
);

const equipmentIcons: Record<string, JSX.Element> = {
  "Cuisine équipée": <Utensils className="w-5 h-5" />,
  Wifi: <Wifi className="w-5 h-5" />,
  "Douche à l'italienne": <ShowerHead className="w-5 h-5" />,
  "Lave-linge": <WashingMachine className="w-5 h-5" />,
  Serviettes: <Bath className="w-5 h-5" />,
};

const EquipmentsDialog = ({
  visibleEquipments,
  equipmentIcons,
}: {
  visibleEquipments: string[];
  equipmentIcons: Record<string, JSX.Element>;
}) => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="w-full bg-[#183B7A] text-white font-semibold py-2 rounded-md text-base mt-2">
        Afficher les équipements
      </button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Équipements du logement</DialogTitle>
        <DialogClose />
      </DialogHeader>
      <ul className="space-y-2 mt-4">
        {visibleEquipments.map((equipment, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-gray-800 text-sm"
          >
            {equipmentIcons[equipment]}
            {equipment}
          </li>
        ))}
      </ul>
    </DialogContent>
  </Dialog>
);

const EquipmentsCard = ({ equipments }: OfferDetail) => {
  const visibleEquipments = equipments.filter(
    (equipment) => equipmentIcons[equipment]
  );
  const fourEquipments = visibleEquipments.slice(0, 4);

  return (
    <section className="bg-[#FFFBF5] rounded-xl p-4 mb-8 max-w-xs">
      <h2 className="text-base font-bold mb-3">Équipements du logement</h2>
      <ul className="mb-4 space-y-2">
        {fourEquipments.map((equipment, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-gray-800 text-sm"
          >
            {equipmentIcons[equipment]}
            {equipment}
          </li>
        ))}
      </ul>
      <EquipmentsDialog
        visibleEquipments={visibleEquipments}
        equipmentIcons={equipmentIcons}
      />
    </section>
  );
};

type InfoSectionProps = {
  title: string;
  items: string[];
};

const InfoSection = ({ title, items }: InfoSectionProps) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="py-4 first:pt-0 last:pb-0">
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <ul className="space-y-1">
        {items.map((item, idx) => (
          <li key={idx} className="text-sm text-gray-800">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ConditionsCard = ({
  salary,
  car,
  support,
  exercices_hours,
}: OfferDetail) => (
  <div className="bg-[#FFFBF5] rounded-xl p-4 mb-8 divide-y divide-[#E5E5E5]">
    <InfoSection title="Salaire et versement" items={salary} />
    <InfoSection title="Véhicule" items={car} />
    <InfoSection title="Accompagnement" items={support} />
    <InfoSection title="Horaires des exercices" items={exercices_hours} />
  </div>
);

type DisponibilitesSectionProps = {
  offers_availability: OffersAvailability[];
  offerId: string;
  userId: string;
  onBookingSuccess?: () => void;
};

const DisponibilitesSection = ({
  offers_availability,
  offerId,
  userId,
  onBookingSuccess,
}: DisponibilitesSectionProps) => {
  const [selected, setSelected] = useState<Date | undefined>(undefined);

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
    <section className="bg-[#FFFBF5] rounded-xl p-4 mb-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Vérifiez les disponibilités</h2>
      <Calendar
        mode="single"
        selected={selected}
        onSelect={setSelected}
        month={setMonth(setYear(new Date(), year), month)}
        fromMonth={setMonth(setYear(new Date(), year), month)}
        toMonth={setMonth(setYear(new Date(), year), month)}
        modifiers={{ available: isAvailable }}
        modifiersClassNames={{
          available:
            "after:content-[''] after:block after:mx-auto after:mt-1 after:w-1.5 after:h-1.5 after:rounded-full after:bg-[#1DE1FC]",
          selected: "bg-[#1DE1FC] text-white !rounded-full",
        }}
        className="mb-6"
        showOutsideDays={false}
        captionLayout="dropdown"
        classNames={{
          day: "relative text-base w-10 h-10 flex items-center justify-center cursor-pointer",
          selected: "bg-[#1DE1FC] text-white !rounded-full",
        }}
      />
      <button
        onClick={handleBooking}
        className="w-full bg-[#183B7A] text-white font-semibold py-3 rounded-lg text-base mt-2"
      >
        Postuler au séjour
      </button>
    </section>
  );
};
