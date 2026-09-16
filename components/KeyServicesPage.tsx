"use client";

import { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { KeyService } from "@/lib/key-services";

export function KeyServicesPage({ services }: { services: KeyService[] }) {
  const [activeSlug, setActiveSlug] = useState(services[0]?.slug ?? "");
  const service = services.find((s) => s.slug === activeSlug) ?? services[0];

  if (!service) return null;

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <div className="relative">
        <SiteHeader variant="solid" />
        <div className="h-[76px] md:h-[84px]" />
      </div>

      <section className="page-pad pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <nav
            className="flex flex-col gap-4 lg:col-span-4 xl:col-span-3"
            aria-label="Key services"
          >
            {services.map((item) => {
              const active = item.slug === service.slug;
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActiveSlug(item.slug)}
                  className={`btn text-left text-[clamp(22px,2.2vw,32px)] font-medium leading-[1.15] tracking-[-0.02em] transition-colors ${
                    active
                      ? "text-[var(--color-dark-blue)]"
                      : "text-[#B3B5B7] hover:text-[var(--color-dark-blue)]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.title}
                  {active ? " →" : ""}
                </button>
              );
            })}
          </nav>

          <div className="lg:col-span-8 xl:col-span-9">
            <p className="type-eyebrow text-[var(--color-blue)]">Key Services</p>

            <h1
              className="mt-4 max-w-[900px] font-[family-name:var(--font-display)] font-semibold text-[var(--color-dark-blue)]"
              style={{
                fontSize: "clamp(40px, 7vw, 88px)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              {service.title}
            </h1>

            <div className="mt-6 max-w-[720px] space-y-5 type-body-1 text-[var(--color-dark-blue)]/80">
              {service.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-14 max-w-[920px] border-t border-[var(--color-dark-blue)]/20 md:mt-16">
              {service.items.map((item) => (
                <li
                  key={item.title}
                  className="border-b border-[var(--color-dark-blue)]/20 py-5 text-[16px] leading-[1.45] text-[var(--color-dark-blue)] md:py-6 md:text-[18px]"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
