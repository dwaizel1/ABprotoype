"use client";

import { Suspense } from "react";
import { AwardsSection } from "@/components/AwardsSection";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ProjectCatalog } from "@/components/ProjectCatalog";
import { ProjectTile } from "@/components/ProjectTile";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WorkFilterTabs, useWorkFilter } from "@/components/WorkFilterTabs";
import { WorkHero } from "@/components/WorkHero";
import type { Project } from "@/lib/projects";

type RowKind = "lead" | "full" | "pair";
type Row = { kind: RowKind; items: Project[] };

const rowPattern: RowKind[] = ["lead", "full", "pair"];
const rowSize: Record<RowKind, number> = { lead: 2, full: 1, pair: 2 };

/** Lays projects out as big+small, full-width, then two-up, repeating. */
function toRows(list: Project[]): Row[] {
  const rows: Row[] = [];
  let i = 0;
  while (i < list.length) {
    const kind = rowPattern[rows.length % rowPattern.length];
    const items = list.slice(i, i + rowSize[kind]);
    rows.push({ kind: items.length < rowSize[kind] ? "full" : kind, items });
    i += items.length;
  }
  return rows;
}

function ProjectRow({ row }: { row: Row }) {
  if (row.kind === "full") {
    return (
      <ProjectTile project={row.items[0]} aspect="aspect-[4/3] md:aspect-[16/9]" />
    );
  }

  if (row.kind === "lead") {
    return (
      <div className="grid gap-x-5 gap-y-12 md:grid-cols-[2fr_1fr] md:items-start">
        <ProjectTile project={row.items[0]} aspect="aspect-[3/2]" />
        <ProjectTile project={row.items[1]} aspect="aspect-[3/2]" />
      </div>
    );
  }

  return (
    <div className="grid gap-x-5 gap-y-12 md:grid-cols-[1.2fr_1fr] md:items-start">
      <ProjectTile project={row.items[0]} aspect="aspect-[3/2] md:aspect-[16/9]" />
      <ProjectTile project={row.items[1]} aspect="aspect-[3/2] md:aspect-[40/27]" />
    </div>
  );
}

function WorkTwoContent() {
  const { activeFilter, setActiveFilter, filtered } = useWorkFilter();
  const rows = toRows(filtered);

  return (
    <>
      <WorkHero />

      <section className="page-pad pt-14 pb-10 md:pt-20 md:pb-14">
        <WorkFilterTabs active={activeFilter} onChange={setActiveFilter} />
      </section>

      <section className="page-pad pb-24">
        {rows.length === 0 ? (
          <p className="type-body-2 py-10 text-[var(--color-text-muted)]">
            No projects match this filter.
          </p>
        ) : (
          <div key={activeFilter} className="process-panel flex flex-col gap-16 md:gap-24">
            {rows.map((row) => (
              <ProjectRow key={row.items[0].slug} row={row} />
            ))}
          </div>
        )}
      </section>

      <ProjectCatalog filter={activeFilter} />

      <LogoMarquee variant="awards" />

      <AwardsSection />
    </>
  );
}

export default function WorkTwoPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <SiteHeader variant="overlay" />

      <Suspense fallback={null}>
        <WorkTwoContent />
      </Suspense>

      <SiteFooter />
    </div>
  );
}
