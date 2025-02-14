import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    SPOTIFY_CLIENT_ID: z.string(),
    SPOTIFY_CLIENT_SECRET: z.string(),
    SPOTIFY_REFRESH_TOKEN: z.string(),
    KV_REST_API_URL: z.string(),
    KV_REST_API_TOKEN: z.string(),
    APPLE_MUSIC_ENDPOINT_KEY: z.string(),
    GENIUS_ACCESS_TOKEN: z.string(),
    RESEND_API_KEY: z.string(),
    DEST_EMAIL: z.string().email(),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  experimental__runtimeEnv: {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
    KV_REST_API_URL: process.env.KV_REST_API_URL,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
    APPLE_MUSIC_ENDPOINT_KEY: process.env.APPLE_MUSIC_ENDPOINT_KEY,
    GENIUS_ACCESS_TOKEN: process.env.GENIUS_ACCESS_TOKEN,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    DEST_EMAIL: process.env.DEST_EMAIL,
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
});
