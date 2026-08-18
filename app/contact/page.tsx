"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <PageHero
        title="Get in Touch"
        description="Have a question about our projects or services? Our team is ready to help."
        image="https://images.pexels.com/photos/7642001/pexels-photo-7642001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      />

      <section className="py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                Contact Information
              </h2>
              <p className="mt-3 text-foreground/80">
                Reach out through any of the channels below or fill out the
                form and our team will get back to you shortly.
              </p>
              <div className="mt-8 space-y-5">
                <ContactRow
                  icon={<MapPin className="h-5 w-5" />}
                  title="Visit Our Office"
                  text={siteConfig.address}
                />
                <ContactRow
                  icon={<Phone className="h-5 w-5" />}
                  title="Call Us"
                  text={`${siteConfig.phone} · ${siteConfig.phoneSecondary}`}
                  href={`tel:${siteConfig.phone}`}
                />
                <ContactRow
                  icon={<Mail className="h-5 w-5" />}
                  title="Email Us"
                  text={siteConfig.email}
                  href={`mailto:${siteConfig.email}`}
                />
                <ContactRow
                  icon={<Clock className="h-5 w-5" />}
                  title="Working Hours"
                  text="Contact us to schedule a visit or appointment."
                />
              </div>

              {/* Map placeholder */}
              <div className="mt-8 overflow-hidden rounded-xl border border-border">
                <div className="flex h-64 items-center justify-center bg-secondary text-center">
                  <div>
                    <MapPin className="mx-auto h-8 w-8 text-primary" />
                    <p className="mt-2 text-sm font-medium text-foreground">
                      {siteConfig.address}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Map integration coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in the form and our team will respond shortly.
              </p>

              {submitted && (
                <div className="mt-6 flex items-center gap-3 rounded-lg bg-primary/10 p-4 text-primary">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <p className="text-sm font-medium">
                    Thank you! Your message has been received. We&apos;ll be in
                    touch soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" id="name">
                    <Input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Email Address" id="email">
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                    />
                  </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone Number" id="phone">
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+234 ..."
                    />
                  </Field>
                  <Field label="Subject" id="subject">
                    <Input
                      id="subject"
                      required
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      placeholder="How can we help?"
                    />
                  </Field>
                </div>
                <Field label="Message" id="message">
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us more about your enquiry..."
                  />
                </Field>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
        {icon}
      </span>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="block transition-opacity hover:opacity-80">
        {content}
      </a>
    );
  }
  return content;
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </Label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
