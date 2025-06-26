"use server";

import { formatDateToLocalYYYYMMDD } from "@/utils/dates";
import { createClient } from "@/utils/supabase/server";

export const fetchDoctorAccount = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;

  const { data, error } = await supabase
    .from("doctors")
    .select(
      `
      *,
      offers_bookings (
        *,
        id_holidays_offers (
          *,
          id_cities (
            name
          )
        )
      )
    `
    )
    .eq("id", userId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const fetchFavoriteHolidays = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;

  const { data, error } = await supabase
    .from("favorite_holidays")
    .select(
      `
        *,
        id_holidays_offers (
        *,
            id_cities (
                name,
                population,
                holiday_type,
                distance_from_doctor,
                categories,
                sub_title
            )
        )
      `
    )
    .eq("id_doctors", userId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
