import Link from "next/link";
import Container from "../container";
import ContentCard from "../content-card";
import getConfig from "@/lib/config";
import { FaGithub, FaGlobe, FaInstagram, FaLinkedin } from "react-icons/fa";
import GlowText from "../glow-text";
import Image from "next/image";

export default function About() {
  const { owner } = getConfig();

  function calculateYearsBetweenDates(startDate: Date, endDate: Date): number {
    // Ensure endDate is after startDate
    if (endDate < startDate) {
      throw new Error("End date must be after start date");
    }

    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Account for leap years
    const diffInMilliseconds = endDate.getTime() - startDate.getTime();
    const years = diffInMilliseconds / millisecondsPerYear;

    return Math.floor(years); // Use Math.floor to get the whole number of years
  }

  const startDate = new Date("2022-01-01");
  const endDate = new Date();
  const years = calculateYearsBetweenDates(startDate, endDate);

  return (
    <Container className="lg:grid-cols-[0.5fr_1.5fr_1.5fr_0.5fr] grid-cols-2">
      <ContentCard>
        <div className="h-24 w-24 relative">
          <Image
            src="https://avatars.githubusercontent.com/u/37283437?v=4"
            fill={true}
            alt="avatar"
            className="object-contain rounded-full shadow-lg border border-foreground p-2"
          ></Image>
        </div>
      </ContentCard>
      <ContentCard>
        <GlowText className="2xl:text-6xl text-2xl" text={"Anh Hoang Nguyen"} />
      </ContentCard>
      <ContentCard className="text-center flex-col">
        <h2 className="text-2xl lg:text-4xl">Software Developer</h2>
        <p className="text-yellow-500">{years} years of experience</p>
      </ContentCard>
      <Container className="grid grid-cols-2">
        <Link href={owner.github}>
          <ContentCard className="space-x-2 text-4xl">
            <FaGithub />
          </ContentCard>
        </Link>
        <Link href={owner.linkedin} className="text-blue-400">
          <ContentCard className="space-x-2 text-4xl">
            <FaLinkedin />
          </ContentCard>
        </Link>
        <Link href={owner.homepage} className="text-green-500">
          <ContentCard className="space-x-2 text-4xl">
            <FaGlobe />
          </ContentCard>
        </Link>
        <Link href={owner.instagram} className="text-pink-500">
          <ContentCard className="space-x-2 text-4xl">
            <FaInstagram />
          </ContentCard>
        </Link>
      </Container>
    </Container>
  );
}
