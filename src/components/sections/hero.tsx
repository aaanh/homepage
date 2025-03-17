import { Typewriter } from "nextjs-simple-typewriter";

export default function Hero() {
  const startDate = new Date("2022-01-01");
  const endDate = new Date();
  const years = calculateYearsBetweenDates(startDate, endDate);

  return (
    <section className="flex flex-col items-center p-2">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="top-0 -z-20 fixed w-full h-screen object-cover pointer-events-none blur"
      >
        <source src="/hero-movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="gap-4 grid grid-cols-2 bg-card/75 mt-16 py-4 divide-x divide-black dark:divide-white w-full">
        <div className="justify-end items-center grid grid-rows-[1fr_1fr] pr-4 text-right">
          <h1 className="text-2xl lg:text-4xl">Anh Hoang Nguyen</h1>
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
        <div className="flex flex-col justify-center text-left">
          <p className="text-lg lg:text-2xl">
            <b>{years}</b> years of experience
          </p>
          <p className="text-lg lg:text-2xl">
            <b>2</b> succesful projects
          </p>
          <p className="text-lg lg:text-2xl">
            <b>3</b> internships
          </p>
          <p className="text-lg lg:text-2xl">
            <b>3</b>
            <sup>rd</sup> year student
          </p>
        </div>
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
