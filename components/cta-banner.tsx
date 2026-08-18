import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaBanner({
  title,
  description,
  buttonText = "Get in Touch",
  buttonHref = "/contact",
}: {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="container-page">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
              {title}
            </h2>
            <p className="mt-4 text-lg text-white/80 text-balance">
              {description}
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shrink-0"
          >
            <Link href={buttonHref}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
