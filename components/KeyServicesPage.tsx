"use client";

import { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { KeyService } from "@/lib/key-services";

export function KeyServicesPage({ services }: { services: KeyService[] }) {
  const [activeSlug, setActiveSlug] = useState(services[0]?.slug ?? "");
  const [openId, setOpenId] = useState<number | null>(null);
  const service = services.find((s) => s.slug === activeSlug) ?? services[0];

  if (!service) return null;

  function selectService(slug: string) {
    setActiveSlug(slug);
    setOpenId(null);
  }

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
                  onClick={() => selectService(item.slug)}
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
              {service.items.map((item, i) => {
                const isOpen = openId === i;
                return (
                  <li
                    key={item.title}
                    className="border-b border-[var(--color-dark-blue)]/20"
                  >
                    <button
                      type="button"
                      className="btn flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
                      onClick={() => setOpenId(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="text-[16px] leading-[1.45] text-[var(--color-dark-blue)] md:text-[18px]">
                        {item.title}
                      </span>
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-dark-blue)]/35 text-[20px] leading-none text-[var(--color-dark-blue)] transition-transform duration-300 md:size-9 ${
                          isOpen ? "rotate-45 bg-[var(--color-dark-blue)]/5" : ""
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[640px] pb-6 pr-14 text-[15px] leading-[1.65] text-[var(--color-dark-blue)]/70 md:text-[16px]">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
