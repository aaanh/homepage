"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import getProjects from "@/data/projects";
import SectionHeader from "./section-header";

export default function Project() {
  const projects = getProjects();
  const router = useRouter();

  return (
    <section className="flex flex-col gap-4 p-2">
      <SectionHeader title="Personal Projects" />
      <div className="flex flex-wrap justify-between gap-4">
        {projects.map((project, idx) => (
          <Card
            key={project.title + "-" + idx}
            className="hover:bg-accent/50 border-none rounded-none w-[350px] transition-all ease-in-out hover:cursor-pointer"
            onClick={() => router.push(project.link_ref ?? "#")}
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.stack}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
