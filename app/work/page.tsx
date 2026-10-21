"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { ArrowSquareIcon } from "@/components/ArrowSquareIcon";
import { AwardsSection } from "@/components/AwardsSection";
import { LogoMarquee } from "@/components/LogoMarquee";
import { PhotoCredit } from "@/components/PhotoCredit";
import { ProjectCatalog } from "@/components/ProjectCatalog";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WorkFilterTabs, useWorkFilter } from "@/components/WorkFilterTabs";
import { WorkHero } from "@/components/WorkHero";

type ViewMode = "cards" | "list";

function WorkPageContent() {
  const { activeFilter, setActiveFilter, filtered } = useWorkFilter();
  const [view, setView] = useState<ViewMode>("cards");

  return (
    <>
      <WorkHero />

      <section className="page-pad pt-14 pb-10 md:pt-20 md:pb-12">
        <WorkFilterTabs
          active={activeFilter}
          onChange={setActiveFilter}
          aside={
            <div
              className="mb-2 inline-flex shrink-0 rounded-full border border-[var(--color-dark-blue)]/25 p-1"
              role="group"
              aria-label="View style"
            >
              <button
                type="button"
                aria-pressed={view === "cards"}
                onClick={() => setView("cards")}
                className={`btn inline-flex h-9 items-center rounded-full px-4 text-[13px] ${
                  view === "cards"
                    ? "bg-[var(--color-dark-blue)] text-white"
                    : "text-[var(--color-dark-blue)] hover:bg-[var(--color-dark-blue)]/5"
                }`}
              >
                Cards
              </button>
              <button
                type="button"
                aria-pressed={view === "list"}
                onClick={() => setView("list")}
                className={`btn inline-flex h-9 items-center rounded-full px-4 text-[13px] ${
                  view === "list"
                    ? "bg-[var(--color-dark-blue)] text-white"
                    : "text-[var(--color-dark-blue)] hover:bg-[var(--color-dark-blue)]/5"
                }`}
              >
                List
              </button>
            </div>
          }
        />
      </section>

      <section className="page-pad pb-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="type-h2 text-[var(--color-dark-blue)]">Key Projects</h2>
          <p className="type-body-3 text-[var(--color-text-muted)]">
            {filtered.length} project{filtered.length === 1 ? "" : "s"}
          </p>
        </div>

        {filtered.length === 0 ? (
          <p className="type-body-2 py-10 text-[var(--color-text-muted)]">
            No projects match this filter.
          </p>
        ) : view === "cards" ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {filtered.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group overflow-hidden"
              >
                <div className="frame relative aspect-[4/3] overflow-hidden rounded-[16px] bg-[#414141]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.heroImage}
                    alt=""
                    className="transition duration-500 group-hover:scale-105"
                    style={{ objectPosition: project.heroPosition ?? "center" }}
                  />
                  <span className="absolute left-4 top-4 z-10 rounded-[12px] bg-white/70 px-4 py-2 text-[11px] font-semibold tracking-tight text-[var(--color-dark-blue)] backdrop-blur-md">
                    {project.type}
                  </span>
                  <PhotoCredit src={project.heroImage} />
                </div>
                <p className="type-h6 mt-4 text-[var(--color-dark-blue)]">
                  {project.title}
                </p>
                <p className="type-body-3 mt-1 text-[var(--color-text-muted)]">
                  {project.location} · {project.type}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <ul className="border-t border-[var(--color-dark-blue)]/20">
            {filtered.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group grid grid-cols-1 items-center gap-3 border-b border-[var(--color-dark-blue)]/20 py-5 transition-colors hover:bg-[var(--color-dark-blue)]/5 md:grid-cols-[1.2fr_1fr_0.8fr_auto] md:gap-8"
                >
                  <span className="type-body-2 text-[var(--color-navy-ink)]">
                    {project.title}
                  </span>
                  <span className="type-body-2 text-[var(--color-navy-ink)]">
                    {project.location}
                  </span>
                  <span className="type-body-2 text-[var(--color-navy-ink)]">
                    {project.type}
                  </span>
                  <ArrowSquareIcon
                    size={20}
                    className="text-[var(--color-navy-ink)] transition group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <ProjectCatalog filter={activeFilter} />

      <LogoMarquee variant="awards" />

      <AwardsSection />
    </>
  );
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <SiteHeader variant="overlay" />

      <Suspense fallback={null}>
        <WorkPageContent />
      </Suspense>

      <SiteFooter />
    </div>
  );
}
