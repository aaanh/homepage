# <https://aaanh.com>

Project is completed, in production, and continuously integrated.

## USAGE - WEB CLIENT PROJECT

There are 2 quick start scripts to get the project up and running for demo:

Assuming you're in the project root

- Windows: `start.bat`, execute in CLI with `start.bat`,
- Linux: `start.sh`, execute in CLI with `bash start.sh`

Please simply execute the relevant script according to your operating system.

## Site metadata configurations

- src/lib/config.ts, which can be loaded from `getConfig()`

## Stacks (latest iteration)

- [Nextjs](https://nextjs.org) with TypeScript
- [TailwindCSS](https://tailwindcss.com)
- [Shadcn](https://ui.shadcn.com/)

## CI and hosting

- [Vercel](https://vercel.com)

## Networking

- Cloudflare DNS
- Cloudflare SSL

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
- Build: `yarn build`
- Serve: `yarn start`
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
