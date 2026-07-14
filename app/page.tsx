"use client";

import Link from "next/link";
import { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const industries = [
  {
    id: "01",
    name: "Federal",
    desc: "Defense, military construction, civil works, and federal infrastructure — built to the most demanding standards.",
    image: "/images/home/industry.jpg",
  },
  {
    id: "02",
    name: "Power & Energy",
    desc: "Utilities and energy infrastructure delivered with schedule certainty and operational reliability.",
    image: "/images/home/service-4.jpg",
  },
  {
    id: "03",
    name: "Municipalities",
    desc: "Civic facilities and public works built for the communities that depend on them.",
    image: "/images/home/service-2.jpg",
  },
  {
    id: "04",
    name: "Industrial & Commercial",
    desc: "Complex industrial and commercial builds from ground-up to renovation.",
    image: "/images/home/service-1.jpg",
  },
];

const services = [
  {
    title: "Design Build & EPC",
    desc: "Defense, military construction, civil works, and federal infrastructure — built to the most demanding standards.",
    image: "/images/home/service-1.jpg",
    label: "Name of Project",
  },
  {
    title: "Commercial",
    desc: "Defense, military construction, civil works, and federal infrastructure — built to the most demanding standards.",
    image: "/images/home/service-2.jpg",
    label: "Name of Project",
  },
  {
    title: "Historical Restoration",
    desc: "Defense, military construction, civil works, and federal infrastructure — built to the most demanding standards.",
    image: "/images/home/service-3.jpg",
    label: "Name of Project",
  },
  {
    title: "Federal",
    desc: "Defense, military construction, civil works, and federal infrastructure — built to the most demanding standards.",
    image: "/images/home/service-4.jpg",
    label: "Name of Project",
  },
];

const values = [
  {
    n: "01",
    title: "Safety",
    body: "0.0 DART rate. 0.55 EMR. Every person has stop-work authority.",
  },
  {
    n: "02",
    title: "Community",
    body: "Giving back to the communities supporting us.",
  },
  {
    n: "03",
    title: "Sustainability",
    body: "Designed for longevity. LEED certified. Built to last.",
  },
  {
    n: "04",
    title: "Innovation",
    body: "Drone monitoring. 3D imaging. Carbon procurement.",
  },
];

const mapFilters = ["Nationwide", "West Coast", "East Coast", "Elsewhere"];

export default function HomePage() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [activeFilter, setActiveFilter] = useState(0);
  const [serviceIndex, setServiceIndex] = useState(0);

  return (
    <div className="bg-[var(--color-cream)]">
      <SiteHeader variant="overlay" />

      {/* Hero */}
      <section className="relative h-[min(982px,100svh)] min-h-[640px] overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home/hero.jpg"
          alt="Santa Barbara County Fire Station 27 and Sheriff station at dusk"
          className="absolute inset-0 h-full w-full max-w-none object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/35" />
        <div className="page-pad relative z-10 flex h-full flex-col justify-end pb-16 pt-28 md:pb-24">
          <h1
            className="max-w-[788px] font-[family-name:var(--font-display)] font-semibold text-white"
            style={{
              fontSize: "clamp(48px, 7vw, 105px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Building
            <br />
            What Matters
          </h1>
          <p className="mt-8 max-w-[585px] text-[clamp(16px,1.3vw,18.9px)] leading-[1.67] font-light text-white">
            Employee-owned. Safety-first. Trusted by the U.S. federal government,
            power utilities, and municipalities for over 25 years.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/work"
              className="btn btn-light inline-flex h-[55px] items-center rounded-full px-8 text-[14.7px] font-medium"
            >
              See Our Work →
            </Link>
            <Link
              href="/#contact"
              className="text-[14.7px] text-white transition-opacity hover:opacity-70"
            >
              Connect →
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="page-pad py-16 md:py-24">
        <p className="type-h3 max-w-[1269px] text-[clamp(24px,3.2vw,43px)] leading-[1.45] tracking-[-0.03em] text-[var(--color-dark-blue)]">
          Employee-owned Design Build and EPC firm tackling complex construction
          since 1999. From landmark restorations to ground-up builds, we treat
          your project, people, and community like our own.
        </p>
      </section>

      {/* Our Services */}
      <section className="page-pad pb-20 md:pb-28">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="type-h2 capitalize text-[var(--color-dark-blue)]">
            Our Services
          </h2>
          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              aria-label="Previous services"
              className="btn btn-outline flex size-12 items-center justify-center rounded-full"
              onClick={() =>
                setServiceIndex((i) => (i - 1 + services.length) % services.length)
              }
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next services"
              className="btn btn-outline flex size-12 items-center justify-center rounded-full"
              onClick={() => setServiceIndex((i) => (i + 1) % services.length)}
            >
              →
            </button>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:gap-[17px]">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`w-[min(85vw,431px)] shrink-0 snap-start transition-opacity ${
                i < serviceIndex ? "md:opacity-40" : ""
              }`}
            >
              <div className="frame relative aspect-square rounded-[21px] bg-[#a66161]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt="" />
                <span className="absolute left-5 top-6 z-10 rounded-[14px] bg-white/60 px-7 py-3 text-[11px] font-semibold tracking-tight text-[var(--color-dark-blue)] backdrop-blur-md">
                  {s.label}
                </span>
              </div>
              <h3 className="mt-6 text-[clamp(28px,2.5vw,38px)] leading-[1] tracking-[-1.14px] text-[var(--color-dark-blue)]">
                {s.title}
              </h3>
              <p className="mt-3.5 max-w-[394px] text-[14px] leading-[22px] text-[var(--color-dark-blue)]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Industries */}
      <section className="page-pad pb-0">
        <h2 className="type-h2 mb-10 capitalize text-[var(--color-dark-blue)] md:mb-12">
          Our Industries
        </h2>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <ul className="border-t border-[var(--color-dark-blue)]/40">
              {industries.map((ind, i) => {
                const active = i === activeIndustry;
                return (
                  <li key={ind.id} className="border-b border-[var(--color-dark-blue)]/40">
                    <button
                      type="button"
                      className={`flex w-full items-start justify-between gap-4 py-5 text-left transition ${
                        active ? "opacity-100" : "opacity-30"
                      }`}
                      onClick={() => setActiveIndustry(i)}
                    >
                      <div>
                        <p className="text-[8.3px] tracking-[-0.25px] text-[var(--color-dark-blue)]">
                          {ind.id}
                        </p>
                        <p className="mt-2 text-[clamp(28px,2.5vw,38px)] leading-[1] tracking-[-1.14px] text-[var(--color-dark-blue)]">
                          {ind.name}
                        </p>
                        {active && (
                          <p className="mt-3 max-w-[302px] text-[14px] leading-[22px] text-[var(--color-dark-blue)]">
                            {ind.desc}
                          </p>
                        )}
                      </div>
                      {active && (
                        <span className="mt-8 text-[var(--color-dark-blue)]" aria-hidden>
                          →
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/work"
              className="btn btn-primary mt-8 inline-flex h-[52px] items-center rounded-full px-6 text-[18px]"
            >
              See Our Industries
            </Link>
          </div>
          <div className="frame relative min-h-[360px] rounded-[26px] bg-[#5e5e5e] lg:min-h-[508px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={industries[activeIndustry].image} alt="" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mt-16 bg-[var(--color-dark-blue)] text-[#f7f5f0] md:mt-20">
        <div className="page-pad grid grid-cols-2 gap-8 py-16 md:grid-cols-4 md:py-[147px]">
          {[
            { value: "25", label: "Years in business" },
            { value: "1-30mil", label: "Typical Project Size" },
            { value: "ESOP", label: "Employee Owned" },
            { value: "0.55", label: "Safety Record" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="font-[family-name:var(--font-display)] tracking-[-0.03em]"
                style={{ fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 1.1 }}
              >
                {stat.value}
              </p>
              <p className="mt-3 text-[14px] leading-[22px] text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact / Map */}
      <section className="bg-[#f5f4ed]">
        <div className="page-pad py-16 md:py-24">
          <p className="type-eyebrow text-[#262626]">OUR IMPACT</p>
          <h2 className="type-h2 mt-2 max-w-[1108px] capitalize text-[var(--color-dark-blue)]">
            1,000+ Projects Successfully Completed Nationwide
          </h2>
          <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex flex-row flex-wrap gap-3 lg:w-[139px] lg:flex-col lg:gap-4">
              {mapFilters.map((f, i) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActiveFilter(i)}
                  className={`btn h-[37px] rounded-full px-4 text-[13px] ${
                    i === activeFilter ? "btn-pill-active" : "btn-outline"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="frame relative min-h-[280px] flex-1 md:min-h-[480px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/home/map.png"
                alt="Project locations across the United States"
                className="!object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-dark-blue)] text-white">
        <div className="page-pad py-16 md:py-24">
          <p className="type-eyebrow text-[var(--color-yellow)]">OUR VALUES</p>
          <h2 className="type-h2 mt-2 max-w-[856px] capitalize">
            Built on four
            <br />
            non-negotiables
          </h2>
          <div className="frame relative mt-12 h-[240px] rounded-[20px] md:h-[388px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/home/values.jpg" alt="" />
          </div>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.n}
                className="border-l border-white/40 pl-6 lg:border-l lg:pl-7"
              >
                <p className="text-[72px] leading-none">{v.n}</p>
                <h3 className="mt-6 text-[22px]">{v.title}</h3>
                <p className="mt-3 max-w-[302px] text-[14px] leading-[22px] text-white/60">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
