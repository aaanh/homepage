"use client";

import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { getEducations } from "@/data/educations";
import SectionHeader from "./section-header";

export default function Education() {
  const educations = getEducations();
  const router = useRouter();

  const year = new Date().getFullYear();

  return (
    <section className="flex flex-col gap-4 p-2">
      <SectionHeader title="Education" />
      <div className="flex flex-wrap gap-4">
        {educations.map((ed, idx) => (
          <Card
            className="border-none rounded-none w-[350px] transition-all ease-in-out"
            key={ed.institution + "-" + idx}
          >
            <CardHeader>
              <CardTitle>{ed.field}</CardTitle>
              <CardDescription>{ed.institution}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                {ed.startYear} - {ed.endYear > year ? "Now" : ed.endYear}
              </p>
              <p>Status: {ed.status}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
