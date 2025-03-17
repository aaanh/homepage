"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import getProjects from "@/data/projects";
import SectionHeader from "./section-header";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoscroll from "embla-carousel-auto-scroll";

export default function Project() {
  const projects = getProjects();
  const router = useRouter();

  return (
    <section className="flex flex-col gap-4 p-2">
      <SectionHeader title="Personal Projects" />

      <Carousel plugins={[Autoscroll()]} opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {projects.map((project, idx) => (
            <CarouselItem
              className="lg:basis-1/4 basis-1/2"
              key={project.title + "-" + idx}
            >
              <Card
                className="hover:bg-accent/50 border-none rounded-none w-[350px] min-h-56 transition-all ease-in-out hover:cursor-pointer"
                onClick={() => router.push(project.link_ref ?? "#")}
              >
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{project.stack}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
