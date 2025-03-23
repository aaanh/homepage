"use client";

import { useEffect, useState } from "react";
import { GithubActivity, GithubActivityType } from "@/lib/types";
import { fetchGithubActivities } from "@/app/[locale]/actions";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

function getActivityDescription(type: GithubActivityType): string {
  switch (type) {
    case 'PushEvent':
      return 'pushed to';
    case 'DeleteEvent':
      return 'deleted a branch in';
    case 'WatchEvent':
      return 'starred';
    case 'CreateEvent':
      return 'created a repository';
    default:
      return 'performed some activity in';
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
    <div className="relative">
      <div className="gap-4 space-y-4 grid lg:grid-cols-2 bg-[#f2f2f2] dark:bg-[#121212] shadow-[5px_5px_20px_#bebebe,-5px_-5px_20px_#ffffff] dark:shadow-[5px_5px_20px_#1a1a1a,-5px_-5px_20px_#404040] p-4 rounded-xl max-h-[35vh] overflow-y-auto scrollbar-thin scrollbar-thumb-card scrollbar-track-transparent">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex gap-4 bg-[#f2f2f2] dark:bg-[#121212] shadow-[5px_5px_10px_#cecece,-5px_-5px_10px_#ffffff] hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] dark:hover:shadow-[8px_8px_16px_#1a1a1a,-8px_-8px_16px_#404040] dark:shadow-[5px_5px_10px_#161616,-5px_-5px_10px_#414141] p-4 rounded-lg transition-all duration-300"
          >
            <Image
              width={100}
              height={100}
              src={activity.actor.avatar_url}
              alt={activity.actor.login}
              className="shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#1a1a1a,-3px_-3px_6px_#404040] rounded-full w-10 h-10"
            />
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <a
                  href={activity.actor.url
                    .replace("api.", "")
                    .replace("users/", "")}
                  className="text-[#2d3436] hover:text-accent dark:text-[#e0e5ec] transition-colors"
                >
                  <span className="font-medium">{activity.actor.login}</span>
                </a>
                <span className="text-[#636e72] dark:text-[#b2bec3]">
                  {getActivityDescription(activity.type)}
                </span>
                <a
                  href={activity.repo.url
                    .replace("api.", "")
                    .replace("repos/", "")}
                  className="text-[#2d3436] hover:text-accent dark:text-[#e0e5ec] transition-colors"
                >
                  <span className="font-medium">{activity.repo.name}</span>
                </a>
              </div>
              <div className="mt-1 text-[#636e72] dark:text-[#b2bec3] text-sm">
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
