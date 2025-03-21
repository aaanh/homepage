import ProjectCarousel from "./project-carousel";
import SectionContainer from "./common/section-container";
import SectionHeader from "./common/section-header";

export default function Project() {
  return (
    <SectionContainer>
      <SectionHeader title="Personal Projects" />
      <ProjectCarousel />
    </SectionContainer>
  );
}
