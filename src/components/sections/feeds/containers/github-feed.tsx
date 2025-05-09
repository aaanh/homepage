"use client";

import { useEffect, useState } from "react";
import { GithubActivity, GithubActivityType } from "@/lib/types";
import { fetchGithubActivities } from "@/app/actions";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

function getActivityDescription(type: GithubActivityType): string {
  switch (type) {
    case "PushEvent":
      return "pushed to";
    case "DeleteEvent":
      return "deleted a branch in";
    case "WatchEvent":
      return "starred";
    case "CreateEvent":
      return "created a repository";
    default:
      return "performed some activity in";
  }
}

export function GithubFeed() {
  const [activities, setActivities] = useState<GithubActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const data = await fetchGithubActivities();
        setActivities(data);
      } catch (error) {
        console.error("Failed to load GitHub activities:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadActivities();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[35vh]">
        <div className="border-gray-900 dark:border-white border-b-2 rounded-full w-8 h-8 animate-spin"></div>
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <div className="py-8 text-gray-500 dark:text-gray-400 text-center">
        No GitHub activities found
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="gap-4 space-y-4 grid lg:grid-cols-2 p-4 border border-foreground rounded-xl max-h-[35vh] overflow-y-auto scrollbar-thin scrollbar-thumb-card scrollbar-track-transparent scrollbar-thumb-green-500">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex gap-4 bg-foreground/90 p-4 text-background transition-all duration-300"
          >
            <Image
              width={100}
              height={100}
              src={activity.actor.avatar_url}
              alt={activity.actor.login}
              className="p-1 border border-background rounded-full w-10 h-10"
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-1">
                <a
                  href={activity.actor.url
                    .replace("api.", "")
                    .replace("users/", "")}
                  className="hover:text-accent transition-colors"
                >
                  <span className="font-medium">{activity.actor.login}</span>
                </a>
                <span className="text-background/50">
                  {getActivityDescription(activity.type)}
                </span>
                <a
                  href={activity.repo.url
                    .replace("api.", "")
                    .replace("repos/", "")}
                  className="hover:text-accent transition-colors"
                  target="_blank"
                >
                  <span className="font-medium">{activity.repo.name}</span>
                </a>
              </div>
              <div className="mt-1 text-sm">
                {formatDistanceToNow(new Date(activity.created_at), {
                  addSuffix: true,
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
