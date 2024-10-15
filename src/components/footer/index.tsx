"use client";

import { getSpotifyStatus } from "@/app/(home)/actions";
import Container from "../container";
import ContentCard from "../content-card";
import GlowText from "../glow-text";
import { Button } from "../ui/button";
import Link from "next/link";
import getConfig from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();
  const config = getConfig();

  return (
    <Container className="md:grid-cols-1">
      <ContentCard className="grid grid-cols-3">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center space-x-2">
            <span>&copy; {year}</span>
            <GlowText text="Anh Hoang Nguyen" />
          </div>
          <div>
            <p>
              Homepage &mdash;{" "}
              <Link href={config.owner.repository} className="link">
                Version 6.0.1
              </Link>
            </p>
          </div>
        </div>
        <div className="p-2 h-full text-primary/50 text-sm">
          <p className="text-primary">Links</p>
          <ul>
            <li>
              <a href="/resume">Resume</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* <div className="p-2 h-full">
          <ul>
            <li>
              <a href="/terms">Finished products</a>
            </li>
          </ul>
        </div> */}
      </ContentCard>
    </Container>
  );
}
