"use client";

import Link from "next/link";
import { useState } from "react";
import { ImpactMap } from "@/components/ImpactMap";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { industries } from "@/lib/industries";
const services = [
  {
    title: "Design Build & EPC",
    desc: "Defense, military construction, civil works, and federal infrastructure — built to the most demanding standards.",
    image: "/images/home/service-2.jpg",
    label: "New Cuyama Fire Station, Santa Barbara",
  },
  {
    title: "Commercial Construction",
    desc: "Defense, military construction, civil works, and federal infrastructure — built to the most demanding standards.",
    image: "/images/home/service-1.jpg",
    label: "Harris Law Building, San Luis Obispo",
  },
  {
    title: "Historical Restoration",
    desc: "Defense, military construction, civil works, and federal infrastructure — built to the most demanding standards.",
    image: "/images/home/service-3.jpg",
    label: "USS Maine Memorial, Arlington National Cemetery",
  },
  {
    title: "Operations & Maintenance",
    desc: "Defense, military construction, civil works, and federal infrastructure — built to the most demanding standards.",
    image: "/images/home/service-4.jpg",
    label: "Name of Project",
  },
];

const values = [
  {
    title: "Safety",
    body: "Every person has stop-work authority. We protect people first—on every site, every shift.",
  },
  {
    title: "Quality",
    body: "We build to last. Craft, materials, and documentation meet the standard the work demands.",
  },
  {
    title: "Integrity",
    body: "We say what we mean and deliver what we promise—openly with clients, partners, and each other.",
  },
  {
    title: "Accountability",
    body: "Employee-owned means the people on your job own the outcome. Responsibility stays close to the work.",
  },
  {
    title: "Stewardship",
    body: "We care for the communities, environments, and resources entrusted to us—during construction and after.",
  },
];

export default function HomePage() {
  const [activeIndustry, setActiveIndustry] = useState(0);
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
            power utilities, and municipalities for over 27 years.
          </p>
          <div className="mt-8">
            <Link
              href="/work"
              className="btn btn-light inline-flex h-[55px] items-center rounded-full px-8 text-[14.7px] font-medium"
            >
              See Our Work →
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

      <ServicesCarousel services={services} />

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
                            {ind.summary}
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
              href="/industries"
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
            { value: "27", label: "Years in business" },
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

      <LogoMarquee />

      {/* Impact / Map */}
      <section id="impact" className="bg-[#f5f4ed]">
        <div className="page-pad pt-16 pb-8 md:pt-24 md:pb-10">
          <p className="type-eyebrow text-[#262626]">OUR IMPACT</p>
          <h2 className="type-h2 mt-2 max-w-[1108px] capitalize text-[var(--color-dark-blue)]">
            1,000+ Projects Successfully Completed Nationwide
          </h2>
        </div>
        <ImpactMap />
      </section>

      {/* Values */}
      <section className="bg-[var(--color-dark-blue)] text-white">
        <div className="page-pad py-16 md:py-24">
          <p className="type-eyebrow text-[var(--color-yellow)]">Our Values</p>
          <h2 className="type-h2 mt-2 max-w-[856px] capitalize">
            5 key values
          </h2>
          <div className="frame relative mt-12 h-[240px] rounded-[20px] md:h-[388px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/home/values.jpg" alt="" />
          </div>
          <ul className="mt-16 border-t border-white/40">
            {values.map((v) => (
              <li
                key={v.title}
                className="border-b border-white/40 py-6 md:py-8"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-12">
                  <h3 className="text-[clamp(28px,3vw,40px)] font-medium leading-none tracking-[-0.02em]">
                    {v.title}
                  </h3>
                  <p className="max-w-[460px] text-[14px] leading-[22px] text-white/60 md:text-right">
                    {v.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
