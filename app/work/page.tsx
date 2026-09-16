"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { AwardsSection } from "@/components/AwardsSection";
import { LogoMarquee, awardLogos } from "@/components/LogoMarquee";
import { PhotoCredit } from "@/components/PhotoCredit";
import { ProjectCatalog } from "@/components/ProjectCatalog";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/lib/projects";

const filters = ["All", "Federal", "Municipal", "Energy", "Commercial", "Industrial"] as const;

type Filter = (typeof filters)[number];
type ViewMode = "cards" | "list";

function isFilter(value: string | null): value is Filter {
  return !!value && (filters as readonly string[]).includes(value);
}

function WorkPageContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const initialFilter: Filter = isFilter(typeParam) ? typeParam : "All";
  const [activeFilter, setActiveFilter] = useState<Filter>(initialFilter);
  const [view, setView] = useState<ViewMode>("cards");

  useEffect(() => {
    setActiveFilter(isFilter(typeParam) ? typeParam : "All");
  }, [typeParam]);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section className="page-pad pt-16 pb-12 md:pt-24 md:pb-16">
        <p className="type-eyebrow text-[var(--color-blue)]">Work</p>
        <h1
          className="mt-4 max-w-[980px] font-[family-name:var(--font-display)] font-semibold text-[var(--color-dark-blue)]"
          style={{
            fontSize: "clamp(40px, 7vw, 88px)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
          }}
        >
          Projects that prove what ownership looks like on the ground.
        </h1>
        <p className="mt-6 max-w-[640px] type-body-1 text-[var(--color-dark-blue)]/80">
          From federal campuses to municipal civic centers and energy
          infrastructure, our portfolio reflects complex builds delivered with
          schedule certainty and accountability at every stage.
        </p>
      </section>

      <section className="page-pad pb-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="type-eyebrow mb-4 text-[var(--color-text-muted)]">
              Filter
            </p>
            <div
              className="flex flex-wrap gap-3"
              role="tablist"
              aria-label="Filter projects"
            >
              {filters.map((f) => {
                const active = f === activeFilter;
                return (
                  <button
                    key={f}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveFilter(f)}
                    className={`btn inline-flex h-10 items-center rounded-full px-5 type-body-3 ${
                      active ? "btn-pill-active" : "btn-pill"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="inline-flex rounded-full border border-[var(--color-dark-blue)]/25 p-1"
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
        </div>
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
                  <span
                    className="text-[var(--color-navy-ink)] transition group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <ProjectCatalog filter={activeFilter} />

      <LogoMarquee
        label="Awards"
        logos={awardLogos}
        itemClassName="flex h-12 w-[132px] shrink-0 items-center justify-center md:h-16 md:w-[160px]"
      />

      <AwardsSection />
    </>
  );
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <div className="relative">
        <SiteHeader variant="solid" />
        <div className="h-[76px] md:h-[84px]" />
      </div>

      <Suspense fallback={null}>
        <WorkPageContent />
      </Suspense>

      <SiteFooter />
    </div>
  );
}
