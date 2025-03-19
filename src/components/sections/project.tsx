import ProjectCarousel from "./project-carousel";
import SectionContainer from "./section-container";
import SectionHeader from "./section-header";

export default function Project() {
  return (
    <SectionContainer>
      <SectionHeader title="Personal Projects" />
      <ProjectCarousel />
    </SectionContainer>
  );
}
