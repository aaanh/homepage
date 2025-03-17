import Container from "../container";
import ContentCard from "../content-card";
import GlowText from "../glow-text";
import { LucideActivity } from "lucide-react";
import Image from "next/image";
import getProjects from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  const projects = getProjects();

  return (
    <Container id="projects" className="lg:grid-cols-4">
      <ContentCard className="text-4xl lg:col-span-2">
        <LucideActivity />
        &nbsp;
        <GlowText text="Projects" />
      </ContentCard>

      {projects.map((p) => (
        <Link key={p.title} href={p.link_ref ?? ""}>
          <ContentCard className="grid grid-rows-[3rem_1fr_1fr] min-h-60 text-center items-start gap-2">
            <h3 className="text-xl">{p.title}</h3>
            <p className="text-muted-foreground">{p.description}</p>
            <p className="text-sm text-accent/80">{p.stack}</p>
          </ContentCard>
        </Link>
      ))}
    </Container>
  );
}
