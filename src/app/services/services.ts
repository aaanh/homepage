import { z } from "zod";

export const ServiceSchema = z.object({
  type: z.string(),
  description: z.string(),
  priceRange: z.string(),
});

export type Service = z.infer<typeof ServiceSchema>;

export default function getServices(): Service[] {
  return [
    {
      type: "Small - Medium Project",
      description: "One-off contractual engagements",
      priceRange: "Starting at $200 up to $2000",
    },
    {
      type: "Long-running Project",
      description: "Part-time engagements that grow and expand",
      priceRange: "Starting at $40/hour ",
    },
    {
      type: "Developer",
      description: "Classic full-time engagements",
      priceRange: "Starting at $80,0000 per anum excl. bonuses and options",
    },
  ];
}
