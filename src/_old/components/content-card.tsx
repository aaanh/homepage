import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function ContentCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "content-card bg-surface min-h-24 flex items-center justify-center shadow-lg p-4 rounded-lg",
        className
      )}
    >
      {children}
    </section>
  );
}
