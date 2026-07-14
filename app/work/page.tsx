"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/lib/projects";

const filters = ["All", "Federal", "Municipal", "Energy", "Commercial", "Industrial"] as const;

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-[var(--color-cream)] min-h-screen">
      <div className="relative">
        <SiteHeader variant="solid" />
        <div className="h-[76px] md:h-[84px]" />
      </div>

      <section className="page-pad pt-16 pb-10 md:pt-24">
        <p className="type-eyebrow text-[var(--color-blue)]">OUR WORK</p>
        <h1 className="type-h1 mt-3 max-w-[900px] text-[var(--color-blue)]">
          Work Introduction
        </h1>
        <p className="type-body-1 mt-6 max-w-[780px] text-[var(--color-blue)]">
          From federal campuses to municipal civic centers and energy
          infrastructure, our portfolio reflects complex builds delivered with
          ownership-minded accountability.
        </p>
      </section>

      <section className="page-pad pb-8">
        <p className="type-eyebrow mb-4 text-[var(--color-text-muted)]">
          Project Filter
        </p>
        <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter projects">
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
      </section>

      <section className="page-pad pb-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="type-h2 text-[var(--color-blue)]">Key Projects</h2>
          <p className="type-body-3 text-[var(--color-text-muted)]">
            {filtered.length} project{filtered.length === 1 ? "" : "s"}
          </p>
        </div>

        {filtered.length === 0 ? (
          <p className="type-body-2 text-[var(--color-text-muted)] py-10">
            No projects match this filter.
          </p>
        ) : (
          <>
            <ul className="border-t border-[var(--color-blue)]/30">
              {filtered.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="group grid grid-cols-1 items-center gap-3 border-b border-[var(--color-blue)]/30 py-5 transition-colors hover:bg-[var(--color-dark-blue)]/5 md:grid-cols-[1.2fr_1fr_0.8fr_auto] md:gap-8"
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

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group overflow-hidden rounded-[16px]"
                >
                  <div className="frame relative aspect-[4/3] bg-[#414141]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.heroImage}
                      alt=""
                      className="transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="type-h6 mt-4 text-[var(--color-blue)]">{project.title}</p>
                  <p className="type-body-3 mt-1 text-[var(--color-text-muted)]">
                    {project.location} · {project.type}
                  </p>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
