import getServices, { Service } from "./services";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className={cn("w-[380px] bg-surface border-accent/50")}>
      <CardHeader>
        <CardTitle>{service.type}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 border-primary/50 p-4 border rounded-md w-full min-h-36 text-center text-xl">
          <p className="w-full">{service.priceRange}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ServicesPage() {
  const services = getServices();

  return (
    <div className="flex flex-col flex-wrap justify-center items-center gap-4 min-h-screen">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {services.map((service) => (
          <ServiceCard key={service.type} service={service} />
        ))}
      </div>
      <a
        href="mailto:business@aaanh.com"
        className="border-primary/50 hover:bg-primary/20 p-4 border rounded-xl w-56 text-center"
      >
        Contact
      </a>
    </div>
  );
}
