export const env = {
  SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN || "",
  VERCEL_URL: process.env.VERCEL_URL || "",
  SUPABASE: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
    SUPABASE_CONNECTION: process.env.SUPABASE_CONNECTION || "",
  },
  GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_ID || "",
};
