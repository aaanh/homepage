import getExperiences from "@/data/experiences";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SectionHeader from "./section-header";

export default function Experience() {
  const experiences = getExperiences();

  return (
    <section className="flex flex-col gap-4 p-2">
      <SectionHeader title="Experiences" />
      <div className="flex flex-wrap justify-between gap-4">
        {experiences.map((exp, idx) => (
          <Card className="w-[300px]" key={exp.organization + "-" + idx}>
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
    </section>
  );
}
