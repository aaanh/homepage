"use client";

import { getSpotifyStatus } from "@/_old/app/(home)/actions";
import Container from "../container";
import ContentCard from "../content-card";
import GlowText from "../glow-text";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import getConfig from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();
  const config = getConfig();

  return (
    <Container className="md:grid-cols-1">
      <ContentCard className="flex flex-col">
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
      </ContentCard>
    </Container>
  );
}
