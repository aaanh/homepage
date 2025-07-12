"use client";

import { useEffect, useState } from "react";
import { GithubActivity, GithubActivityType } from "@/lib/types";
import { fetchGithubActivities } from "@/app/actions";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useCallback } from "react";

const ACTIVITY_TYPE_LABELS: Record<string, string> = {
  PushEvent: "pushed to",
  DeleteEvent: "deleted",
  WatchEvent: "starred",
  CreateEvent: "created",
  PullRequestEvent: "opened a pull request in",
  IssuesEvent: "opened an issue in",
  ForkEvent: "forked",
  ReleaseEvent: "released",
  CommitCommentEvent: "commented on a commit in",
  IssueCommentEvent: "commented on an issue in",
  PullRequestReviewEvent: "reviewed a pull request in",
  PullRequestReviewCommentEvent: "commented on a pull request review in",
  GollumEvent: "updated the wiki in",
  PublicEvent: "made public",
  MemberEvent: "added a member to",
};

function getActivityDescription(type: GithubActivityType, payload?: any): string {
  switch (type) {
    case "PushEvent":
      return "pushed to";
    case "DeleteEvent":
      return `deleted a ${payload?.ref_type || "branch"} in`;
    case "WatchEvent":
      return "starred";
    case "CreateEvent":
      return `created a ${payload?.ref_type || "repository"}`;
    case "PullRequestEvent":
      return `${payload?.action || "updated"} pull request in`;
    case "IssuesEvent":
      return `${payload?.action || "updated"} issue in`;
    case "ForkEvent":
      return `forked`;
    case "ReleaseEvent":
      return `${payload?.action || "updated"} release in`;
    case "CommitCommentEvent":
      return `commented on a commit in`;
    default:
      return ACTIVITY_TYPE_LABELS[type] || `performed an unknown activity (${type}) in`;
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

  // Helper to render activity details
  function renderActivityDetails(activity: GithubActivity, helpers: any) {
    const {
      commits,
      pullRequest,
      issue,
      forkee,
      release,
      comment,
      issueComment,
      prReview,
      prReviewComment,
      gollumPages,
      member,
      expandedCommits,
      setExpandedCommits,
    } = helpers;
    switch (activity.type) {
      case 'PushEvent':
        if (commits.length > 0) {
          const isExpanded = expandedCommits[activity.id];
          const visibleCommits = isExpanded ? commits : commits.slice(0, 2);
          return (
            <div className="mt-2 bg-foreground/10 rounded p-2">
              <div className="font-semibold text-xs mb-1 text-foreground/70">Commits:</div>
              <ul className="list-disc list-inside text-xs text-foreground/80">
                {visibleCommits.map((commit: any) => (
                  <li key={commit.sha} className="mb-1 whitespace-nowrap">
                    <span className="font-mono truncate inline-block align-middle max-w-xs overflow-hidden text-ellipsis" style={{ verticalAlign: 'middle', maxWidth: '16rem' }} title={commit.message}>{commit.message}</span>
                  </li>
                ))}
              </ul>
              {commits.length > 2 && (
                <button
                  className="mt-1 text-foreground underline text-xs focus:outline-none"
                  onClick={() =>
                    setExpandedCommits((prev: any) => ({
                      ...prev,
                      [activity.id]: !isExpanded,
                    }))
                  }
                >
                  {isExpanded ? `Show less` : `Show ${commits.length - 2} more`}
                </button>
              )}
            </div>
          );
        }
        return null;
      case 'PullRequestEvent':
        if (pullRequest) {
          return (
            <div className="mt-2 bg-foreground/10 rounded p-2">
              <div className="font-semibold text-xs mb-1 text-foreground/70">Pull Request:</div>
              <div className="text-xs text-foreground/80">
                <a href={pullRequest.html_url} target="_blank" rel="noopener noreferrer" className="underline">
                  {pullRequest.title}
                </a>
              </div>
            </div>
          );
        }
        return null;
      case 'IssuesEvent':
        if (issue) {
          return (
            <div className="mt-2 bg-foreground/10 rounded p-2">
              <div className="font-semibold text-xs mb-1 text-foreground/70">Issue:</div>
              <div className="text-xs text-foreground/80">
                <a href={issue.html_url} target="_blank" rel="noopener noreferrer" className="underline">
                  {issue.title}
                </a>
              </div>
            </div>
          );
        }
        return null;
      case 'ForkEvent':
        if (forkee) {
          return (
            <div className="mt-2 bg-foreground/10 rounded p-2">
              <div className="font-semibold text-xs mb-1 text-foreground/70">Forked to:</div>
              <div className="text-xs text-foreground/80">
                <a href={forkee.html_url} target="_blank" rel="noopener noreferrer" className="underline">
                  {forkee.full_name}
                </a>
              </div>
            </div>
          );
        }
        return null;
      case 'ReleaseEvent':
        if (release) {
          return (
            <div className="mt-2 bg-foreground/10 rounded p-2">
              <div className="font-semibold text-xs mb-1 text-foreground/70">Release:</div>
              <div className="text-xs text-foreground/80">
                <a href={release.html_url} target="_blank" rel="noopener noreferrer" className="underline">
                  {release.name || release.tag_name}
                </a>
              </div>
            </div>
          );
        }
        return null;
      case 'CommitCommentEvent':
        if (comment) {
          return (
            <div className="mt-2 bg-foreground/10 rounded p-2">
              <div className="font-semibold text-xs mb-1 text-foreground/70">Commit Comment:</div>
              <div className="text-xs text-foreground/80">
                <a href={comment.html_url} target="_blank" rel="noopener noreferrer" className="underline">
                  <span className="block max-w-xs truncate" title={comment.body}>{comment.body}</span>
                </a>
              </div>
            </div>
          );
        }
        return null;
      case 'IssueCommentEvent':
        if (issueComment) {
          return (
            <div className="mt-2 bg-foreground/10 rounded p-2">
              <div className="font-semibold text-xs mb-1 text-foreground/70">Issue Comment:</div>
              <div className="text-xs text-foreground/80">
                <a href={issueComment.html_url} target="_blank" rel="noopener noreferrer" className="underline">
                  <span className="block max-w-xs truncate" title={issueComment.body}>{issueComment.body}</span>
                </a>
              </div>
            </div>
          );
        }
        return null;
      case 'PullRequestReviewEvent':
        if (prReview) {
          return (
            <div className="mt-2 bg-foreground/10 rounded p-2">
              <div className="font-semibold text-xs mb-1 text-foreground/70">Pull Request Review:</div>
              <div className="text-xs text-foreground/80">
                <a href={prReview.html_url} target="_blank" rel="noopener noreferrer" className="underline">
                  <span className="block max-w-xs truncate" title={prReview.body}>{prReview.body}</span>
                </a>
              </div>
            </div>
          );
        }
        return null;
      case 'PullRequestReviewCommentEvent':
        if (prReviewComment) {
          return (
            <div className="mt-2 bg-foreground/10 rounded p-2">
              <div className="font-semibold text-xs mb-1 text-foreground/70">PR Review Comment:</div>
              <div className="text-xs text-foreground/80">
                <a href={prReviewComment.html_url} target="_blank" rel="noopener noreferrer" className="underline">
                  <span className="block max-w-xs truncate" title={prReviewComment.body}>{prReviewComment.body}</span>
                </a>
              </div>
            </div>
          );
        }
        return null;
      case 'GollumEvent':
        if (gollumPages && Array.isArray(gollumPages)) {
          return (
            <div className="mt-2 bg-foreground/10 rounded p-2">
              <div className="font-semibold text-xs mb-1 text-foreground/70">Wiki Pages:</div>
              <ul className="list-disc list-inside text-xs text-foreground/80">
                {gollumPages.map((page: Record<string, any>, idx: number): React.ReactElement | null => {
                  const htmlUrl = typeof page.html_url === 'string' ? page.html_url : undefined;
                  const title = typeof page.title === 'string' ? page.title : undefined;
                  const sha = typeof page.sha === 'string' ? page.sha : undefined;
                  if (htmlUrl || title) {
                    return (
                      <li key={sha || htmlUrl || title || idx}>
                        {htmlUrl ? (
                          <a href={htmlUrl} target="_blank" rel="noopener noreferrer" className="underline">
                            {title ?? htmlUrl}
                          </a>
                        ) : (
                          <span>{title ?? 'Wiki Page'}</span>
                        )}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          );
        }
        return null;
      case 'MemberEvent':
        if (member) {
          return (
            <div className="mt-2 bg-foreground/10 rounded p-2">
              <div className="font-semibold text-xs mb-1 text-foreground/70">New Member:</div>
              <div className="text-xs text-foreground/80">
                {typeof member.html_url === 'string' ? (
                  <a href={member.html_url} target="_blank" rel="noopener noreferrer" className="underline">
                    {member.login ?? member.html_url}
                  </a>
                ) : (
                  <span>{member.login ?? 'Member'}</span>
                )}
              </div>
            </div>
          );
        }
        return null;
      default:
        return null;
    }
  }

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
              {visibleActivities.map((activity) => {
                // Refactored type guards for payload
                const {
                  commits = [],
                  pull_request: pullRequest,
                  issue,
                  forkee,
                  release,
                  comment,
                  review,
                  pages,
                  member,
                } = activity.payload || {};
                const isPushEvent = activity.type === 'PushEvent' && Array.isArray(commits);
                const isPullRequestEvent = activity.type === 'PullRequestEvent' && pullRequest;
                const isIssuesEvent = activity.type === 'IssuesEvent' && issue;
                const isForkEvent = activity.type === 'ForkEvent' && forkee;
                const isReleaseEvent = activity.type === 'ReleaseEvent' && release;
                const isCommitCommentEvent = activity.type === 'CommitCommentEvent' && comment;
                const isIssueCommentEvent = activity.type === 'IssueCommentEvent' && comment;
                const isPullRequestReviewEvent = activity.type === 'PullRequestReviewEvent' && review;
                const isPullRequestReviewCommentEvent = activity.type === 'PullRequestReviewCommentEvent' && comment;
                const isGollumEvent = activity.type === 'GollumEvent' && Array.isArray(pages);
                const isMemberEvent = activity.type === 'MemberEvent' && member;
                const issueComment = isIssueCommentEvent ? (comment as { html_url?: string; body?: string }) : undefined;
                const prReview = isPullRequestReviewEvent ? (review as { html_url?: string; body?: string }) : undefined;
                const prReviewComment = isPullRequestReviewCommentEvent ? (comment as { html_url?: string; body?: string }) : undefined;
                const gollumPages = isGollumEvent ? (pages as Array<Record<string, any>>) : undefined;
                return (
                  <div
                    key={activity.id}
                    className="flex gap-4 border border-foreground/20 p-4 transition-all duration-300 mb-2"
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
                        <span className="text-foreground/50">
                          {getActivityDescription(activity.type, activity.payload)}
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
                      {/* Render activity details using helper */}
                      {renderActivityDetails(activity, {
                        commits,
                        pullRequest,
                        issue,
                        forkee,
                        release,
                        comment,
                        issueComment,
                        prReview,
                        prReviewComment,
                        gollumPages,
                        member,
                        expandedCommits,
                        setExpandedCommits,
                      })}
                    </div>
                  </div>
                );
              })}
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
