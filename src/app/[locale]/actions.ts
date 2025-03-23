import { GithubActivity } from "@/lib/types";

export async function fetchGithubActivities(
  fetchNew: boolean = false
): Promise<GithubActivity[]> {
  try {
    const baseUrl = "https://homepage-feed-worker.aaanhoverlord.workers.dev/";
    const url = new URL(baseUrl);
    url.searchParams.set(fetchNew ? "github-fetch" : "kv-read", "true");

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(
        `Failed to fetch GitHub activities: ${response.statusText}`
      );
    }
    const data = (await response.json()) as GithubActivity[];
    return data;
  } catch (error) {
    console.error("Error fetching GitHub activities:", error);
    return [];
  }
}
