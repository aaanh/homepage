import { cn } from "@/lib/utils";
import { ChevronRight, ChevronsRightIcon } from "lucide-react";
import { ReactNode } from "react";

export interface SectionHeaderProps {
  title: string;
  SectionIcon?: ReactNode;
  className?: string;
}

export default function SectionHeader({
  title,
  SectionIcon,
  className
}: SectionHeaderProps) {
  return (
    <h2
      className={cn("flex items-center gap-2 bg-card/75 backdrop-blur-lg p-2 w-full font-mono text-4xl", className)}
      id={title.toLowerCase().replaceAll(" ", "-")}
    >
      {SectionIcon ? SectionIcon : <ChevronsRightIcon size={32} />}
      {title}
    </h2>
  );
}
