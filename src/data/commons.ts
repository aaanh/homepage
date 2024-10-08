import { z } from "zod";

export const OwnerSchema = z.object({
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
  /**
   * @param github The Github username of the site owner. E.g. aaanh
   */
  github: z.string().transform((github) => `https://github.com/${github}`),
  /**
   * @param linkedin Linkedin username (not full URL) of the site owner. E.g. aaanh
   */
  linkedin: z
    .string()
    .transform((linkedin) => `https://linkedin.com/in/${linkedin}`),
  jobTitle: z.string(),
  homepage: z.string().url(),
  instagram: z
    .string()
    .transform((instagram) => `https://instagram.com/${instagram}`),
  repository: z
    .string()
    .url()
    .optional()
    .default("https://github.com/aaanh/homepage"),
});

export type Owner = z.infer<typeof OwnerSchema>;

export const month = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export const ExperienceSchema = z.object({
  organization: z.string(),
  link: z.string(),
  role: z.string(),
  team: z.string().optional(),
  type: z.string(),
  location: z.string(),
  startMonth: z.number().min(1).max(12),
  startYear: z.number(),
  endMonth: z.number().min(1).max(12).optional(),
  endYear: z.number().or(z.string()),
  description: z.array(z.string()),
  skills: z.array(z.string()),
});

export type Experience = z.infer<typeof ExperienceSchema>;

export const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  screenshot: z.string().optional(),
  stack: z.string(),
  link_ref: z.string().optional(),
});

export type Project = z.infer<typeof ProjectSchema>;

export const GearSchema = z.object({
  type: z.enum([
    "Desktop",
    "Laptop",
    "Tablet",
    "Phone",
    "Camera",
    "Lens",
    "Peripheral/Accessory",
  ]),
  brand: z.string(),
  model: z.string(),
});

export type Gear = z.infer<typeof GearSchema>;

export const GearComputingSchema = GearSchema.extend({
  cpu: z.string(),
  gpu: z.string().default("Integrated"),
  ram: z.string(),
  storage: z.string(),
});

export type GearComputing = z.infer<typeof GearComputingSchema>;

export const GearLensSchema = GearSchema.extend({
  focal: z.string(),
  aperture: z.string(),
  featureCodes: z.string(),
});

export type GearLens = z.infer<typeof GearLensSchema>;

export const GearSoftwareSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export type GearSoftware = z.infer<typeof GearSoftwareSchema>;
