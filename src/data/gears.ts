import { z } from "zod";
import {
  Gear,
  GearComputing,
  GearComputingSchema,
  GearLens,
  GearLensSchema,
  GearSchema,
  GearSoftwareSchema,
} from "./commons";

export function getGears() {
  const { data: computing } = z.array(GearComputingSchema).safeParse([
    {
      brand: "Workstation",
      model: "Workstation",
      type: "Desktop",
      cpu: "AMD Ryzen 9 3900X",
      gpu: "Nvidia RTX 3070 Ti 8GB",
      ram: "32GB @ 3200MHz",
      storage: "N/A",
    },
    {
      brand: "Server",
      model: "Server",
      type: "Desktop",
      cpu: "AMD Ryzen 5 3600",
      gpu: "Nvidia GTX 1080 8GB + nVidia Tesla 24GB",
      ram: "16GB @ 3200MHz",
      storage: "N/A",
    },
    {
      brand: "Apple",
      model: "MacBook 16 in.",
      type: "Laptop",
      cpu: "10-core Apple M1 Pro",
      gpu: "16-core GPU",
      ram: "16 GB LPDDR5",
      storage: "512GB",
    },
    {
      brand: "Framework",
      model: "Laptop 13 in.",
      type: "Laptop",
      cpu: "8-Core Intel i7-1165G7",
      gpu: "Integrated Iris Xe",
      ram: "48GB @ 3200MHz",
      storage: "1TB NVME SSD",
    },
    {
      brand: "Lenovo",
      model: "ThinkPad P1 Gen 2",
      type: "Laptop",
      cpu: "6-Core Intel i9-9850H",
      gpu: "Nvidia Quadro T1000",
      ram: "32GB @ 2667MHz",
      storage: "1TB NVME SSD",
    },
    {
      brand: "Lenovo",
      model: "ThinkPad X1 Carbon Gen 10",
      type: "Laptop",
      cpu: "12-Core Intel i7-1270P",
      gpu: "Integrated Iris Xe",
      ram: "32GB @ 5200MHz",
      storage: "512GB NVME SSD",
    },
  ] as GearComputing[]);

  const { data: gears } = z.array(GearSchema).safeParse([
    {
      brand: "Sony",
      model: "α7 II",
      type: "Camera",
    },
    {
      brand: "Sony",
      model: "ZV-E10",
      type: "Camera",
    },
    {
      brand: "Nikon",
      model: "D700",
      type: "Camera",
    },
    {
      brand: "Nikon",
      model: "Speedlight SB-300",
      type: "Peripheral/Accessory",
    },
  ] as Gear[]);

  const { data: lenses } = z.array(GearLensSchema).safeParse([
    {
      brand: "Sigma",
      model: "Art 24-70mm",
      type: "Lens",
      focal: "24-70mm",
      aperture: "f2.8",
      featureCodes: "DG DN",
    },
    {
      brand: "Sigma",
      model: "Art 30mm",
      type: "Lens",
      focal: "30mm",
      aperture: "f2.8",
      featureCodes: "DN",
    },
    {
      brand: "Nikkor",
      model: "28-70mm",
      type: "Lens",
      focal: "28-70mm",
      aperture: "f2.8",
      featureCodes: "ED",
    },
    {
      brand: "Nikkor",
      model: "24-85mm",
      type: "Lens",
      focal: "24-85mm",
      aperture: "f3.5-4.5",
      featureCodes: "VR",
    },
    {
      brand: "Nikkor",
      model: "50mm",
      type: "Lens",
      focal: "50mm",
      aperture: "f1.8",
      featureCodes: "VR",
    },
    {
      brand: "Nikkor",
      model: "70-300mm",
      type: "Lens",
      focal: "70-300mm",
      aperture: "f4.5-5.6",
      featureCodes: "N/A",
    },
  ] as GearLens[]);

  const { data: software } = z.array(GearSoftwareSchema).safeParse([]);

  return { computing, gears, lenses, software };
}
