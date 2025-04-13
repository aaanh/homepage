export type GithubActivityType =
  | "PushEvent"
  | "DeleteEvent"
  | "WatchEvent"
  | "CreateEvent"
  | string;

export type GithubActivity = {
  id: string;
  type: string;
  actor: {
    id: string;
    login: string;
    display_login: string;
    gravatar_id?: string;
    url: string;
    avatar_url: string;
  };
  repo: {
    id: string;
    name: string;
    url: string;
  };
  public: boolean;
  created_at: string;
};

export type Post = {
  title: string;
  link: string;
  guid: string;
  isPermaLink: boolean;
  description: string;
  pubDate: string;
};
