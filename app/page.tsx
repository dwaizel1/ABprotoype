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
      <section className="relative flex min-h-[640px] h-[min(982px,100svh)] flex-col overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home/hero.jpg"
          alt="Aerial view of solar canopy installation over a parking lot during construction"
          className="absolute inset-0 h-full w-full max-w-none object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/40" />

        <div className="page-pad relative z-10 flex flex-1 flex-col justify-end pt-28 pb-10 md:pb-12">
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

          {/* Bottom strip */}
          <div className="mt-12 grid items-end gap-8 border-t border-white/15 pt-8 md:mt-16 md:gap-10 lg:grid-cols-12 lg:gap-12 lg:pt-10">
            <p className="max-w-[34rem] text-[15px] leading-[1.55] font-light text-white/90 md:text-[16px] lg:col-span-5 lg:justify-self-start">
              Anderson Burton is the employee-owned Design Build and EPC partner
              giving clients a safer, more accountable path through complex
              construction.
            </p>

            <Link
              href="/work/pinnacles-national-park"
              className="group relative flex flex-col gap-4 rounded-[4px] bg-black/45 px-5 py-5 backdrop-blur-md transition hover:bg-black/55 md:px-6 md:py-6 lg:col-span-7 lg:col-start-6"
            >
              <span
                className="absolute top-5 left-5 h-2 w-2 bg-[var(--color-yellow)] md:top-6 md:left-6"
                aria-hidden
              />
              <div className="flex items-start justify-between gap-4 pl-5">
                <p className="text-[10px] font-medium tracking-[0.14em] text-white/55 uppercase">
                  Company News
                </p>
                <p className="text-[10px] font-medium tracking-[0.08em] text-white/55 uppercase">
                  Aug 10, 2026
                </p>
              </div>
              <div className="flex items-end justify-between gap-6 pl-5">
                <p className="max-w-[28ch] text-[16px] leading-[1.35] font-medium text-white md:text-[18px]">
                  Anderson Burton delivers LEED Platinum at Pinnacles National
                  Park
                </p>
                <span
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/35 text-white transition group-hover:border-white group-hover:bg-white group-hover:text-[var(--color-dark-blue)]"
                  aria-hidden
                >
                  →
                </span>
              </div>
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
      <section className="page-pad pb-4 md:pb-6">
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
                      className={`group flex w-full items-start gap-4 py-5 text-left transition duration-300 ${
                        active
                          ? "opacity-100"
                          : "opacity-30 hover:opacity-70"
                      }`}
                      onClick={() => setActiveIndustry(i)}
                      onMouseEnter={() => setActiveIndustry(i)}
                    >
                      <div>
                        <p className="text-[13px] tracking-[-0.25px] text-[var(--color-dark-blue)]">
                          {ind.id}
                        </p>
                        <p className="mt-2 text-[clamp(28px,2.5vw,38px)] leading-[1] tracking-[-1.14px] text-[var(--color-dark-blue)] transition-transform duration-300 group-hover:translate-x-0.5">
                          {ind.name}
                        </p>
                        {active && (
                          <p className="mt-3 max-w-[302px] text-[16px] leading-[24px] text-[var(--color-dark-blue)]">
                            {ind.summary}
                          </p>
                        )}
                      </div>
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

      <LogoMarquee />

      {/* Impact — stats + map (yellow / navy graphic style) */}
      <section
        id="impact"
        className="bg-[var(--color-yellow)] text-[var(--color-dark-blue)]"
      >
        <div className="page-pad border-b border-[var(--color-dark-blue)] pt-14 pb-10 md:pt-20 md:pb-12">
          <p className="type-eyebrow text-[var(--color-dark-blue)]/70">OUR IMPACT</p>
          <h2 className="type-h2 mt-2 max-w-[1108px] capitalize text-[var(--color-dark-blue)]">
            1,000+ Projects Successfully Completed Nationwide
          </h2>
        </div>

        <div className="grid grid-cols-2 border-b border-[var(--color-dark-blue)] md:grid-cols-4">
          {[
            { value: "27", label: "Years in business" },
            { value: "1-30mil", label: "Typical Project Size" },
            { value: "ESOP", label: "Employee Owned" },
            { value: "0.55", label: "Safety Record" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center px-4 py-10 text-center md:py-14 ${
                i % 2 === 1 ? "border-l border-[var(--color-dark-blue)]" : ""
              } ${i >= 2 ? "border-t border-[var(--color-dark-blue)] md:border-t-0" : ""} ${
                i > 0 ? "md:border-l md:border-[var(--color-dark-blue)]" : ""
              }`}
            >
              <p
                className="font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em] text-[var(--color-dark-blue)]"
                style={{ fontSize: "clamp(36px, 5.5vw, 72px)", lineHeight: 1 }}
              >
                {stat.value}
              </p>
              <p className="mt-3 text-[13px] leading-[1.3] text-[var(--color-dark-blue)] md:text-[14px]">
                {stat.label}
              </p>
            </div>
          ))}
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
