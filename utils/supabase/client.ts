import { createBrowserClient } from "@supabase/ssr";
import { env } from "@/config/env";

export const createClient = () =>
  createBrowserClient(
    env.SUPABASE.NEXT_PUBLIC_SUPABASE_URL!,
    env.SUPABASE.NEXT_PRIVATE_SUPABASE_API_KEY
  );