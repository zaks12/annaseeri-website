"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80"
          : "bg-white"
      )}
    >
      <div className="border-b border-border">
        <div className="container-page hidden py-2 text-sm text-muted-foreground md:flex md:items-center md:justify-between">
          <p>{siteConfig.address}</p>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 font-medium text-foreground hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
            <span className="text-muted-foreground/40">|</span>
            <a
              href={`tel:${siteConfig.phoneSecondary}`}
              className="flex items-center gap-1.5 font-medium text-foreground hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phoneSecondary}
            </a>
          </div>
        </div>
      </div>

      <div className="container-page">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="block shrink-0" aria-label="ANNASEERI NIG. LTD home">
            <Image
              src="/images/annaseeri-logo.jpeg"
              alt="ANNASEERI NIG. LTD logo"
              width={256}
              height={41}
              className="h-10 w-auto object-contain sm:h-12"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-xl">
            <div className="flex h-16 items-center justify-between border-b border-border px-4">
              <span className="text-lg font-bold text-foreground">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-2 text-foreground"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-3 text-base font-medium transition-colors",
                      active
                        ? "bg-secondary text-primary"
                        : "text-foreground/80 hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button asChild className="mt-4 w-full">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </nav>
            <div className="mt-auto border-t border-border p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">{siteConfig.name}</p>
              <p className="mt-1">{siteConfig.phone}</p>
              <p className="mt-1">{siteConfig.phoneSecondary}</p>
              <p className="mt-1">{siteConfig.email}</p>
              <p className="mt-2">{siteConfig.address}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
