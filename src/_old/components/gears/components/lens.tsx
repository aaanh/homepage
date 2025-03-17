import React from "react";
import { Camera, Aperture, Code } from "lucide-react";
import { GearLens } from "@/data/commons";

const LensComponent: React.FC<GearLens> = ({
  brand,
  model,
  focal,
  aperture,
  featureCodes,
}) => (
  <div className="">
    <div className="flex flex-col space-y-2">
      <div className="font-semibold flex">
        <Camera className="w-6 h-6" />
        &nbsp;
        <span>
          {brand} {model}
        </span>
      </div>
      <div className="text-muted-foreground">
        <div className="">
          <Aperture className="inline mr-1" /> Focal Length: {focal}
        </div>
        <div className="">
          <Aperture className="inline mr-1" /> Aperture: {aperture}
        </div>
        <div className="">
          <Code className="inline mr-1" /> Feature Codes: {featureCodes}
        </div>
      </div>
    </div>
  </div>
);

export default LensComponent;
