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

export const fetchPaginatedAction = async (
  table: string,
  page: number = 1,
  limit: number = 10
) => {
  const supabase = await createClient();
  
  // Calculate the range start and end
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  // First, get the total count
  const { count } = await supabase
    .from(table)
    .select('*', { count: 'exact', head: true });

  // Then get the actual data for the current page
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .range(start, end)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching data:', error);
    return null;
  }

  return {
    data,
    metadata: {
      total: count || 0,
      page,
      limit,
      totalPages: count ? Math.ceil(count / limit) : 0
    }
  };
};