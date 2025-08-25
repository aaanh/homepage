# <https://aaanh.com>

Project is completed, in production, and continuously integrated.

## Stacks (latest iteration)

- [Next.js](https://nextjs.org)
- [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
- [TailwindCSS](https://tailwindcss.com)
- [Shadcn](https://ui.shadcn.com/)

## CI and hosting

- [Vercel](https://vercel.com)

## Networking

- Cloudflare DNS
- Cloudflare SSL

### Environment variables

```conf
APPLE_MUSIC_ENDPOINT_KEY=""
DEST_EMAIL=""
GENIUS_ACCESS_TOKEN=""
KV_REST_API_TOKEN=""
KV_REST_API_URL=""
NEXT_PUBLIC_BLOG_RSS_FEED_URL=""
NEXT_PUBLIC_GOOGLE_SSO_CLIENT_ID=""
NEXT_PUBLIC_MSFT_SSO_AUTHORITY=""
NEXT_PUBLIC_MSFT_SSO_CLIENT_ID=""
REPOSITORY_BRANCH=""
RESEND_API_KEY=""
SPOTIFY_CLIENT_ID=""
SPOTIFY_CLIENT_SECRET=""
SPOTIFY_REFRESH_TOKEN=""

```

### Commands to get up and running

- All

```
npm i -g pnpm
```

- Windows

```powershell
git clone https://github.com/aaanh/homepage; cd homepage; pnpm install; pnpm dev
```

- Linux, macOS

```sh
git clone https://github.com/aaanh/homepage && cd homepage && pnpm install && pnpm dev
```

## Deployment

### PaaS/SaaS

I recommend using Vercel but if you're averse to vendor lock-in, Github Pages should be fine.

Note: I currently am not maintaining a Dockerfile for this project version, but will probably in the future.

### Bare-metal/IaaS

> Assuming you are deploying on a Linux-based server

- Install pre-requisites, clone, install dependencies
- Build: `pnpm build`
- Serve: `pnpm start`
- Install `nginx` for reverse proxy, run with `systemctl enable --now nginx` on systemd distros.
- Install `ufw` for firewall management, run with `sudo ufw enable`, configure to allow port 80 and 443 `sudo ufw allow http && sudo ufw allow https`.
- Configure `nginx` to route your ports 80 and 443 to internal port `3000`, which is the default port that `Nextjs` serves.

## Major Version Deployments

- Production: https://aaanh.com
- v6: https://v6.aaanh.com
- v5: https://v5.aaanh.com
- v4: https://v4.aaanh.com
- v3: https://v3.aaanh.com
- v2: https://v2.aaanh.com

## How to connect Spotify API (Only applied to v2, v3, v6)

- You'll need to create a Spotify Developer Application <https://developer.spotify.com/dashboard/>
- You will need to get the various keys/SECRETS (pictured below). Recommended tutorial to do so: <https://dev.to/theodorusclarence/how-to-show-now-playing-in-spotify-with-next-js-15h5>

<img width="304" alt="Screen Shot 2022-06-17 at 1 32 16 PM" src="https://user-images.githubusercontent.com/37283437/174349215-4c23ba9e-8dde-46c6-a079-b30fa4434f88.png">
