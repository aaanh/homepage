import { ArrowRightIcon } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="gap-2 grid lg:grid-cols-2 mx-4 py-8 border-foreground border-y">
      <a
        href="mailto:anhnguyen@aaanh.com?subject=Software project proposal&body=Please let me know your name, contacts, project scope and ideas."
        className="flex justify-center items-center bg-card/70 hover:bg-card/60 backdrop-blur-2xl p-4 h-[200px] text-4xl text-center transition-all ease-in-out"
      >
        Request a quote <ArrowRightIcon size={60} />
      </a>
      <a
        href="mailto:anhnguyen@aaanh.com?subject=Open role opportunity&body=Please let me know the role type, responsibilities, the department, your company, location, and salary range."
        className="flex justify-center items-center bg-foreground/70 hover:bg-foreground/60 backdrop-blur-2xl p-4 h-[200px] text-card text-4xl text-center transition-all ease-in-out"
      >
        Add a high-performer to your team <ArrowRightIcon size={60} />
      </a>
    </section>
  );
}
