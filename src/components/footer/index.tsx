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
      <ContentCard className="flex flex-col">
        <div className="flex items-center justify-center space-x-2">
          <span>&copy; {year}</span>
          <GlowText text="Anh Hoang Nguyen" />
        </div>
        <div>
          <p>
            Homepage &mdash;{" "}
            <Link href={config.owner.repository} className="link">
              Version 6.1.0
            </Link>
          </p>
        </div>
      </ContentCard>
    </Container>
  );
}
