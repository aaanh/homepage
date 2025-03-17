import { ChevronRight, ChevronsRightIcon } from "lucide-react";

export interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h2
      className="flex items-center gap-2 bg-card/75 backdrop-blur-lg p-2 w-full font-mono text-4xl"
      id={title.toLowerCase().replaceAll(" ", "-")}
    >
      <ChevronsRightIcon size={32} /> {title}
    </h2>
  );
}
