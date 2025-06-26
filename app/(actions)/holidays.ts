"use server";

import { formatDateToLocalYYYYMMDD } from "@/utils/dates";
import { createClient } from "@/utils/supabase/server";

export const fetchHolidayAction = async (
  column: string,
  value: string | number
) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("holidays_offers")
    .select(
      `
      *,
      cities(id, name, population, distance_from_doctor, holiday_type, region),
      holidays_comments(
        id,
        comment,
        created_at,
        doctors_public(
          id,
          last_name
        )
      ),
      holiday_offer_similarities_id_holidays_offers_fkey(
        id_similar_holiday(
          image_url,
          image_alt,
          name,
          main_category
        )
    ),
    offers_availability(date, available)
    `
    )
    .eq(column, value)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  if (data?.holidays_comments) {
    data.holidays_comments = data.holidays_comments.sort(
      (a: any, b: any) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )[0];
  }

  return data;
};

export async function insertBooking(
  selectedDates: Date[],
  offerId: string,
  userId: string
) {
  const supabase = await createClient();

  const datesStr = selectedDates.map(formatDateToLocalYYYYMMDD);

  for (const date of datesStr) {
    const { error: insertError } = await supabase
      .from("offers_bookings")
      .insert([
        {
          id_holidays_offers: offerId,
          id_doctors: userId,
          date,
          status: "En attente de validation",
        },
      ]);

    if (insertError) {
      throw new Error(insertError.message);
    }

    const { error: updateError } = await supabase
      .from("offers_availability")
      .update({ available: false })
      .eq("id_holidays_offers", offerId)
      .eq("date", date);

    if (updateError) {
      throw new Error(updateError.message);
    }
  }

  return { success: true };
}

// Fetch all recommended holidays for a user, with offer details
export const fetchUserRecommendedOffers = async (userId: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("recommanded_holidays")
    .select("id_holidays_offers, holidays_offers (id, name, image_url)")
    .eq("id_doctors", userId);

  if (error) {
    throw new Error(error.message);
  }

  // Flatten the result to just the holidays_offers
  return (data || []).map((row: any) => row.holidays_offers);
};

// Search communes by name and return commune name, an image URL and description from holidays_offers
export const searchCommunesAction = async (searchTerm: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("holidays_offers")
    .select(
      `
      image_url,
      description, 
      cities (
        name
      )
      `
    )
    .ilike("cities.name", `%${searchTerm}%`)
    .limit(10);

  if (error) {
    throw new Error(error.message);
  }

  // Transform into flat objects with desired fields
  return (data || [])
    .filter((row: any) => row.cities && row.cities.name)
    .map((row: any) => ({
      name: row.cities.name,
      image_url: row.image_url,
      description: row.description,
    }));
};
