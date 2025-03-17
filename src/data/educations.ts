import { z } from "zod";

export const EducationSchema = z.object({
  institution: z.string(),
  location: z.string(),
  field: z.string(),
  startYear: z.number(),
  endYear: z.number(),
  status: z.string(),
});

export type Education = z.infer<typeof EducationSchema>;

export function getEducations() {
  const educations = z.array(EducationSchema).parse([
    {
      institution: "Lasalle College",
      location: "Montreal, QC. Canada",
      field: "Computer Science",
      startYear: 2025,
      endYear: 2027,
      status: "In Progress",
    },
    {
      institution: "Concordia University",
      location: "Montreal, QC. Canada",
      field: "Computer Engineering",
      startYear: 2020,
      endYear: 2024,
      status: "Discontinued",
    },
    {
      institution: "John Abbott College",
      location: "Ste-Anne-de-Bellevue, QC. Canada",
      field: "Pure and Applied Science",
      startYear: 2017,
      endYear: 2020,
      status: "Completed",
    },
  ]);

  return educations;
}
