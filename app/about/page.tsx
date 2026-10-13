import type { Metadata } from "next";
import Link from "next/link";
import { AboutValues } from "@/components/AboutValues";
import { AwardsSection } from "@/components/AwardsSection";
import { LogoMarquee, awardLogos } from "@/components/LogoMarquee";
import { ProjectProcess } from "@/components/ProjectProcess";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ValuesSpotlight } from "@/components/ValuesSpotlight";
import { currentTeam } from "@/lib/team";

export const metadata: Metadata = {
  title: "About Us | Anderson Burton",
  description:
    "Employee-owned Design Build and EPC contractor delivering federal, energy, municipal, and industrial projects since 1999.",
};

export default function AboutV2Page() {
  return (
    <div className="bg-[var(--color-cream)]">
      <SiteHeader variant="overlay" />

      {/* Hero */}
      <section className="relative flex min-h-[560px] h-[min(760px,88svh)] flex-col overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home/values.jpg"
          alt="Crew raising a timber wall frame on a job site"
          className="cover-media"
          style={{ objectPosition: "center 35%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/10" />

        <div className="page-pad relative z-10 flex flex-1 flex-col justify-end pt-28 pb-10 md:pb-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="type-eyebrow text-white/70">About Anderson Burton</p>
              <h1
                className="mt-4 max-w-[820px] font-[family-name:var(--font-display)] font-semibold text-white"
                style={{
                  fontSize: "clamp(40px, 6vw, 80px)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.03em",
                }}
              >
                Builders who own the outcome.
              </h1>
            </div>
            <Link
              href="#team"
              className="btn btn-light inline-flex h-[52px] w-fit shrink-0 items-center rounded-full px-7 text-[15px] font-medium"
            >
              Meet the Team ↓
            </Link>
          </div>
        </div>
      </section>

      <AboutValues />

      {/* Values spotlight */}
      <ValuesSpotlight />

      {/* Client Core process */}
      <section className="bg-[#031229] text-white">
        <div className="page-pad py-20 md:py-[174px]">
          <h2 className="type-h2 max-w-[760px]">
            How we protect your project, phase by phase.
          </h2>
          <div className="mt-10 md:mt-14">
            <ProjectProcess />
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-[100px] page-pad pt-16 pb-20 md:pt-24 md:pb-28">
        <h2 className="type-h2 max-w-[760px] text-[var(--color-dark-blue)]">
          The people behind every project.
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-4 md:gap-y-10 lg:grid-cols-4">
          {currentTeam.map((member) => (
            <figure key={member.slug}>
              <div className="frame relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[var(--color-dark-blue)]">
                {member.photo ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={member.photo} alt={member.name} loading="lazy" />
                ) : (
                  <span
                    aria-hidden
                    className="absolute inset-0 flex items-center justify-center text-[48px] font-semibold tracking-tight text-white/80"
                  >
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                )}
              </div>
              <figcaption className="mt-4">
                <p className="text-[15px] leading-tight font-semibold text-[var(--color-dark-blue)]">
                  {member.name}
                </p>
                <p className="mt-1 text-[14px] leading-tight text-[var(--color-dark-blue)]/65">
                  {member.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <LogoMarquee
        label="Awards"
        logos={awardLogos}
        itemClassName="flex h-12 w-[132px] shrink-0 items-center justify-center md:h-16 md:w-[160px]"
      />

      <AwardsSection />

      <SiteFooter />
    </div>
  );
}
