import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    RESEND_API_KEY: z.string(),
    KV_REST_API_TOKEN: z.string(),
    KV_REST_API_URL: z.string(),
    SPOTIFY_CLIENT_ID: z.string(),
    SPOTIFY_CLIENT_SECRET: z.string(),
    SPOTIFY_REFRESH_TOKEN: z.string(),
    APPLE_MUSIC_ENDPOINT_KEY: z.string(),
    GENIUS_ACCESS_TOKEN: z.string(),
    DEST_EMAIL: z.string().email(),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  experimental__runtimeEnv: process.env,
});
