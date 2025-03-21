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

export default function Experience() {
  const experiences = getExperiences();

  return (
    <SectionContainer>
      <SectionHeader title="Experiences" />
      <div className="gap-4 grid md:grid-cols-3 xl:grid-cols-4">
        {experiences.map((exp, idx) => (
          <Card
            className="dark:border-foreground/20 rounded w-full"
            key={exp.organization + "-" + idx}
          >
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
