import { SeedPg } from "@snaplet/seed/adapter-pg";
import { defineConfig } from "@snaplet/seed/config";
import { Client } from "pg";
import { env } from "./config/env";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" }); // Load environment variables from .env.local. When executing this script in Command Line, env variables are not automatically loaded, so we need to load them manually.

export default defineConfig({
  adapter: async () => {
    const client = new Client({
      connectionString: env.SUPABASE.SUPABASE_CONNECTION!,
    });
    await client.connect();
    return new SeedPg(client);
  },
  select: [
    // We don't alter any extensions tables that might be owned by extensions
    "!*",
    // We want to alter all the tables under public schema
    "public*",
    // We also want to alter some of the tables under the auth schema
    "auth.users",
    "auth.identities",
    "auth.sessions",
  ],
});
