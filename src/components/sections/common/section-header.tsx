import { ChevronRight, ChevronsRightIcon } from "lucide-react";
import { ReactNode } from "react";

export interface SectionHeaderProps {
  title: string;
  SectionIcon?: ReactNode;
}

export default function SectionHeader({
  title,
  SectionIcon,
}: SectionHeaderProps) {
  return (
    <h2
      className="flex items-center gap-2 bg-card/75 backdrop-blur-lg p-2 w-full font-mono text-4xl"
      id={title.toLowerCase().replaceAll(" ", "-")}
    >
      {SectionIcon ? SectionIcon : <ChevronsRightIcon size={32} />}
      {title}
    </h2>
  );
}
