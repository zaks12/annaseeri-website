import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Property } from "@/lib/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/projects/${property.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {property.status && (
          <span
            className={cn(
              "absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur",
              property.status === "Completed" && "bg-primary/90 text-white",
              property.status === "Ongoing" && "bg-accent/90 text-accent-foreground",
              property.status === "Upcoming" && "bg-white/90 text-foreground"
            )}
          >
            {property.status}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          {property.type}
        </span>
        <h3 className="mt-1 text-lg font-bold text-foreground">
          {property.name}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {property.location}
        </p>
        <p className="mt-3 flex-1 text-sm text-foreground/80">
          {property.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2">
          View Details
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
