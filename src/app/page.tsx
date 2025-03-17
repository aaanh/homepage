import CallToAction from "@/components/sections/call-to-action";
import Contact from "@/components/sections/contact";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import { GithubFeed } from "@/components/sections/github-feed";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Project from "@/components/sections/project";

export default function Home() {
  return (
    <>
      <div className="mx-auto container">
        <Header />
      </div>
      <div className="flex flex-col gap-4 mx-auto mb-8 min-h-screen">
        <Hero />
        <Contact />
        <Experience />
        <Project />
        <Education />
        <GithubFeed />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
