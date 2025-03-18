"use client";

import getProjects from "@/data/projects";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";
import Autoscroll from "embla-carousel-auto-scroll";
import { useState, useEffect } from "react";

export default function ProjectCarousel() {
  const projects = getProjects();
  const router = useRouter();

  return (
    <div className="relative">
      <Carousel
        plugins={[
          Autoscroll({
            speed: 1.5,
            stopOnInteraction: false,
          }),
        ]}
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {projects.map((project, idx) => (
            <CarouselItem
              className="lg:basis-1/2 xl:basis-1/4"
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
    </div>
  );
}
