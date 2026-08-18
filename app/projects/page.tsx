"use client";

import { useState } from "react";
import { PageHero } from "@/components/page-hero";
import { CtaBanner } from "@/components/cta-banner";
import { SectionHeading } from "@/components/section-heading";
import { PropertyGrid } from "@/components/property-grid";
import { properties } from "@/lib/properties";
import { cn } from "@/lib/utils";

const categories = ["All", "Residential", "Commercial", "Mixed-Use"] as const;

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? properties
      : properties.filter((p) => p.type === filter);

  return (
    <>
      <PageHero
        title="Our Projects"
        description="Explore developments by ANNASEERI NIG. LTD. Contact us for project details and availability."
        image="https://images.pexels.com/photos/38277835/pexels-photo-38277835.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Portfolio"
            title="Our Developments"
            description="Filter by project type to find the projects most relevant to you. Contact ANNASEERI NIG. LTD for details on any project."
          />

          {/* Filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                  filter === cat
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground/70 hover:bg-secondary/80"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <PropertyGrid properties={filtered} />
        </div>
      </section>

      <CtaBanner
        title="Interested in One of Our Projects?"
        description="Contact ANNASEERI NIG. LTD for project details and availability."
        buttonText="Enquire Now"
      />
    </>
  );
}
