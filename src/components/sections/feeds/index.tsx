"use client";

import { ReactNode, useState } from "react";
import SectionHeader from "../common/section-header";
import { GithubFeed } from "./containers/github-feed";
import { Button } from "@/components/ui/button";
import BlogFeed from "./containers/blog-feed";
import PhotoFeed from "./containers/photo-feed";
import { cn } from "@/lib/utils";

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
    <section className="py-12 min-h-screen">
      <div className="">
        <div className="text-center mb-2">
          <SectionHeader 
            title="Social Activities" 
            className="text-3xl md:text-4xl font-bold"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-2">
          {feeds.map((feed) => (
            <Button
              onClick={() => setCurrentFeed(feed)}
              key={feed.source + "-activity"}
              className={cn(`px-6 py-3 min-w-32 transition-all duration-200 ease-in-out transform hover:scale-105 font-bold rounded-none`, 
                currentFeed.source === feed.source 
                  ? "bg-accent text-white shadow-lg hover:bg-accent" 
                  : "bg-background text-foreground hover:bg-accent"
              )}
            >
              {feed.source}
            </Button>
          ))}
        </div>

        <div className="shadow-lg transition-all duration-300 hover:shadow-xl bg-background">
          {feeds.map((feed) =>
            currentFeed.source === feed.source ? feed.component : null
          )}
        </div>
      </div>
    </section>
  );
}
