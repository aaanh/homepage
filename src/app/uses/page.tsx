"use client";

import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

const setups = [
  { key: 0, url: "/setup/desk_2022.png", title: "Desktop" },
  { key: 1, url: "/setup/macbook.png", title: "Macbook" },
  { key: 2, url: "/setup/framework.png", title: "Laptop 1" },
  { key: 3, url: "/setup/dell-win.png", title: "Laptop 2" },
  { key: 4, url: "/setup/server.png", title: "Server" },
];

function HardwareTabs({ showSetup, setShowSetup }: any) {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {setups?.map((setup, idx) => (
          <Button
            key={idx}
            onClick={() => setShowSetup(setup.title)}
            variant={setup.title == showSetup ? "secondary" : "ghost"}
          >
            <h2 className="text-xl">{setup?.title}</h2>
          </Button>
        ))}
      </div>
      <div className="my-2">
        {setups.map((setup, idx) => (
          <div key={idx}>
            {setup?.title == showSetup ? (
              <img className="w-[800px]" src={setup.url}></img>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}

export default function Uses() {
  const [showSetup, setShowSetup] = useState("Desktop");

  const router = useRouter();

  return (
    <div className="bg-neutral-900">
      <div className="mx-auto p-4 text-neutral-100 container">
        <div className="flex items-center gap-1 text-lg">
          <Button
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
            variant={"ghost"}
          >
            <HomeIcon />
          </Button>
          <span>{"/uses"}</span>
        </div>
        <div>
          <h2 className="my-4 text-3xl">Computing</h2>
          <HardwareTabs
            showSetup={showSetup}
            setShowSetup={setShowSetup}
          ></HardwareTabs>
        </div>
        <div>
          <h2 className="my-4 text-3xl">Mobile</h2>
          <img
            src="/setup/mobile.png"
            className="bg-neutral-900/90 dark:bg-transparent rounded-md max-w-screen md:max-w-screen md:max-h-[400px]"
          ></img>
        </div>
        <div>
          <h2 className="my-4 text-3xl">Infrastructure Operations</h2>
          <img
            src="/setup/homelab.png"
            className="bg-neutral-900/90 dark:bg-transparent rounded-md max-w-screen md:max-w-screen md:max-h-[500px]"
          ></img>
        </div>
        <div>
          <h2 className="my-4 text-3xl">Bonus I: Books</h2>
          <ul>
            <li>
              System Design Interview by Alex Xu &amp; Sahn Lam &mdash;
              Completed.
            </li>
            <li>
              Designing Data-Intensive Applications by Martin Kleppmann &mdash;
              Completed.
            </li>
            <li>
              Site Reliability Engineering by Beyer, Jones, Petoff, Murphy
              &mdash; Completed.
            </li>
            <li>DSA Analysis by Clifford A. Shaffer &mdash; Completed.</li>
            <li>
              Pattern Recognition and ML by Christopher M. Bishop &mdash;
              Reading.
            </li>
            <li>Head First Design Patterns by Eric Freeman &mdash; to read</li>
            <li>Linux Kernel Development by Robert Love &mdash; to read</li>
          </ul>
        </div>
        <div>
          <h2 className="my-4 text-3xl">Bonus II: Music</h2>
          <br />
          <iframe
            style={{ borderRadius: "12px", maxWidth: "660px" }}
            src="https://open.spotify.com/embed/playlist/6p1R5pLVlAvxr5gn0ixUHU?utm_source=generator"
            width="100%"
            height="450"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
