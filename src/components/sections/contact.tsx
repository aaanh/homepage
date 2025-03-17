import { cn } from "@/lib/utils";
import GithubIcon from "@/components/assets/github.svg";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { ScrollIcon, SubscriptIcon } from "lucide-react";

export default function Contact() {
  return (
    <section className="flex flex-wrap justify-center items-center gap-2 p-2">
      <a
        href="https://github.com/aaanh"
        target="_blank"
        className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
      >
        <GitHubLogoIcon />
        <span>Github</span>
      </a>
      <a
        href="https://linkedin.com/in/aaanh"
        target="_blank"
        className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
      >
        <LinkedInLogoIcon />
        <span>Linkedin</span>
      </a>
      <a
        href="https://instagram.com/aaanhnya"
        target="_blank"
        className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
      >
        <InstagramLogoIcon />
        <span>Instagram</span>
      </a>
      <Link
        href="/Anh_Hoang_Nguyen_Resume.pdf"
        target="_blank"
        className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
      >
        <ScrollIcon />
        <span>Resume/CV</span>
      </Link>
    </section>
  );
}
