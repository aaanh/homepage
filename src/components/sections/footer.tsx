import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Badge } from "../ui/badge";

export default async function Footer() {
  const latestCommitHash = (
    await (
      await fetch("https://api.github.com/repos/aaanh/homepage/commits", {
        headers: {
          Accept: "application/vnd.github+json",
          "X-Github-Api-Version": "2022-11-28",
        },
        next: {
          revalidate: 3600, // Cache for 1 hour
        },
      })
    ).json()
  )[0].sha.slice(0, 8);

  return (
    <footer className="bg-card p-8 pt-24 w-full min-h-screen lg:min-h-[60vh]">
      <div className="gap-4 grid lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] mx-auto container">
        <div className="gap-2 grid">
          <div className="flex items-center gap-2 bg-black shadow px-4 py-2 border dark:border-neutral-700 rounded-lg w-fit text-white">
            <Image
              src="/logos/aaanh.png"
              width={50}
              height={50}
              alt="aaanh's logo"
            />
            <span className="text-4xl">AAANH</span>
          </div>
          <p>&copy; 2025 Anh Hoang Nguyen</p>
          <p>AAANH Corporation</p>
          <p>All Rights Reserved</p>
        </div>
        <div>
          <p className="font-light text-sm uppercase">On this site</p>
          <ul>
            <li>
              <a href="https://aaanh.com">Homepage</a>
            </li>
            <li>
              <a href="#experiences">Experiences</a>
            </li>
            <li>
              <a href="#personal-projects">Personal Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <Link href="/Anh_Hoang_Nguyen_Resume.pdf" target="_blank">
                Resume/CV
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-light text-sm uppercase">Socials</p>
          <ul>
            <li>
              <a href="https://github.com/aaanh" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/aaanh" target="_blank">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://instagram.com/aaanhnya" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-light text-sm uppercase">Canonical sites</p>
          <ul>
            <li>
              <a href="https://tailflare.aaanh.app" target="_blank">
                Tailflare
              </a>
            </li>
            <li>
              <a href="https://script.aaanh.app" target="_blank">
                Script Convenience Store
              </a>
            </li>
            <li>
              <a href="https://reroll.ing" target="_blank">
                FGO Simulator
              </a>
            </li>
            <li>
              <a href="https://blog.aaanh.com" target="_blank">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-light text-sm uppercase">Site metadata</p>
          <ul>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  Version 7.0.0 <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Previous Versions</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <a href="https://v6.aaanh.com" target="_blank">
                      Version 6
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://v5.aaanh.com" target="_blank">
                      Version 5
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://v4.aaanh.com" target="_blank">
                      Version 4
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://v3.aaanh.com" target="_blank">
                      Version 3
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://v2.aaanh.com" target="_blank">
                      Version 2
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              Latest commit hash:{" "}
              <a
                href={`https://github.com/aaanh/homepage/commit/${latestCommitHash}`}
                target="_blank"
                className="hover:no-underline"
              >
                <Badge className="hover:bg-primary font-mono">
                  {latestCommitHash}
                </Badge>
              </a>
            </li>
            <li>
              Look and feel inspired by Nothing &amp; Palantir
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
