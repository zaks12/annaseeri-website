import { PropertyCard } from "@/components/property-card";
import type { Property } from "@/lib/properties";

export function PropertyGrid({ properties }: { properties: Property[] }) {
  if (properties.length === 0) {
    return (
      <p className="mt-12 text-center text-muted-foreground">
        No properties in this category yet. Check back soon.
      </p>
    );
  }

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.slug} property={property} />
      ))}
    </div>
  );
}
