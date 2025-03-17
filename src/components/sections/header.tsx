"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Logo from "../logo";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { ModeToggle } from "../theme-switcher";

export default function Header() {
  const router = useRouter();

  return (
    <nav className="z-20 fixed flex justify-center items-center mx-auto p-2 container">
      <div className="flex justify-between bg-card/40 shadow backdrop-blur-lg p-2 px-8 border rounded-xl w-2xl">
        <Logo />
        <div className="flex gap-2">
          {/* <ModeToggle /> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-none">
                <HamburgerMenuIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
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
