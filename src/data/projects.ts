import { z } from "zod";
import { ProjectSchema } from "./commons";

export default function getProjects() {
  const projects = [
    {
      title: "Tailflare UI",
      description: "Web-based GUI version of Tailflare",
      link_ref: "https://tailflare.aaanh.app",
      screenshot: "",
      stack: "Nextjs, TypeScript, Shadcn UI, Tailwindcss",
    },
    {
      title: "Tailflare",
      description: "Syncing hostnames between Tailscale and Cloudflare",
      link_ref: "https://pkg.go.dev/github.com/aaanh/tailflare",
      screenshot: "",
      stack: "Golang",
    },
    {
      title: "Reroll.ing",
      description: "Full-stack gacha (FGO) simulator",
      link_ref: "https://reroll.ing",
      screenshot: "",
      stack:
        "Nextjs (Frontend), Golang Gin (API server), Python (DataOps), SQLite3, Nginx (Reverse proxy), Cloudflare (DNS, network cache)",
    },
    {
      title: "Simple HTTP server in Rust",
      description: "",
      link_ref: "https://github.com/aaanh/http-rs",
      screenshot: "",
      stack: "Rust, TCP",
    },
    {
      title: "Wake on LAN (WoL) in Rust",
      description: "",
      link_ref: "https://github.com/aaanh/wol-rs",
      screenshot: "",
      stack: "Rust, TCP",
    },

    {
      title: "vsce-artoria-theme",
      description:
        "VSCode themes that follow the color palettes of Fate saberfaces and others.",
      link_ref:
        "https://marketplace.visualstudio.com/items?itemName=aaanh.artoria-theme",
      screenshot: "",
      stack: "Visual Studio Code extension",
    },
    {
      title: "Personal URL Shortener",
      description:
        "Lightweight service worker for shortening and redirecting URLs",
      link_ref: "https://anh.to",
      screenshot: "",
      stack: "Cloudflare Workers, Cloudflare KV store, good 'ol JavaScript",
    },
    {
      title: "GPT Playground",
      description:
        "Proof of Concept for chat interface connected to the OpenAI API.",
      link_ref: "https://gpt.aaanh.app",
      screenshot: "",
      stack:
        "Nextjs, Tailwindcss, DaisyUI, FluentUI, API, middleware, Vercel Edge, Infrastructures, Networking.",
    },
    {
      title: "Script Convenience Store",
      description:
        "Scripts that you used before but don't remember how to use.",
      link_ref: "https://script.aaanh.app",
      screenshot: "",
      stack: "Rust::mdbook, CI with GitHub Actions, CD with Vercel.",
    },

    {
      title: "GCES Concordia Homepage",
      description:
        "Redesign and develop the GCES student organization website. Integrate CMS and content database. Improve SEO. Set up CI/CD pipeline.",
      link_ref: "https://gcesconcordia.com",
      screenshot: "",
      stack:
        "Nextjs 13+, Tailwindcss, DaisyUI, edge functions, supabase, sanity CMS, Cloudflare, Github Actions",
    },
    {
      title: "My Photo Reel",
      description: "Select photographic memoirs",
      link_ref: "https://photos.aaanh.ca",
      screenshot: "",
      stack: "Nextjs, Tailwindcss, Cloudinary DAM + API, Cloudflare CDN",
    },
    {
      title: "Concordia University Speed HPC Manual",
      description:
        "Develop Latex to HTML build pipeline. Create devcontainer environment for authoring LaTeX and GitHub Actions pipeline.",
      stack: "LaTeX, Docker, Github Actions, devcontainer, Makefile",
      screenshot: "",
      link_ref: "https://nag-devops.github.io/speed-hpc/",
    },
    {
      title: "Data Parse and Traversal, OOP Final Project",
      description: "Academic project",
      screenshot: "/projects/coen244-demo.png",
      stack: "C++, python, pandas",
      link_ref: "https://github.com/aaanh/meaningful-graph-traversal",
    },
    {
      title: "Inertial Sensing Lab Teaching Site",
      description: "FRQNT-funded project",
      screenshot: "",
      stack: "Nextjs, Cloudflare Workers, Sanity CMS",
      link_ref: "https://islab.ca",
    },
    {
      title: "MRCA Simulation",
      description: "Academic project",
      screenshot:
        "https://raw.githubusercontent.com/aaanh/mrca-sim-r/master/results/tmrca.png",
      stack: "R, matplotlib",
      link_ref: "https://github.com/aaanh/mrca-sim-r",
    },
  ];

  const { data, error } = z.array(ProjectSchema).safeParse(projects);

  if (error) {
    throw new Error("Invalid projects. Unable to parse data: ", error);
  }

  return data;
}
