import getExperiences from "@/data/experiences";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SectionHeader from "./common/section-header";
import SectionContainer from "./common/section-container";
import { Badge } from "../ui/badge";

export default function Experience() {
  const experiences = getExperiences();

  return (
    <SectionContainer>
      <SectionHeader title="Experiences" />
      <div className="gap-4 grid md:grid-cols-3 xl:grid-cols-4">
        {experiences.map((exp, idx) => (
          <Card
            className="relative dark:border-foreground/20 first:border-accent first:dark:border-accent rounded w-full"
            key={exp.organization + "-" + idx}
          >
            {idx === 0 ? <Badge className="top-2 right-2 absolute">Current</Badge> : null}
            <CardHeader>
              <CardTitle className="text-2xl">{exp.organization}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-accent">{exp.role}</p>
              <p className="text-muted-foreground">{exp.type}</p>
              <p>
                {exp.startYear} - {exp.endYear === 0 ? "Now" : exp.endYear}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
