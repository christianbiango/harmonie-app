"use client";

import { formatDateToFrench } from "@/utils/dates";
import { useRouter } from "next/navigation";
import { HeaderSection } from "../../shared/HeaderSection";
import { CommentCard } from "../cards/CommentCard";
import { ConditionsSection } from "../sections/ConditionsSection";
import { EquipmentsSection } from "../sections/EquipementsSection";
import { MissionSection } from "../sections/MissionSection";
import { SimilarHolidaysSection } from "../sections/SimilarHolidaysSection";
import { BookingSection } from "../sections/BookingSection";
import { KeyInfosSection } from "@/components/shared/KeyInfos";

type HolidayDetailPageProps = {
  holiday: HolidayDetail;
  userId: string;
};

export const HolidayDetailsPage = ({
  holiday,
  userId,
}: HolidayDetailPageProps) => {
  const router = useRouter();
  return (
    <>
      {holiday && (
        <>
          <HeaderSection
            image_url={holiday.image_url}
            image_alt={holiday.image_alt}
            title={holiday.name}
          />
          <div className="px-4 sm:px-12">
            {holiday && (
              <div className="my-8">
                <KeyInfosSection
                  people={holiday.cities.population}
                  distance={holiday.cities.distance_from_doctor}
                  holiday_type={holiday.cities.holiday_type}
                />
              </div>
            )}

            <section>
              <CommentCard
                name={`Dr. ${holiday.holidays_comments.doctors_public.last_name}`}
                date={formatDateToFrench(holiday.holidays_comments.created_at)}
                comment={holiday.holidays_comments.comment}
              />
            </section>
            <MissionSection {...holiday} />
            <EquipmentsSection {...holiday} />
            <ConditionsSection {...holiday} />
            <BookingSection
              offers_availability={holiday.offers_availability}
              offerId={holiday.id}
              userId={userId}
              onBookingSuccess={() =>
                router.push(`/app/offres/${holiday.id}/validation`)
              }
            />
            <SimilarHolidaysSection
              similarities={
                holiday.holiday_offer_similarities_id_holidays_offers_fkey
              }
            />
          </div>
        </>
      )}
    </>
  );
};
