import ProjectCarousel from "./project-carousel";
import SectionHeader from "./section-header";

export default function Project() {
  return (
    <section className="flex flex-col gap-4 p-2">
      <SectionHeader title="Personal Projects" />
      <ProjectCarousel />
    </section>
  );
}
