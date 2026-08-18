import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { siteConfig, navItems, services } from "@/lib/site";

export function Footer() {
  const hasSocial =
    siteConfig.social.facebook ||
    siteConfig.social.twitter ||
    siteConfig.social.linkedin ||
    siteConfig.social.instagram;

  return (
    <footer className="bg-foreground text-white">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block" aria-label="ANNASEERI NIG. LTD home">
              <Image
                src="/images/annaseeri-logo.jpeg"
                alt="ANNASEERI NIG. LTD logo"
                width={320}
                height={51}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-white/70">
              {siteConfig.description}
            </p>
            {hasSocial && (
              <div className="mt-6 flex gap-3">
                {siteConfig.social.facebook && (
                  <SocialLink href={siteConfig.social.facebook} label="Facebook">
                    <Facebook className="h-4 w-4" />
                  </SocialLink>
                )}
                {siteConfig.social.twitter && (
                  <SocialLink href={siteConfig.social.twitter} label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </SocialLink>
                )}
                {siteConfig.social.linkedin && (
                  <SocialLink href={siteConfig.social.linkedin} label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </SocialLink>
                )}
                {siteConfig.social.instagram && (
                  <SocialLink href={siteConfig.social.instagram} label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </SocialLink>
                )}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Our Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link
                    href="/services"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <span className="flex flex-col">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-white"
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`tel:${siteConfig.phoneSecondary}`}
                    className="hover:text-white"
                  >
                    {siteConfig.phoneSecondary}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-sm text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>
            {siteConfig.name} — RC {siteConfig.rcNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      {children}
    </a>
  );
}
