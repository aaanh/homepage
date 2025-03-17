import { getGears } from "@/data/gears";
import Container from "../container";
import ContentCard from "../content-card";
import ComputingComponent from "./components/computing";
import GearComponent from "./components/gear";
import LensComponent from "./components/lens";
import GlowText from "../glow-text";
import { LucideAnvil } from "lucide-react";

export default function Gears() {
  const { computing, gears, lenses } = getGears();

  return (
    <Container className="lg:grid-cols-4 grid-cols-1">
      <ContentCard className="sm:text-4xl text-2xl lg:col-span-2 lg:row-span-2">
        <LucideAnvil />
        &nbsp;
        <GlowText text="Gears" />
      </ContentCard>
      <ContentCard className="sm:text-4xl text-2xl lg:col-span-2">
        <h4>Computing</h4>
      </ContentCard>
      {computing?.map((gear, idx) => (
        <ContentCard key={gear.model + idx}>
          <ComputingComponent {...gear} />
        </ContentCard>
      ))}
      <ContentCard className="sm:text-4xl text-2xl lg:col-span-2">
        <h4>Photography</h4>
      </ContentCard>

      {gears?.map((gear) => (
        <ContentCard key={gear.model}>
          <GearComponent {...gear} />
        </ContentCard>
      ))}

      {lenses?.map((gear) => (
        <ContentCard key={gear.model}>
          <LensComponent {...gear} />
        </ContentCard>
      ))}
    </Container>
  );
}
