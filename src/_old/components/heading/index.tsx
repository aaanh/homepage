import Container from "../container";
import ContentCard from "../content-card";
import Logo from "../../../components/logo";
import { ModeToggle } from "../../../components/theme-switcher";
import Clock from "./clock";

export default function Heading() {
  return (
    <Container className="grid-cols-2 lg:grid-cols-[0.25fr_1fr_0.25fr]">
      <ContentCard className="">
        <Logo className="w-16 h-16" />
        <span className="text-xl md:text-4xl">AAANH</span>
      </ContentCard>
      <ContentCard>
        <Clock />
      </ContentCard>
      <ContentCard>
        <ModeToggle />
      </ContentCard>
    </Container>
  );
}
