import type { Metadata } from "next";
import Link from "next/link";
import { PhotoCredit } from "@/components/PhotoCredit";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { industries } from "@/lib/industries";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Industries | Anderson Burton",
  description:
    "Federal, energy, municipal, and industrial construction — sectors we know how to deliver.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <div className="relative">
        <SiteHeader variant="solid" />
        <div className="h-[76px] md:h-[84px]" />
      </div>

      <section className="page-pad pt-16 pb-12 md:pt-24 md:pb-16">
        <p className="type-eyebrow text-[var(--color-blue)]">Industries</p>
        <h1
          className="mt-4 max-w-[980px] font-[family-name:var(--font-display)] font-semibold text-[var(--color-dark-blue)]"
          style={{
            fontSize: "clamp(40px, 7vw, 88px)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
          }}
        >
          Built for the sectors that keep the country running.
        </h1>
        <p className="mt-6 max-w-[640px] type-body-1 text-[var(--color-dark-blue)]/80">
          Federal campuses, energy infrastructure, civic facilities, and
          industrial builds — each with its own constraints. We bring the same
          ownership mindset to every one.
        </p>

        <nav
          className="mt-12 flex flex-wrap gap-3"
          aria-label="Industry sections"
        >
          {industries.map((industry) => (
            <a
              key={industry.slug}
              href={`#${industry.slug}`}
              className="btn btn-outline inline-flex h-10 items-center rounded-full px-5 text-[13px]"
            >
              {industry.name}
            </a>
          ))}
        </nav>
      </section>

      <div className="page-pad">
        <hr className="border-[var(--color-dark-blue)]/20" />
      </div>

      {industries.map((industry, index) => {
        const related = projects
          .filter((p) => {
            if (industry.workFilter === "Industrial") {
              return p.type === "Industrial" || p.type === "Commercial";
            }
            return p.type === industry.workFilter;
          })
          .slice(0, 2);
        const reversed = index % 2 === 1;

        return (
          <section
            key={industry.slug}
            id={industry.slug}
            className="scroll-mt-[100px] page-pad py-16 md:py-24"
          >
            <div
              className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="frame relative min-h-[320px] rounded-[24px] bg-[#5e5e5e] md:min-h-[440px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={industry.image} alt="" />
                <PhotoCredit src={industry.image} />
              </div>

              <div>
                <p className="text-[12px] tracking-[0.08em] text-[var(--color-dark-blue)]/50">
                  {industry.id}
                </p>
                <h2 className="mt-3 type-h2 capitalize text-[var(--color-dark-blue)]">
                  {industry.name}
                </h2>
                <p className="mt-5 max-w-[480px] text-[17px] leading-[1.65] text-[var(--color-dark-blue)]/85">
                  {industry.description}
                </p>

                <ul className="mt-8 space-y-3 border-t border-[var(--color-dark-blue)]/20 pt-6">
                  {industry.focuses.map((focus) => (
                    <li
                      key={focus}
                      className="flex gap-3 text-[15px] leading-[1.5] text-[var(--color-dark-blue)]"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-yellow)]"
                        aria-hidden
                      />
                      {focus}
                    </li>
                  ))}
                </ul>

                {related.length > 0 && (
                  <div className="mt-10">
                    <p className="type-eyebrow text-[var(--color-dark-blue)]/50">
                      Related work
                    </p>
                    <ul className="mt-4 border-t border-[var(--color-dark-blue)]/20">
                      {related.map((project) => (
                        <li key={project.slug}>
                          <Link
                            href={`/work/${project.slug}`}
                            className="group flex items-center justify-between gap-4 border-b border-[var(--color-dark-blue)]/20 py-4 transition-opacity hover:opacity-70"
                          >
                            <span className="text-[15px] text-[var(--color-dark-blue)]">
                              {project.title.split(",")[0]}
                              <span className="mt-1 block text-[13px] text-[var(--color-dark-blue)]/55">
                                {project.location}
                              </span>
                            </span>
                            <span
                              className="shrink-0 transition group-hover:translate-x-1"
                              aria-hidden
                            >
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-10">
                  <Link
                    href={`/work?type=${encodeURIComponent(industry.workFilter)}`}
                    className="btn btn-primary inline-flex h-[52px] items-center rounded-full px-7 text-[15px] font-medium"
                  >
                    View {industry.shortName} Work →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <SiteFooter />
    </div>
  );
}
