import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      className={cn("grid gap-4 md:grid-cols-2 grid-cols-1", className)}
    >
      {children}
    </div>
  );
}
