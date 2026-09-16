"use client";

import { useState } from "react";
import { ContactTrigger } from "@/components/ContactTrigger";
import { PhotoCredit } from "@/components/PhotoCredit";
import { ScrollStudio } from "@/components/ScrollStudio";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { keyServices } from "@/lib/key-services";
import Link from "next/link";

const serviceImages: Record<string, { src: string; alt: string }> = {
  "design-build": {
    src: "/images/home/service-2.jpg",
    alt: "Fire station and civic construction",
  },
  "commercial-construction": {
    src: "/images/home/service-1.jpg",
    alt: "Commercial building",
  },
  "historical-restoration": {
    src: "/images/home/service-3.jpg",
    alt: "Historic restoration project",
  },
  "operations-maintenance": {
    src: "/images/home/service-4.jpg",
    alt: "Operations and maintenance site",
  },
};

export default function TestPage() {
  const [activeSlug, setActiveSlug] = useState(keyServices[0]?.slug ?? "");
  const service = keyServices.find((s) => s.slug === activeSlug) ?? keyServices[0];
  const image = serviceImages[service?.slug ?? ""] ?? serviceImages["design-build"];

  if (!service) return null;

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <SiteHeader />
      <div className="h-[76px] md:h-[84px]" />

      <section className="grid min-h-[calc(100svh-76px)] lg:grid-cols-2 md:min-h-[calc(100svh-84px)]">
        <div className="flex flex-col justify-center px-[var(--page-pad-sm)] py-16 md:px-16 lg:px-20 xl:px-24">
          <nav className="mb-10 flex flex-col gap-3" aria-label="Services">
            {keyServices.map((item) => {
              const active = item.slug === service.slug;
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActiveSlug(item.slug)}
                  className={`btn text-left text-[18px] font-medium leading-none tracking-[-0.02em] transition-colors md:text-[22px] ${
                    active
                      ? "text-[var(--color-dark-blue)]"
                      : "text-[#B3B5B7] hover:text-[var(--color-dark-blue)]"
                  }`}
                  aria-current={active ? "true" : undefined}
                >
                  {item.title}
                  {active ? " →" : ""}
                </button>
              );
            })}
          </nav>

          <p className="type-eyebrow text-[var(--color-blue)]">Key Services</p>
          <h1
            className="mt-4 max-w-[12ch] font-[family-name:var(--font-display)] font-semibold text-[var(--color-dark-blue)]"
            style={{
              fontSize: "clamp(40px, 5vw, 72px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            {service.title}
          </h1>
          <p className="mt-6 max-w-[46ch] text-[16px] leading-[1.6] text-[var(--color-dark-blue)]/75 md:text-[17px]">
            {service.paragraphs[0]}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ContactTrigger className="btn btn-primary inline-flex h-12 items-center rounded-full px-7 text-[14px] font-medium">
              Get started →
            </ContactTrigger>
            <Link
              href="/work"
              className="btn btn-outline inline-flex h-12 items-center rounded-full px-7 text-[14px] font-medium"
            >
              View work
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden bg-[var(--color-dark-blue)] lg:min-h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <PhotoCredit src={image.src} />
        </div>
      </section>

      <ScrollStudio />
      <SiteFooter />
    </div>
  );
}

