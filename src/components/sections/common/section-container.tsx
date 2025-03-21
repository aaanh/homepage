import { ReactNode } from "react";

export default function SectionContainer({
  children,
}: {
  children: ReactNode;
}) {
  return <section className="flex flex-col gap-4 p-4">{children}</section>;
}
