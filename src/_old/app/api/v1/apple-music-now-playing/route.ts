import { env } from "@/env/server";
import { Redis } from "@upstash/redis";
import { unstable_noStore } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  unstable_noStore();
  try {
    const kvStore = new Redis({
      url: env.KV_HOMEPAGE_REST_API_URL,
      token: env.KV_HOMEPAGE_REST_API_TOKEN,
    });

    const latestNowPlayingData = await kvStore.get("latest");

    if (!latestNowPlayingData) {
      return NextResponse.json(
        { message: "No currently playing information" },
        { status: 404 }
      );
    }

    return NextResponse.json(latestNowPlayingData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch currently playing information", error },
      { status: 500 }
    );
  }
}
