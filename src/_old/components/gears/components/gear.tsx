import React from "react";
import {
  Camera,
  Cpu,
  Smartphone,
  Tablet,
  Monitor,
  HardDrive,
  Layers,
  Aperture,
} from "lucide-react";
import { Gear, GearLens } from "@/data/commons";

const GearComponent: React.FC<Gear | GearLens> = ({ brand, model, type }) => {
  const getIcon = () => {
    switch (type) {
      case "Camera":
        return <Camera className="w-6 h-6" />;
      case "Desktop":
        return <Monitor className="w-6 h-6" />;
      case "Laptop":
        return <Cpu className="w-6 h-6" />;
      case "Tablet":
        return <Tablet className="w-6 h-6" />;
      case "Phone":
        return <Smartphone className="w-6 h-6" />;
      case "Lens":
        return <Aperture className="w-6 h-6" />;
      case "Peripheral/Accessory":
        return <HardDrive className="w-6 h-6" />;
      default:
        return <Layers className="w-6 h-6" />;
    }
  };

  return (
    <div className="flex space-x-2">
      <div className="">{getIcon()}</div>
      <div>
        <div className="text-xl font-semibold">{brand}</div>
        <div className="">{model}</div>
      </div>
    </div>
  );
};

export default GearComponent;
