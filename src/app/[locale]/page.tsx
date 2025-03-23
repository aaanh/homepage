import CallToAction from "@/components/sections/call-to-action";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Project from "@/components/sections/project";
import FeedContainer from "@/components/sections/feed-container.tsx";
import { cn } from "@/lib/utils";
import { crimsonSerif, playfairSerif } from "@/fonts";
import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

export default async function Home({
  params: { locale }
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(locale);

  return (
    <>
      <Header />
      <div className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="top-0 -z-20 fixed w-screen h-screen object-cover"
        >
          <source src="/hero-movie.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Hero dictionary={dict.hero} />
      <div
        className={cn(
          "flex bg-background dark:bg-neutral-900 pb-8 min-h-screen font-sans"
        )}
      >
        <div className="flex flex-col gap-4 mx-auto mt-8 container">
          <Experience />
          <Project />
          <Education />
          <CallToAction />
          <FeedContainer />
        </div>
      </div>
      <Footer />
    </>
  );
}
