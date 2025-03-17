import { FaLink } from "react-icons/fa";
import Container from "../container";
import ContentCard from "../content-card";
import Link from "next/link";
import { LucideCompass, LucideLink2 } from "lucide-react";
import GlowText from "../glow-text";

export default function Navigator() {
  const targets = ["Experiences", "Projects", "Resume", "Contact", "Gears"];

  return (
    <Container className="lg:grid-cols-[1fr_4fr]">
      <ContentCard className="text-4xl border-none space-x-2">
        <LucideCompass />
        <GlowText text="Navigator" />
      </ContentCard>
      <Container className="grid lg:grid-cols-4">
        {targets.map((target) => (
          <Link
            key={target}
            className="group"
            href={
              target === "Resume"
                ? "/Anh_Hoang_Nguyen_Resume.pdf"
                : target === "Contact"
                ? `/${target.toLowerCase()}`
                : "#" + target.toLowerCase()
            }
          >
            <ContentCard className="text-3xl relative text-center">
              <span className="relative">{target}</span>
            </ContentCard>
          </Link>
        ))}
      </Container>
    </Container>
  );
}
