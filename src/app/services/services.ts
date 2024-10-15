import { z } from "zod";

const ServiceSchema = z.object({
  type: z.string(),
  description: z.string(),
  priceRange: z.enum().,
});

type Service = z.infer<typeof ServiceSchema>;

export default function getServices(): Service[] {
  return [
    {
      type: "Development",
      description: "One-off contractual engagements",
      priceRange: [200, 500],
    },
  ];
}
