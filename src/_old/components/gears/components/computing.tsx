import React from "react";
import { Cpu, Monitor, HardDrive } from "lucide-react";
import { GearComputing } from "@/data/commons";

const ComputingComponent: React.FC<GearComputing> = ({
  brand,
  model,
  type,
  cpu,
  gpu,
  ram,
  storage,
}) => (
  <div className="flex flex-col">
    <div className="text-xl font-semibold mb-2 flex">
      <Monitor className="w-6 h-6" />
      &nbsp;
      <span>
        {brand} {model}
      </span>
    </div>
    <div className="flex flex-col space-y-2 text-muted-foreground">
      <div className="">
        <Cpu className="inline mr-1" /> CPU: {cpu}
      </div>
      <div className="">GPU: {gpu}</div>
      <div className="">RAM: {ram}</div>
      <div className="">
        <HardDrive className="inline mr-1" /> Storage: {storage}
      </div>
    </div>
  </div>
);

export default ComputingComponent;
