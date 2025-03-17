import Heading from "@/_old/components/heading";
import About from "@/_old/components/about";
import Navigator from "@/_old/components/navigator";
import Experiences from "@/_old/components/experiences";
import Projects from "@/_old/components/projects";
import Gears from "@/_old/components/gears";
import Footer from "@/_old/components/footer";

export default function Page() {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <Heading />
      <About />
      <br />
      {/* <Spotify /> */}
      <Navigator />
      <br />
      <Experiences />
      <br />
      <Projects />
      <br />
      <Gears />
      <br />
      <Footer />
    </div>
  );
}
