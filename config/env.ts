export const env = {
  SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN || "",
  VERCEL_URL: process.env.VERCEL_URL || "",
  SUPABASE: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
    SUPABASE_CONNECTION: process.env.SUPABASE_CONNECTION || "",
    NEXT_PRIVATE_SUPABASE_API_KEY:
      process.env.NEXT_PRIVATE_SUPABASE_API_KEY || "",
  },
  CLOUDFLARE: {
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
    TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY || "",
    PUBLIC_TURNSTILE_VERIFICATION_URL:
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
  },
  GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_ID || "",
};
