import { NextRequest, NextResponse } from "next/server";
import { AppleMusicNowPlayingSchema } from "@/lib/types";
import { Redis } from "@upstash/redis";
import { env } from "@/env/server";

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    const parsed = AppleMusicNowPlayingSchema.safeParse(req);

    if (parsed.error) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    if (parsed.data.endpointKey !== env.APPLE_MUSIC_ENDPOINT_KEY) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const nowPlayingData = parsed.data;

    try {
      const kvStore = new Redis({
        url: env.KV_REST_API_URL,
        token: env.KV_REST_API_TOKEN,
      });
      // Set the latest value in Vercel KV using a specific key
      await kvStore.set("latest", JSON.stringify(nowPlayingData), {
        ex: 15,
      }); // "latest" key holds the most recent now playing data

      return NextResponse.json(
        { message: "Added currently playing information" },
        { status: 200 }
      );
    } catch (kvError) {
      console.log(kvError);
      return NextResponse.json(
        { message: "Failed to set now playing data", error: kvError },
        { status: 500 }
      );
    }
  } catch (e: any) {
    console.log(e);
    return NextResponse.json(
      { message: "Unable to add currently playing information" },
      { status: 500 }
    );
  }
}
