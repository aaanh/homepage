# <https://aaanh.com>

Project is completed, in production, and continuously integrated.

## Stacks (latest iteration)

- [Nextjs](https://nextjs.org)
- [create-t3-app](https://github.com/t3-oss/create-t3-app)
- [TailwindCSS](https://tailwindcss.com)
- [Shadcn](https://ui.shadcn.com/)

## Experimental Features

- Single Sign On (SSO) demos:
  - Microsoft <https://aaanh.com/sso/msft> via App Registration on Entra
  - Google <https://aaanh.com/sso/google> via Google Cloud API & Services

## CI and hosting

- [Vercel](https://vercel.com)

## Networking

- Cloudflare DNS
- Cloudflare SSL

## Security

- Bot fight
- IP blacklisting
- DDoS protection

## How to run locally

- Software pre-requisites: nodejs, npm (comes with nodejs when installed on Windows), git
- Tool: I recommend using Visual Studio Code, or any vim distributions :D

### Commands to get up and running

- Windows

```
git clone https://github.com/aaanh/homepage; cd homepage; npm i; npm run dev
```

- Linux, macOS

```
git clone https://github.com/aaanh/homepage && cd homepage && npm i && npm run dev
```

## Deployment

### PaaS/SaaS

I recommend using Vercel but if you're averse to vendor lock-in, Github Pages should be fine.

Note: I currently am not maintaining a Dockerfile for this project version, but will probably in the future.

### Bare-metal/IaaS

> Assuming you are deploying on a Linux-based server

- Install pre-requisites, clone, install dependencies
- Build: `npm run build`
- Serve: `npm run start`
- Install `nginx` for reverse proxy, run with `systemctl enable --now nginx` on systemd distros.
- Install `ufw` for firewall management, run with `sudo ufw enable`, configure to allow port 80 and 443 `sudo ufw allow http && sudo ufw allow https`.
- Configure `nginx` to route your ports 80 and 443 to internal port `3000`, which is the default port that `Nextjs` serves.

## Major Version Deployments

- Production: https://aaanh.com (v4)
- v3: https://v3.aaanh.com
- v2: https://v2.aaanh.com

## How to connect Spotify API (Only applied to v2 and v3)

- You'll need to createa Spotify Developer Application <https://developer.spotify.com/dashboard/>
- You will need to get the various keys/SECRETS (pictured below). Recommended tutorial to do so: <https://dev.to/theodorusclarence/how-to-show-now-playing-in-spotify-with-next-js-15h5>

<img width="304" alt="Screen Shot 2022-06-17 at 1 32 16 PM" src="https://user-images.githubusercontent.com/37283437/174349215-4c23ba9e-8dde-46c6-a079-b30fa4434f88.png">
