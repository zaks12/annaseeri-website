import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  ArrowLeft,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/cta-banner";
import {
  properties,
  getPropertyBySlug,
  getAllPropertySlugs,
} from "@/lib/properties";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return getAllPropertySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);
  if (!property) return { title: "Property Not Found" };
  return {
    title: property.name,
    description: property.description,
  };
}

export default function PropertyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const property = getPropertyBySlug(params.slug);
  if (!property) notFound();

  const others = properties.filter((p) => p.slug !== property.slug).slice(0, 3);

  const whatsappNumber = siteConfig.phone
    .replace(/[^0-9]/g, "")
    .replace(/^0/, "234");
  const whatsappMessage = `Hello, I would like to enquire about ${property.name} at ${property.location}. Could you share more details?`;
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[380px] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={property.images[0]}
            alt={property.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
        </div>
        <div className="container-page relative z-10 pb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          <div className="mt-4 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {property.type}
              </span>
              {property.status && (
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold backdrop-blur",
                    property.status === "Completed" && "bg-primary/90 text-white",
                    property.status === "Ongoing" &&
                      "bg-white/90 text-foreground",
                    property.status === "Upcoming" && "bg-white/90 text-foreground"
                  )}
                >
                  {property.status}
                </span>
              )}
            </div>
            <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl text-balance">
              {property.name}
            </h1>
            <p className="mt-3 flex items-center gap-1.5 text-lg text-white/80">
              <MapPin className="h-4 w-4" />
              {property.location}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main column */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground">
                About This Project
              </h2>
              <p className="mt-4 text-foreground/80">
                {property.description}
              </p>

              {/* Gallery */}
              <h3 className="mt-12 text-xl font-bold text-foreground">
                Gallery
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {property.images.map((image, i) => (
                  <div
                    key={i}
                    className={cn(
                      "overflow-hidden rounded-xl",
                      i === 0 && "sm:col-span-2"
                    )}
                  >
                    <img
                      src={image}
                      alt={`${property.name} - view ${i + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-xl border border-border bg-white p-6">
                <h3 className="text-lg font-bold text-foreground">
                  Project Details
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4 border-b border-border pb-3">
                    <dt className="text-muted-foreground">Type</dt>
                    <dd className="font-medium text-foreground">
                      {property.type}
                    </dd>
                  </div>
                  {property.status && (
                    <div className="flex justify-between gap-4 border-b border-border pb-3">
                      <dt className="text-muted-foreground">Status</dt>
                      <dd className="font-medium text-primary">
                        {property.status}
                      </dd>
                    </div>
                  )}
                  <div className="flex justify-between gap-4 border-b border-border pb-3">
                    <dt className="text-muted-foreground">Location</dt>
                    <dd className="font-medium text-foreground">
                      {property.location}
                    </dd>
                  </div>
                </dl>

                {property.features.length > 0 && (
                  <>
                    <h3 className="mt-6 text-lg font-bold text-foreground">
                      Key Features
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {property.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="mt-6 space-y-3">
                  <Button asChild size="lg" className="w-full bg-[#25D366] text-white hover:bg-[#1ebe57]">
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Enquire on WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link href="/contact">
                      <Phone className="mr-2 h-4 w-4" />
                      Contact Us
                    </Link>
                  </Button>
                </div>

                <div className="mt-6 rounded-lg bg-secondary p-4 text-sm">
                  <p className="font-medium text-foreground">
                    {siteConfig.phone} · {siteConfig.phoneSecondary}
                  </p>
                  <p className="text-muted-foreground">{siteConfig.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other properties */}
      {others.length > 0 && (
        <section className="bg-secondary/50 py-16">
          <div className="container-page">
            <h2 className="text-2xl font-bold text-foreground">
              Other Projects
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground">{p.name}</h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {p.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        title="Interested in This Project?"
        description="Contact ANNASEERI NIG. LTD for project details and availability."
        buttonText="Book a Consultation"
      />
    </>
  );
}
