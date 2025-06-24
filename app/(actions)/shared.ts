"use server";

import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export const fetchSingleAction = async (
  table: string,
  column: string,
  value: string | number
) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .eq(column, value)
    .single();

    if (!data) {
        notFound() // Affiche la 404 Next.js
      }

  return data;
};

export const fetchAllAction = async (table: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from(table)
    .select('*');

  return data;
};