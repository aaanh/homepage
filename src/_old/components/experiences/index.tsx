import getExperiences from "@/data/experiences";
import Container from "../container";
import ContentCard from "../content-card";
import GlowText from "../glow-text";
import { LucideBriefcaseBusiness } from "lucide-react";
import Image from "next/image";

export default function Experiences() {
  const experiences = getExperiences();

  return (
    <Container id="experiences" className="lg:grid-cols-4">
      <ContentCard className="text-4xl lg:col-span-2 lg:row-span-2">
        <LucideBriefcaseBusiness />
        &nbsp;
        <GlowText text="Experiences" />
      </ContentCard>

      {experiences.map((exp, idx) => (
        <ContentCard
          key={`experience-${idx}`}
          className="grid grid-cols-[1fr_2fr_1fr] gap-2"
        >
          <a href={exp.link} className="relative h-14 w-28">
            <Image
              className="object-contain bg-foreground text-background dark:bg-transparent transition-all ease-in-out p-2 rounded hover:bg-black/20"
              src={`/logos/${exp.organization}.png`}
              fill={true}
              alt={exp.organization}
            ></Image>
          </a>
          <div className="text-center">
            <p>{exp.role}</p>
            <p className="text-muted-foreground text-sm">{exp.type}</p>
          </div>
          <div className="text-center">{exp.startYear}</div>
        </ContentCard>
      ))}
    </Container>
  );
}
