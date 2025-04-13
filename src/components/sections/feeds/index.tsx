"use client";

import { ReactNode, useState } from "react";
import SectionHeader from "../common/section-header";
import { GithubFeed } from "./containers/github-feed";
import { Button } from "@/components/ui/button";
import BlogFeed from "./containers/blog-feed";
import PhotoFeed from "./containers/photo-feed";

export default function FeedContainer() {
  const feeds = [
    {
      source: "Github",
      component: <GithubFeed key="github-activity" />,
    },
    {
      source: "Blog",
      component: <BlogFeed key="blog-feed" />,
    },
    {
      source: "Photos",
      component: <PhotoFeed key="photo-feed" />,
    },
  ];

  const [currentFeed, setCurrentFeed] = useState(feeds[0]);

  return (
    <section className="space-y-6 p-2 px-4">
      <div className="flex flex-col justify-center gap-4">
        <SectionHeader title="Social Activities" />
        <div className="flex flex-wrap gap-4">
          {feeds.map((feed) => (
            <Button
              onClick={() => setCurrentFeed(feed)}
              key={feed.source + "-activity"}
              className="min-w-32 hover:cursor-pointer"
              variant={
                currentFeed.source === feed.source ? "default" : "outline"
              }
            >
              {feed.source}
            </Button>
          ))}
        </div>

        {feeds.map((feed) =>
          currentFeed.source === feed.source ? feed.component : null
        )}
      </div>
    </section>
  );
}
