import getExperiences from "@/data/experiences";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function Experience() {
  const experiences = getExperiences();

  return (
    <section className="flex flex-col gap-4 p-2">
      <h2
        className="bg-background/75 backdrop-blur-lg p-2 border dark:border-white border-black w-full font-mono text-4xl"
        id="experiences"
      >
        {"// Experiences"}
      </h2>
      <div className="flex flex-wrap justify-between gap-4">
        {experiences.map((exp, idx) => (
          <Card
            className="dark:border-accent/70 border-black w-[300px]"
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
    </section>
  );
}
