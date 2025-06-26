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
