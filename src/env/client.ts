import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_BLOG_RSS_FEED_URL: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_BLOG_RSS_FEED_URL: process.env.NEXT_PUBLIC_BLOG_RSS_FEED_URL,
  },
});
