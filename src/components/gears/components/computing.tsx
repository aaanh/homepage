import React from "react";
import { Cpu, Monitor, HardDrive, MemoryStickIcon } from "lucide-react";
import { GearComputing } from "@/data/commons";
import { FaMicrochip } from "react-icons/fa";

const ComputingComponent: React.FC<GearComputing> = ({
  brand,
  model,
  type,
  cpu,
  gpu,
  ram,
  storage,
}) => (
  <div className="flex flex-col w-full">
    <div className="font-semibold grid grid-cols-[25px_1fr] gap-2 mb-2">
      <Monitor />
      <span>
        {model}
      </span>
    </div>
    <div className="grid space-y-2 text-muted-foreground">
      <p className="items-center flex"><Cpu className="inline mr-1" size={18} /> {cpu}</p>
      <p className="items-center flex"><FaMicrochip className="inline mr-1" size={18} /> {gpu}</p>
      <p className="items-center flex"><MemoryStickIcon className="inline mr-1" size={18} /> {ram}</p>
      {storage === "N/A" ? null : <p className="items-center flex">
        <HardDrive className="inline mr-1" size={18} /> {storage}
      </p>}
    </div>
  </div>
);

export default ComputingComponent;
