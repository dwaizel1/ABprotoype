"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowSquareIcon } from "@/components/ArrowSquareIcon";

const approach = [
  {
    title: "Employee-Owned Accountability",
    body: "Since 2021, Anderson Burton has been owned by the people who build it. The superintendent on your site and the estimator on your bid share in the result, so decisions get made like it's their own money on the line.",
    image: "/images/about/hero.jpg",
    alt: "Anderson Burton team members at the office",
    href: "/about",
    cta: "Our Story",
  },
  {
    title: "Federal & Public-Sector Fluency",
    body: "Twenty-seven years of NPS, USACE, and Air Force work means our teams speak the language of federal contracting — submittals, QA/QC, security, and closeout packages delivered right the first time.",
    image: "/images/industries/federal.jpg",
    alt: "Aerial view of a steel-frame federal building under construction",
    href: "/industries#federal",
    cta: "Federal Work",
  },
  {
    title: "Field-Led, Safety-First Delivery",
    body: "Our project leaders come up through the field. Every person on site carries stop-work authority, and a 0.55 EMR reflects a culture where schedule never outranks the crew going home safe.",
    image: "/images/industries/commercial.jpg",
    alt: "Crew erecting a structural steel frame at dusk",
    href: "/key-services",
    cta: "How We Build",
  },
];

export function AboutApproach() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      <ol className="border-t border-[var(--color-dark-blue)]/25 lg:col-span-6">
        {approach.map((item, i) => {
          const open = i === active;
          return (
            <li
              key={item.title}
              className="border-b border-[var(--color-dark-blue)]/25"
            >
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`flex w-full items-baseline gap-6 py-5 text-left transition-opacity duration-300 md:py-6 ${
                  open ? "opacity-100" : "opacity-45 hover:opacity-80"
                }`}
              >
                <span className="w-6 shrink-0 text-[13px] tracking-[-0.25px] text-[var(--color-dark-blue)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[clamp(22px,2.2vw,32px)] leading-[1.1] tracking-[-0.02em] text-[var(--color-dark-blue)]">
                  {item.title}
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-7 pl-12">
                    <p className="max-w-[460px] text-[16px] leading-[1.6] text-[var(--color-dark-blue)]/80">
                      {item.body}
                    </p>
                    <Link
                      href={item.href}
                      tabIndex={open ? 0 : -1}
                      className="btn btn-primary mt-6 inline-flex h-11 items-center gap-2.5 rounded-full pr-5 pl-3 text-[14px] font-medium"
                    >
                      <ArrowSquareIcon size={22} strokeWidth={1.75} />
                      {item.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="flex h-[420px] flex-col gap-3 md:h-[520px] lg:col-span-6">
        {approach.map((item, i) => (
          <button
            key={item.image}
            type="button"
            aria-label={item.title}
            onClick={() => setActive(i)}
            className="frame relative min-h-0 rounded-[18px] bg-[#5e5e5e] transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ flexGrow: i === active ? 6 : 1, flexBasis: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={item.alt} />
            <span
              className={`absolute inset-0 bg-[var(--color-dark-blue)] transition-opacity duration-500 ${
                i === active ? "opacity-0" : "opacity-45"
              }`}
              aria-hidden
            />
          </button>
        ))}
      </div>
    </div>
  );
}
