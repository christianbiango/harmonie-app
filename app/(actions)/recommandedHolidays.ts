"use server";

import { createClient } from "@/utils/supabase/server";

export const fetchManyAction = async (
    table: string,
    column: string,
    value: string | number) => {
    const supabase = await createClient();
    const { data } = await supabase
      .from(table)
      .select('*')
      .eq(column, value);
  
    return data;
  };

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