"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Logo from "../logo";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";
import LanguageSwitcher from "../language-switcher";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../theme-switcher";

export default function Header() {
  const router = useRouter();

  return (
    <nav className="top-2 z-50 fixed p-2 w-full">
      <div className="flex justify-between bg-card/40 shadow backdrop-blur mx-auto p-4 rounded-xl container">
        <Logo />
        <div className="flex">
          <LanguageSwitcher />
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-l-0 rounded-none">
                <HamburgerMenuIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-42">
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() => {
                    router.push("#experiences");
                  }}
                >
                  Experiences
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    router.push("#personal-projects");
                  }}
                >
                  Personal Projects
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    router.push("#education");
                  }}
                >
                  Education
                </DropdownMenuItem>
                {/* <DropdownMenuItem>
                Volunteer, Awards, Certifications
              </DropdownMenuItem> */}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
