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

const team = [
  { id: "team-105A2401", name: "Team Member", role: "Operations" },
  { id: "team-cameron", name: "Cameron", role: "Project Management" },
  { id: "team-courtney", name: "Courtney", role: "Administration" },
  { id: "team-joni", name: "Joni", role: "Leadership" },
  { id: "team-dan", name: "Dan", role: "Field Operations" },
  { id: "team-dave", name: "Dave", role: "Project Management" },
  { id: "team-erin", name: "Erin", role: "Business Development" },
  { id: "team-john", name: "John", role: "Estimating" },
  { id: "team-keone", name: "Keone", role: "Field Operations" },
  { id: "team-lauren", name: "Lauren", role: "Project Coordination" },
  { id: "team-nicole", name: "Nicole", role: "Accounting" },
  { id: "team-reno", name: "Reno", role: "Superintendence" },
  { id: "team-sandy", name: "Sandy", role: "Administration" },
  { id: "team-teala", name: "Teala", role: "Human Resources" },
  { id: "team-todd", name: "Todd", role: "Leadership" },
  { id: "team-robert", name: "Robert", role: "Field Operations" },
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
          <img
            src="/images/about/hero.jpg"
            alt="Anderson Burton Construction team at the office"
          />
        </div>
      </div>

      <section className="page-pad pt-12 pb-10 md:pt-16 md:pb-14">
        <h1
          className="max-w-[980px] font-[family-name:var(--font-display)] font-semibold text-[var(--color-dark-blue)]"
          style={{
            fontSize: "clamp(40px, 7vw, 88px)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
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
          Twenty-seven years, coast to coast.
        </p>
        <div className="lg:col-span-8">
          <p className="type-h3 text-[var(--color-blue)]">
            For 27 years, Anderson Burton has built federal, energy, municipal,
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

      {/* 5 key values */}
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
            {pillars.map((v) => (
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

      {/* Team */}
      <section className="page-pad py-16 md:py-24">
        <h2 className="type-h2 mb-10 text-[var(--color-blue)]">Our Team</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {team.map((member) => (
            <div key={member.id} className="group relative">
              <div className="frame relative aspect-square overflow-hidden rounded-[15px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/about/${member.id}.jpg`}
                  alt={member.name}
                />
              </div>
              <div className="pointer-events-none absolute top-full right-0 left-0 z-10 pt-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-[10px] bg-[var(--color-dark-blue)] px-3.5 py-2.5 text-white shadow-[0_8px_24px_rgba(4,23,60,0.2)]">
                  <p className="text-[14px] font-medium leading-tight">
                    {member.name}
                  </p>
                  <p className="mt-0.5 text-[12px] leading-tight text-white/65">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
