"use client";

import { useEffect, useState } from "react";
import { GithubActivity, GithubActivityType } from "@/lib/types";
import { fetchGithubActivities } from "@/app/actions";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useCallback } from "react";

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
  const [expandedRepos, setExpandedRepos] = useState<{ [repo: string]: boolean }>({});
  const [expandedCommits, setExpandedCommits] = useState<{ [activityId: string]: boolean }>({});

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

  // Group activities by repository name
  const repoGroups: { [repo: string]: GithubActivity[] } = {};
  activities.forEach((activity) => {
    if (!repoGroups[activity.repo.name]) {
      repoGroups[activity.repo.name] = [];
    }
    repoGroups[activity.repo.name].push(activity);
  });

  // Sort repositories by the latest event time (descending)
  const sortedRepos = Object.keys(repoGroups).sort((a, b) => {
    const aLatest = repoGroups[a].reduce((max, act) =>
      new Date(act.created_at) > new Date(max.created_at) ? act : max,
      repoGroups[a][0]
    );
    const bLatest = repoGroups[b].reduce((max, act) =>
      new Date(act.created_at) > new Date(max.created_at) ? act : max,
      repoGroups[b][0]
    );
    return new Date(bLatest.created_at).getTime() - new Date(aLatest.created_at).getTime();
  });

  return (
    <div className="relative">
      <div className="gap-4 space-y-4 grid lg:grid-cols-2 p-4 border border-foreground rounded-xl max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-card scrollbar-track-transparent scrollbar-thumb-green-500">
        {sortedRepos.map((repoName) => {
          const repoActivities = repoGroups[repoName];
          const isExpanded = expandedRepos[repoName];
          const visibleActivities = isExpanded ? repoActivities : repoActivities.slice(0, 3);
          return (
            <div key={repoName} className="mb-4">
              <div className="flex items-center font-bold text-lg mb-2 text-accent bg-accent text-background p-2 font-mono">
                <ChevronRight />
                {repoName}
              </div>
              {visibleActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex gap-4 bg-foreground/90 p-4 text-background transition-all duration-300 mb-2"
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
                    {/* Show commit messages for PushEvent */}
                    {activity.type === 'PushEvent' && activity.payload?.commits?.length > 0 && (
                      <div className="mt-2 bg-background/70 rounded p-2">
                        <div className="font-semibold text-xs mb-1 text-foreground/70">Commits:</div>
                        {(() => {
                          const commits = activity.payload.commits;
                          const isExpanded = expandedCommits[activity.id];
                          const visibleCommits = isExpanded ? commits : commits.slice(0, 2);
                          return (
                            <>
                              <ul className="list-disc list-inside text-xs text-foreground/80">
                                {visibleCommits.map((commit) => (
                                  <li key={commit.sha} className="mb-1">
                                    <span className="font-mono">{commit.message}</span>
                                  </li>
                                ))}
                              </ul>
                              {commits.length > 2 && (
                                <button
                                  className="mt-1 text-foreground underline text-xs focus:outline-none"
                                  onClick={() =>
                                    setExpandedCommits((prev) => ({
                                      ...prev,
                                      [activity.id]: !isExpanded,
                                    }))
                                  }
                                >
                                  {isExpanded ? `Show less` : `Show ${commits.length - 2} more`}
                                </button>
                              )}
                            </>
                          );
                        })()}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {repoActivities.length > 3 && (
                <button
                  className="mt-2 text-foreground underline text-sm focus:outline-none"
                  onClick={() =>
                    setExpandedRepos((prev) => ({
                      ...prev,
                      [repoName]: !isExpanded,
                    }))
                  }
                >
                  {isExpanded ? `Show less` : `Show ${repoActivities.length - 3} more`}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
