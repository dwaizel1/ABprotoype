import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About Us | Anderson Burton",
  description:
    "Building across the country, start to finish. Employee-owned construction since 1999.",
};

const pillars = [
  {
    title: "Safety",
    body: "For 25 years, Anderson Burton has built federal, energy, municipal, and industrial projects across the US. We became employee-owned in 2021, so the people on your job own the firm doing it.",
  },
  {
    title: "Quality",
    body: "For 25 years, Anderson Burton has built federal, energy, municipal, and industrial projects across the US. We became employee-owned in 2021, so the people on your job own the firm doing it.",
  },
  {
    title: "Integrity",
    body: "For 25 years, Anderson Burton has built federal, energy, municipal, and industrial projects across the US. We became employee-owned in 2021, so the people on your job own the firm doing it.",
  },
  {
    title: "Accountability",
    body: "For 25 years, Anderson Burton has built federal, energy, municipal, and industrial projects across the US. We became employee-owned in 2021, so the people on your job own the firm doing it.",
  },
  {
    title: "Stewardship",
    body: "For 25 years, Anderson Burton has built federal, energy, municipal, and industrial projects across the US. We became employee-owned in 2021, so the people on your job own the firm doing it.",
  },
];

const team = [
  "team-105A2401",
  "team-cameron",
  "team-courtney",
  "team-joni",
  "team-dan",
  "team-dave",
  "team-erin",
  "team-john",
  "team-keone",
  "team-lauren",
  "team-nicole",
  "team-reno",
  "team-sandy",
  "team-teala",
  "team-todd",
  "team-robert",
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-cream)]">
      <div className="relative">
        <SiteHeader variant="overlay" />
      </div>

      {/* Hero image */}
      <div className="page-pad pt-[84px] md:pt-[92px]">
        <div className="frame relative h-[280px] rounded-[16px] md:h-[420px] lg:h-[605px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about/hero.jpg" alt="" />
        </div>
      </div>

      <section className="page-pad pt-12 pb-10 md:pt-16 md:pb-14">
        <h1
          className="font-[family-name:var(--font-display)] font-semibold text-[var(--color-navy-ink)]"
          style={{
            fontSize: "clamp(40px, 8.5vw, 131px)",
            lineHeight: 0.95,
            letterSpacing: "-0.015em",
          }}
        >
          Building across the country, start to finish.
        </h1>
      </section>

      <div className="page-pad">
        <hr className="border-[var(--color-blue)]/30" />
      </div>

      <section className="page-pad grid gap-10 py-12 pb-20 lg:grid-cols-12 lg:gap-x-8 lg:py-16 lg:pb-20">
        <p className="type-body-2 text-[var(--color-navy-ink)] lg:col-span-4">
          Twenty-five years, coast to coast.
        </p>
        <div className="lg:col-span-8">
          <p className="type-h3 text-[var(--color-blue)]">
            For 25 years, Anderson Burton has built federal, energy, municipal,
            and industrial projects across the US. We became employee-owned in
            2021, so the people on your job own the firm doing it.
          </p>
          <Link
            href="/work"
            className="btn btn-primary mt-9 inline-flex size-[47px] items-center justify-center rounded-full"
            aria-label="View our work"
          >
            →
          </Link>

          <ul className="mt-16 w-full">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group flex items-center justify-between gap-4 border-b border-[var(--color-blue)]/25 py-5 transition-colors hover:bg-[var(--color-dark-blue)]/5"
                >
                  <div className="grid flex-1 grid-cols-1 gap-2 type-body-2 text-[var(--color-navy-ink)] sm:grid-cols-3 sm:gap-8">
                    <span>{project.title.split(",")[0]}</span>
                    <span>{project.location}</span>
                    <span>{project.type}</span>
                  </div>
                  <span className="shrink-0 transition group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Key Pillars */}
      <section className="bg-[var(--color-deep-navy)] text-white rounded-t-[43px] px-[var(--page-pad-sm)] py-16 md:px-12 lg:px-20 lg:py-20">
        <h2 className="type-h2 max-w-[570px]">
          The Key Pillars
          <br />
          that set us apart
        </h2>
        <div className="mt-12 flex flex-col gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="border-t border-white/40 pt-4">
              <div className="flex flex-col gap-6 md:flex-row md:gap-[171px]">
                <h3 className="type-h3 shrink-0 md:w-[220px]">{pillar.title}</h3>
                <p className="type-body-2 max-w-[350px] text-white/90">{pillar.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="page-pad py-16 md:py-24">
        <h2 className="type-h2 mb-10 text-[var(--color-blue)]">Our Team</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {team.map((id) => (
            <div key={id} className="frame relative aspect-[294/255] bg-[var(--color-light-gray)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/about/${id}.jpg`} alt="" />
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
