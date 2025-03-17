import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center items-center gap-2 text-2xl">
      <Image src="/logos/aaanh.png" width={30} height={30} alt="aaanh's logo" />
      <span>AAANH</span>
    </div>
  );
}
