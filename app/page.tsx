import Link from "next/link";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { Icon } from "@/components/icon";
import { PropertyCard } from "@/components/property-card";
import {
  services,
  stats,
} from "@/lib/site";
import { properties } from "@/lib/properties";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/27741697/pexels-photo-27741697.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Abuja skyline"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
        </div>
        <div className="container-page relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Real Estate · Technology · Construction
            </span>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Smart Building for Smart Living
            </h1>
            <p className="mt-6 text-lg text-white/80 text-balance">
              We deliver property developments and professional services across
              real estate, technology, and construction — helping clients make
              informed property decisions with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/projects">
                  Explore Our Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-secondary/50 py-12">
        <div className="container-page">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-muted-foreground sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="What We Do"
            title="Our Services"
            description="From residential and commercial sales to valuation, research, and strategic investment advice, we provide professional support across the property lifecycle."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-secondary/50 py-20">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Our Work"
              title="Featured Projects"
              description="Explore developments by ANNASEERI NIG. LTD across Abuja."
            />
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.slice(0, 3).map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8470844/pexels-photo-8470844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Property consultation"
                className="rounded-xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-primary p-6 text-white shadow-xl sm:block">
                <p className="text-3xl font-bold">3</p>
                <p className="text-sm text-white/80">
                  Business Areas
                </p>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Why Choose Us"
                title="A Partner You Can Rely On"
                description="We bring together expertise across real estate, technology, and construction to support our clients at every stage."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Expertise across real estate, technology, and construction",
                  "Clear, professional guidance from enquiry to handover",
                  "Dedicated team for every project we undertake",
                  "Comprehensive property and advisory services under one roof",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8">
                <Link href="/about">
                  Learn About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/50 py-20">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Client Stories"
            title="What Our Clients Say"
            description="Client testimonials will be featured here once available."
          />
          <div className="mt-12 rounded-xl border border-dashed border-border bg-white p-12 text-center">
            <Quote className="mx-auto h-8 w-8 text-accent" />
            <p className="mt-4 text-muted-foreground">
              We are collecting client testimonials. Please check back soon or{" "}
              <Link href="/contact" className="font-medium text-primary hover:underline">
                contact us
              </Link>{" "}
              to speak with our team directly.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Start Your Property Journey?"
        description="Speak with our team to learn how ANNASEERI NIG. LTD can support your real estate, technology, or construction needs."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
