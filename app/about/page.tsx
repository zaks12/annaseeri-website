import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Icon } from "@/components/icon";
import { stats, values, team, siteConfig } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name}, a Nigerian company operating across real estate, technology, and construction.`,
};

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nasiru Yunusa Bala",
    jobTitle: "Founder & Chief Executive Officer",
    image: "https://www.annaseeri.com/images/nasiru-yunusa-bala.jpg.jpeg",
    description:
      "Nasiru Yunusa Bala is the Founder and Chief Executive Officer of ANNASEERI NIG. LTD.",
    worksFor: {
      "@type": "Organization",
      name: "ANNASEERI NIG. LTD",
      url: "https://www.annaseeri.com",
    },
    url: "https://www.annaseeri.com/about",
  };
  return (
<>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(personSchema),
  }}
/>
    
      <PageHero
        title="About ANNASEERI NIG. LTD"
        description="A Nigerian company operating across real estate, technology, and construction."
        image="https://images.pexels.com/photos/38513712/pexels-photo-38513712.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      {/* Intro */}
      <section className="py-20">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8815909/pexels-photo-8815909.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="ANNASEERI team with clients"
                className="rounded-xl object-cover shadow-lg"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="Smart Building for Smart Living"
              />
              <div className="mt-6 space-y-4 text-foreground/80">
                <p>
                  {siteConfig.name} (RC {siteConfig.rcNumber}) is a Nigerian
                  company operating across three core business areas: real
                  estate, technology, and construction. We deliver property
                  developments and professional services to clients across our
                  operating areas.
                </p>
                <p>
                  Our team brings together expertise in architecture, business
                  strategy, operations, and project management. We approach
                  every project with integrity, attention to detail, and a
                  commitment to client satisfaction.
                </p>
                <p>
                  Whether you are buying your first home, leasing commercial
                  space, or exploring investment opportunities, our team is
                  ready to guide you from enquiry to handover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16">
        <div className="container-page">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-white/70 sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Our Purpose"
            title="What Drives Us Forward"
            description="The principles that shape every decision we make and every property we deliver."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border bg-white p-8 text-center"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon name={value.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary/50 py-20">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Our Journey"
            title="Milestones"
            description="Company milestones will be featured here once available."
          />
          <div className="mt-12 rounded-xl border border-dashed border-border bg-white p-12 text-center">
            <p className="text-muted-foreground">
              We are compiling our company milestones. Please check back soon
              or{" "}
              <Link href="/contact" className="font-medium text-primary hover:underline">
                contact us
              </Link>{" "}
              to learn more about our work.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Our People"
            title="Meet the Leadership Team"
            description="The team responsible for steering ANNASEERI NIG. LTD and guiding its growth."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-primary">{member.role}</p>
                  {member.bio && (
                    <p className="mt-3 text-left text-xs text-muted-foreground">
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let's Build Something Together"
        description="Whether you are buying, selling, leasing, or developing, our team is ready to help."
        buttonText="Contact Us"
      />
    </>
  );
}
