import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Icon } from "@/components/icon";
import { services, siteConfig } from "@/lib/site";

export const metadata = {
  title: "Our Services",
  description: `Explore the full range of real estate services offered by ${siteConfig.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Professional real estate services from ANNASEERI NIG. LTD — covering sales, leasing, investment, valuation, research, and strategic advisory."
        image="https://images.pexels.com/photos/418320/pexels-photo-418320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      {/* Services list */}
      <section className="py-20">
        <div className="container-page">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white">
                    <Icon name={service.icon} className="h-7 w-7" />
                  </span>
                  <h2 className="mt-5 text-2xl font-bold text-foreground sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-foreground/80">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                  >
                    Enquire about this service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="rounded-xl border border-border bg-secondary/50 p-8">
                  <h3 className="text-lg font-semibold text-foreground">
                    How It Works
                  </h3>
                  <ol className="mt-4 space-y-4">
                    {[1, 2, 3, 4].map((step) => (
                      <li key={step} className="flex gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                          {step}
                        </span>
                        <span className="text-sm text-foreground/80">
                          {step === 1 && "Initial consultation to understand your needs and goals."}
                          {step === 2 && "We conduct research and present tailored options or proposals."}
                          {step === 3 && "Execution with dedicated project management and regular updates."}
                          {step === 4 && "Handover, documentation, and ongoing after-sales support."}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary/50 py-20">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Our Process"
            title="How We Work"
            description="We keep you informed and involved at every stage of the process."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Consult",
                description: "We listen to your needs and understand your goals.",
              },
              {
                step: "02",
                title: "Plan",
                description: "We research, advise, and present suitable options.",
              },
              {
                step: "03",
                title: "Execute",
                description: "We manage the process from start to finish.",
              },
              {
                step: "04",
                title: "Deliver",
                description: "We hand over and provide ongoing support.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-border bg-white p-6"
              >
                <span className="text-3xl font-bold text-accent">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a Specific Requirement?"
        description="Get in touch to discuss how we can help with your particular real estate needs."
        buttonText="Talk to Us"
      />
    </>
  );
}
