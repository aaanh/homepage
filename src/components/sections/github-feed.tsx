"use client";

import { useEffect, useState } from "react";
import { GithubActivity } from "@/lib/types";
import { fetchGithubActivities } from "@/app/actions";
import { formatDistanceToNow } from "date-fns";
import { Github } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import SectionHeader from "./section-header";

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
      <div className="flex justify-center items-center min-h-[200px]">
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
    <section className="space-y-6 p-2 px-4">
      <div className="flex items-center gap-2">
        <SectionHeader title="GitHub Activities" />
      </div>
      <div className="relative">
        <div className="space-y-4 p-2 border border-accent max-h-[35vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex gap-4 bg-card shadow-sm hover:shadow-md p-4 rounded-lg transition-shadow"
            >
              <Image
                width={100}
                height={100}
                src={activity.actor.avatar_url}
                alt={activity.actor.login}
                className="rounded-full w-10 h-10"
              />
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <a
                    href={activity.actor.url
                      .replace("api.", "")
                      .replace("users/", "")}
                  >
                    <span className="font-medium">{activity.actor.login}</span>
                  </a>
                  <span className="text-muted-foreground">
                    {"created "}
                    {activity.type.replace(/([A-Z])/g, " $1").toLowerCase()}
                  </span>
                  <span className="text-muted-foreground">in</span>
                  <a href={activity.repo.url}>
                    <span className="font-medium">{activity.repo.name}</span>
                  </a>
                </div>
                <div className="mt-1 text-gray-500 dark:text-gray-400 text-sm">
                  {formatDistanceToNow(new Date(activity.created_at), {
                    addSuffix: true,
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
