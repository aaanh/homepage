"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import getProjects from "@/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Project() {
  const projects = getProjects();
  const router = useRouter();

  return (
    <section className="flex flex-col gap-4 p-2">
      <h2
        className="bg-background/75 backdrop-blur-lg p-2 border dark:border-white border-black w-fit font-mono text-4xl"
        id="personal-projects"
      >
        {"// Personal Projects"}
      </h2>
      <div className="flex flex-wrap gap-4">
        {projects.map((project, idx) => (
          <Card
            key={project.title + "-" + idx}
            className="hover:bg-accent/50 dark:border-accent/75 border-black rounded-none w-[350px] transition-all ease-in-out hover:cursor-pointer"
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
