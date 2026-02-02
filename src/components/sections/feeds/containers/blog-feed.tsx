import { env } from "@/env/client";
import { Post } from "@/lib/types";
import { useEffect, useState } from "react";
import xml2js from "xml2js";

function limitDescription(desc: string) {
  const words = desc.split(/\s+/);
  return words.length <= 20 ? desc : words.slice(0, 20).join(" ") + "...";
}

export default function BlogFeed() {
  const rssUrl = env.NEXT_PUBLIC_BLOG_RSS_FEED_URL;
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getFeed() {
    const res = await (await fetch(rssUrl)).text();
    console.log(res);
    const parser = new xml2js.Parser();
    const data = await parser.parseStringPromise(res);
    setPosts(data.rss.channel[0].item);
    setIsLoading(false);
  }

  useEffect(() => {
    getFeed();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[35vh]">
        <div className="border-gray-900 dark:border-white border-b-2 rounded-full w-8 h-8 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="gap-4 space-y-4 grid lg:grid-cols-2 p-4 border border-foreground max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-green-500">
        {posts.map((post: Post) => (
          <a
            href={post.link}
            className="bg-primary hover:bg-primary/75 p-2 min-h-28 text-background transition-all ease-in-out"
            key={post.title}
          >
            <p className="font-bold text-lg">{post.title}</p>
            <p>
              {post.description ? limitDescription(post.description[0]) : null}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
