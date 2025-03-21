import { ChevronDown } from "lucide-react";
import { Typewriter } from "nextjs-simple-typewriter";
import Contact from "./contact";
import { cn } from "@/lib/utils";
import { ibmPlexSans } from "@/fonts";

export default function Hero() {
  const startDate = new Date("2022-01-01");
  const endDate = new Date();
  const years = calculateYearsBetweenDates(startDate, endDate);

  return (
    <section
      className={cn(
        ibmPlexSans.className,
        "z-20 relative flex flex-col justify-center items-center p-2 h-screen shadow"
      )}
    >
      <div className="justify-center gap-0 grid md:grid-cols-2 p-4 lg:p-0 w-full lg:w-fit">
        <div className="justify-center lg:justify-end items-center grid grid-rows-[1fr_1fr] bg-card/80 backdrop-blur p-4 lg:p-12 min-h-44 text-right">
          <h1 className="text-4xl lg:text-6xl">Anh Hoang Nguyen</h1>
          <p className="h-[2rem] font-mono lg:text-2xl">
            <Typewriter
              typeSpeed={25}
              loop={0}
              delaySpeed={1000}
              words={[
                "Software Developer",
                "Infrastructure Developer",
                "Solutions Architect",
              ]}
            />
          </p>
        </div>
        <div className="flex flex-col justify-center bg-foreground/80 backdrop-blur p-4 lg:p-12 min-h-44 text-background lg:text-left">
          <p className="text-lg lg:text-2xl">
            <b>{years}</b> years of experience
          </p>
          <p className="text-lg lg:text-2xl">
            <b>3</b>
            <sup>rd</sup> year student
          </p>
          <p className="text-lg lg:text-2xl">
            <b>3</b> internships
          </p>
          <p className="text-lg lg:text-2xl">
            <b>Multiple</b> succesful projects
          </p>
        </div>
      </div>
      <br />
      <Contact />

      <div className="bottom-4 absolute flex flex-col justify-center items-center backdrop-blur p-4 rounded-lg w-fit text-background dark:text-foreground text-2xl lg:text-4xl">
        <ChevronDown
          className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          size={32}
        />
        <p className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Scroll to learn more
        </p>
      </div>
    </section>
  );
}

function calculateYearsBetweenDates(startDate: Date, endDate: Date): number {
  // Ensure endDate is after startDate
  if (endDate < startDate) {
    throw new Error("End date must be after start date");
  }

  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Account for leap years
  const diffInMilliseconds = endDate.getTime() - startDate.getTime();
  const years = diffInMilliseconds / millisecondsPerYear;

  return Math.floor(years); // Use Math.floor to get the whole number of years
}
